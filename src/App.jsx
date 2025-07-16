import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
    alert(`Logged in With ${email}`);
    alert(`Welcome ${name}`);
  }
  return (
    <div className="form-container">
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter A Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Enter a Email..."
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Enter a Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default App;
