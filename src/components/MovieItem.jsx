import React from "react";

export default function MovieItem({ title, content }) {
  return (
    <>
      <h4>{title}</h4>
      <p>{content}</p>
    </>
  );
}
