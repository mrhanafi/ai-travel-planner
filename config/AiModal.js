import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

const ai = new GoogleGenAI({ apiKey: process.env.EXPO_GEMINI_KEY });

const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    responseMimeType: 'application/json',
  };

  const model = 'gemini-2.0-flash';

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
export async function generateAiSession(contents) {
 const chatSession = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
    // contents: "Explain how AI works in a few words",
  });
  return chatSession;
//   console.log(chatSession.text);
}

// main();

const client = new OpenAI({
  apiKey:process.env.EXPO_OPENAI_KEY
});

export async function genOpenAi(contents) {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: contents,
    text:{
      format:{
        type:"json_object"
      }
    }
});
   return response.output_text;
 //   console.log(chatSession.text);
 }



export const generateOpenAi = async (prompt) => {
  
  const response = await client.responses.create({
      model: "gpt-4.1",
      input: prompt,
      text:{
        format:{
          type:"json_object"
        }
      }
  });

  return response.output_text;
}