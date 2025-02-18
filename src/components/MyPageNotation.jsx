import React, { useState } from "react";
import NoteCreateForm from "./NoteCreateForm";

export default function MyPageNotation() {
  const [isCreating, setIsCreating] = useState(false);

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

      <div>
        <ul>
          <li>
            <h3>title</h3>
            <p>2025.02.18</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
