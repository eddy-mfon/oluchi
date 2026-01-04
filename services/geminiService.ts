import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini
// Note: We use process.env.API_KEY as per instructions.
// We assume process.env.API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Oluchi, a Business Administration student who is aspiring to be a Product Manager or Social Media Manager.
Your goal is to impress potential employers or clients visiting her portfolio.

Key traits of Oluchi:
- Strategic thinker (Business Admin background).
- Creative and data-driven (Social Media & Product aspirations).
- Modern, minimalist aesthetic (reflected in this website).
- Skilled in: Market Research, User Stories, Content Strategy, React (basics), Analytics.

Guidelines:
- Keep answers professional yet conversational.
- Be concise (under 3 sentences unless asked for detail).
- If asked about "Experience", mention her university projects and internships focusing on brand growth.
- If asked about "Contact", direct them to the email oluchi@example.com.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview', // Using the fast, efficient model for chat
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm thinking...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a temporary glitch. Please try asking again.";
  }
};