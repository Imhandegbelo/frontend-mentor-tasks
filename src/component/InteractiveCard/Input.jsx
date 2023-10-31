import React, { useState } from "react";

export default function Input({ label, placeholder, name, value, onchange }) {
  const [error, setError] = useState("");

  return (
    <div>
      <label htmlFor={name} className="font-medium uppercase">
        {label}
      </label>
      <input
        required
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className="w-full text-lg py-2 px-4 border border-gray-300 rounded-lg hover:border-violet-800 placeholder:text-lg focus:border-green-900"
      />
      <small>{error}</small>
    </div>
  );
}
