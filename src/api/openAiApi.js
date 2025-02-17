export const openAiApi = async (text) => {
  const response = await fetch("http://localhost:3001/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  console.log(response);
  const data = await response.json();
  return data.translation;
};
