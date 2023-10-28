import openai from './chatgpt';

const query = async (prompt: string, model: string) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return chatCompletion.choices[0].message;
  } catch (err) {
    return `ChatGPT was unable to find an answer for that! (Error: ${
      (err as Error).message
    })`;
  }
};

export default query;
