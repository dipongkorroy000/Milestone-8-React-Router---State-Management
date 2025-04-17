import React from "react";

const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name:", event.target.name.value);
    console.log("email:", event.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input name="name" placeholder="Your Name" type="text" /> <br />
        <input type="email" name="email" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
