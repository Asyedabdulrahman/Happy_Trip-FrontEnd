import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>Happy trip</h1>
    </div>
  );
}
function Form() {
  const [description, setdescription] = useState("");
  const [quantity, setQuantity] = useState("1");
  /////////////////////////
  function handleSubmit(e) {
    e.preventDefault();

    //   /////////////////////////
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    //   /////////////////////////
    setdescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for ❤️ trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function Packinglist() {
  return (
    <div className="list">
      <li>
        {initialItems.map((item) => (
          <Item prop={item} key={item.id} />
        ))}
      </li>
    </div>
  );
}

function Item({ prop }) {
  return (
    <li>
      <span style={prop.packed ? { textDecoration: "line-through" } : {}}>
        {prop.description} {prop.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have x items on your list, and you already packed x</em>
    </footer>
  );
}
