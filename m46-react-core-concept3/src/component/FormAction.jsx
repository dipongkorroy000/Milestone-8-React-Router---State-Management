import React from "react";

const FormAction = () => {
  const handleForm = (FormData) => {
    console.log(FormData.get("name"));
    console.log(FormData.get("email"));
  };
  return (
    <div>
      <form action={handleForm}>
        <input name="name" type="text" placeholder="Name" />
        <br />
        <input name="email" type="text" placeholder="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
