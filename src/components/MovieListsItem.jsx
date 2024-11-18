import React from "react";

export default function MovieListsItem({ listType, title, content }) {
  return (
    <section>
      <h3>{listType}</h3>
      <ul>
        <li>
          <h4>{title}</h4>
          <p>{content}</p>
        </li>
      </ul>
    </section>
  );
}
