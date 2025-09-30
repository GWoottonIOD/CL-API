import OpenAI from "openai";
import 'dotenv/config';

export const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export const response = await openai.responses.create({
    model: "gpt-4.1",
    input: "Tell me a three sentence bedtime story about a unicorn."
});

  console.log(response.output[0].content[0].text);