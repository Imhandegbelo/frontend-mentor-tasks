import React, { useState } from "react";

export default function Toggle({isChecked, onChange}) {
//   const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      className="sr-only"
    />
  );
}
