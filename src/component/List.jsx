import React, { useState, memo } from "react";

function List({ item, handleDelete, completed }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`${
        completed ? "hidden" : "flex"
      } justify-between px-2 bg-gray-200 items-center rounded-r text-left`}
    >
      <div className="flex gap-6">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div>
          <p className={`${isChecked ? "bg-red-500" : ""} -mb-2`}>
            {item.name}
          </p>
          <small className="text-[10px]">{item ? item.time : ""}</small>
        </div>
      </div>

      <button
        onClick={() => handleDelete(item.id)}
        className={`bg-red-600 hover:bg-rose-500 p-2 my-1 w-14 rounded}`}
      >
        x
      </button>
    </div>
  );
}

export default List;
