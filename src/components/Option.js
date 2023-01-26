import React from "react";

export default function Option({ text, handleClick, bio }) {
  return (
    <div
      onClick={() => {
        handleClick(text);
      }}
      className="option"
    >
      <h2>{text}</h2>
      <p>{bio}</p>
    </div>
  );
}
