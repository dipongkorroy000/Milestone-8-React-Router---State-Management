import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleNameOnChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassOnChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          defaultValue={name}
          onChange={handleNameOnChange}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          defaultValue={email}
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          defaultValue={password}
          onChange={handlePassOnChange}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
