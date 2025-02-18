import React, { useEffect, useState } from "react";
import { openAiApi } from "../api/openAiApi";

export default function DetailReviewKr() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    setTranslatedText("");
    try {
      const translation = await openAiApi(inputText);
      // if (!translation.ok) {
      //   throw new Error(`서버 오류: ${translation.status}`);
      // }

      // // 응답이 비어있으면 JSON 파싱하지 않고 처리
      // const text = await translation.text();
      // if (!text) {
      //   throw new Error("서버에서 빈 응답을 받았습니다.");
      // }

      // const data = JSON.parse(text); // JSON 파싱
      // if (!data.translation) {
      //   throw new Error("서버 응답에 translation 값이 없습니다.");
      // }
      console.log(translation);
      setTranslatedText(translation);
    } catch (error) {
      setTranslatedText("번역 중 오류가 발생했습니다.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="번역할 문장을 입력하세요"
      />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? "번역 중..." : "번역하기"}
      </button>
      {translatedText && <p>결과: {translatedText}</p>}
    </div>
  );
}
