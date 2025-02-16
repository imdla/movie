import openai

const gptApi = openai.ChatCompletion.create(
  (model = "gpt-4"),
  (messages = [
    { role: "system", content: "너는 친절한 도우미야." },
    { role: "user", content: "안녕! GPT에 대해 알려줘." },
  ]),
  (temperature = 0.7),
  (max_tokens = 150)
);

export default gptApi;
