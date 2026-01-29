import React, { useState } from "react";

const CRUDPage = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (!text) return;
    setItems([...items, { id: Date.now(), text }]);
    setText("");
  };

  const deleteItem = (id) => setItems(items.filter((i) => i.id !== id));

  const updateItem = (id) => {
    const newText = prompt("Update item");
    if (newText) {
      setItems(items.map((i) => (i.id === id ? { ...i, text: newText } : i)));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">CRUD Page</h1>
      <div className="flex mb-4">
        <input
          className="border p-2 flex-1 rounded mr-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addItem} className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul>
        {items.map((i) => (
          <li key={i.id} className="flex justify-between border p-2 mb-2 rounded">
            {i.text}
            <div>
              <button
                onClick={() => updateItem(i.id)}
                className="bg-yellow-500 text-white px-2 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(i.id)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDPage;
