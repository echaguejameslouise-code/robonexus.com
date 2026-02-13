
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the RoboNexus AI Assistant, a world-class expert in robotics engineering and sales. 
Your goal is to help customers choose the right robotics products across three categories:
1. Construction Robotics (high-budget, industrial utility)
2. Agriculture Robotics (sustainable, precision farming)
3. Educational / Arduino Robotics (learning-focused, DIY)

Be professional, technical yet accessible, and always try to guide the user towards our product catalog. 
If they ask for advice on which one to buy, ask about their budget and use case.
Keep responses concise and formatted in Markdown.
`;

export async function getChatResponse(history: Message[], userInput: string): Promise<string> {
  try {
    const chat = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    const response = await chat;
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a technical glitch. Please try again or contact support.";
  }
}
