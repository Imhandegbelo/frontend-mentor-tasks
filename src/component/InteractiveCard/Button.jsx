import React from "react";

export default function Button({ onclick, text }) {
  return (
    <button
      onClick={onclick}
      className="w-full bg-violet-950 text-white rounded-lg border font-medium border-violet-950 py-4 hover:bg-violet-900"
    >
      {text}
    </button>
  );
}
