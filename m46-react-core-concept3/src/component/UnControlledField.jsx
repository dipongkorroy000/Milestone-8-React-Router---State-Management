import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);

    const password = passRef.current.value;
    console.log(password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input ref={passRef} type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
