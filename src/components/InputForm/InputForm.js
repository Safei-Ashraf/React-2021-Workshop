import React, { useState } from "react";
import Card from "../UI/Card/Card";
import DisplayList from "./DisplayList";

const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [usersList, setusersList] = useState([]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setusersList((usersList) => [
      ...usersList,
      { name, age, id: Math.random() },
    ]);
    setName("");
    setAge("");
  };
  return (
    <>
      <Card>
        <form onSubmit={onSubmit}>
          <label
            htmlFor="userName"
            style={{
              display: "block",
              fontWeight: "bolder",
            }}
          >
            User Name:
          </label>
          <input
            type="text"
            minLength="3"
            maxLength="12"
            name="userName"
            id="userName"
            value={name}
            onChange={onNameChange}
          />
          <label
            htmlFor="age"
            style={{
              display: "block",
              fontWeight: "bolder",
            }}
          >
            Age:
          </label>
          <input
            type="number"
            min="1"
            max="99"
            name="age"
            id="age"
            value={age}
            onChange={onAgeChange}
          />
          <input
            type="submit"
            value="Add"
            style={{
              display: "block",
              width: "30%",
              margin: "auto auto",
              backgroundColor: "purple",
              color: "white",
              padding: "10px",
            }}
          />
        </form>
      </Card>
      <DisplayList usersList={usersList} />
    </>
  );
};

export default InputForm;
