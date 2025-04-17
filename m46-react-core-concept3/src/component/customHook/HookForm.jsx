import React from "react";
import useInputField from "./useInputFields";

const HookForm = () => {
  const [name, setName] = useInputField("");
  const [email, setEmail] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    console.log(name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={setName}
          defaultValue={name}
          type="text"
          placeholder="enter your name"
        />
        <br />
        <input
          onChange={setEmail}
          defaultValue={email}
          type="email"
          placeholder="enter your email"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
