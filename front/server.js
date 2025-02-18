// server.js (간단한 Express 서버 예제)
import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.VITE_GPT_API_KEY,
});

app.post("/api/translate", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "텍스트가 입력되지 않았습니다." });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Translate this text into English:" },
        { role: "user", content: text },
      ],
      temperature: 0.3,
      max_tokens: 200,
    });

    const translation = response.choices?.[0]?.message?.content || "번역 실패";

    // 항상 JSON 형식으로 응답
    res.status(200).json({ translation });
  } catch (error) {
    console.error("서버 에러:", error);
    res.status(500).json({ error: "서버 내부 오류" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
