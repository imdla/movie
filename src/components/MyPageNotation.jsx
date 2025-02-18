import React, { useState } from "react";

export default function MyPageNotation() {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div>
      <button onClick={() => setIsCreating(true)}>+</button>

      

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
