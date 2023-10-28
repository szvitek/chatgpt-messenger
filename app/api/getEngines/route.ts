import openai from '@/lib/chatgpt';
import { NextResponse } from 'next/server';

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export async function GET(request: Request) {
  const { data: models } = await openai.models.list();

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  return NextResponse.json<Data>({ modelOptions }, { status: 200 });
}
