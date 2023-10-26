import OpenAI, { ClientOptions } from 'openai';

const configuration: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY
}
  
const openai = new OpenAI(configuration)

export default openai;