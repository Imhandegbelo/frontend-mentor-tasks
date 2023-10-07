import React, { useEffect, useState } from "react";
import List from "../component/List";

const timestamp = new Date().toUTCString().slice(5, 25);
const items = [
  {
    id: Math.random() * 100,
    name: "Todo item 1",
    completed: false,
    time: timestamp,
  },
  {
    id: Math.random() * 100,
    name: "Todo item 2",
    completed: false,
    time: timestamp,
  },
  {
    id: Math.random() * 100,
    name: "Todo item 3",
    completed: false,
    time: timestamp,
  },
];

export default function Todo() {
  const [todoItems, setTodoItems] = useState(items);
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  function addTodo(text) {
    if (text === "") return;
    setTodoItems([
      ...todoItems,
      {
        id: Math.random() * 100,
        name: text,
        completed: false,
        time: new Date().toUTCString().slice(5, 25),
      },
    ]);
    setText("");
  }

  function handleDelete(id) {
    const remove = todoItems.filter((item) => item.id !== id);
    setTodoItems(remove);
  }

  useEffect(() => {
    setTodoItems(items);
  }, []);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-2/5 border rounded p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex gap-2 mb-2"
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 p-1 rounded"
          />

          <button
            type="submit"
            onClick={() => addTodo(text)}
            className="font-black border p-1 w-14 rounded bg-gray-300 hover:bg-gray-400"
          >
            {"->"}
          </button>
        </form>
        <div className="flex flex-col gap-2">
          {todoItems?.map((item) => (
            <List
              item={item}
              key={item.id}
              id={item.id}
              handleDelete={handleDelete}
              completed={completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
