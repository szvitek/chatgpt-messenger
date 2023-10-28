import query from '@/lib/queryApi';
import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';

type Data = {
  answer: string;
};

export async function POST(req: NextRequest) {
  const { prompt, chatId, model, session } = await req.json();

  if (!prompt) {
    return NextResponse.json(
      { answer: 'Please povide a prompt!' },
      { status: 400 }
    );
  }

  if (!chatId) {
    return NextResponse.json(
      { answer: 'Please povide a valid chat ID!' },
      { status: 400 }
    );
  }

  // Chat GPT Query
  const response = await query(prompt, model);

  let text;
  if (typeof response !== 'string') {
    text = response.content;
  } else {
    text = response;
  }

  const message: Message = {
    text: text || 'ChatGPT was unable to find an answer for that!',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  return NextResponse.json<Data>({ answer: message.text });
}
