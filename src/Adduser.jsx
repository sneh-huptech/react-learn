import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username }),
    }).then((res) => res.json());

    setUsers([...users, user]);
    setName("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};

export default AddUser;