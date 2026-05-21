import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form.jsx";
import AddUser from "./AddUser.jsx";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/form">Form</Link> | {" "}
        <Link to="/adduser">Add User</Link>
      </nav>

     <Routes>
  <Route path="/" element={<h1>Home</h1>} />
  <Route path="/form" element={<Form />} />
  <Route path="/adduser" element={<AddUser />} />
</Routes>
    </div>

   
  );
}

export default App;