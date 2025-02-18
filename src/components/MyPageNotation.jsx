import React, { useEffect, useState } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteItems from "./NoteItems";
import { useNavigate } from "react-router-dom";

export default function MyPageNotation() {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const fetcNotes = async () => {
    try {
      const response = await memoApi.getMemos();
      setNotes(response);
    } catch (error) {
      console.error("메모 목록 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetcNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await memoApi.createMemo({ title, content });
      navigate(`/memo/${response.id}`);
    } catch (error) {
      console.error("메모 생성 실패:", error);
    }
  };

  return (
    <div>
      <button onClick={() => setIsCreating(true)}>+</button>

      {isCreating && (
        <NoteCreateForm
          title={title}
          content={content}
          onTitleChange={setTitle}
          onContentChange={setContent}
          onSubmit={handleSubmit}
          onCancel={() => setIsCreating(false)}
        />
      )}

      <NoteItems notes={notes} onNoteClick={(id) => navigate(`/note/${id}`)} />
    </div>
  );
}
