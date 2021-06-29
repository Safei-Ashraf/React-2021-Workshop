import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNum = Number(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum <= 0 ||
      enteredAmountNum > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        type="text"
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!isValid && <p>Invalid Input Added! should be 1:5</p>}
      <button className={classes.button}>+Add</button>
    </form>
  );
};

export default MealItemForm;
