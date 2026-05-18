import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured in secrets.");
      }

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are the AI assistant for 'skr news' (极简双语新闻). You help users: 1. Summarize latest news 2. Explain technical terms 3. Translate between English and Chinese 4. Answer general questions. Your tone is professional, minimalist, and helpful. Always use Markdown for formatting.",
        },
        history: history?.map((m: any) => ({
          role: m.role,
          parts: [{ text: m.parts[0].text }]
        })) || [],
      });

      const result = await chat.sendMessage({ message });
      
      if (!result.text) {
        throw new Error("Empty response from AI model.");
      }

      res.json({ text: result.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      const status = error.message?.includes("configured") ? 500 : 400;
      res.status(status).json({ 
        error: error.message || "An error occurred while communicating with the AI." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
