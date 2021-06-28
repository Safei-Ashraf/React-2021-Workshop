import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Cook Me Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={classes[`main-image`]}
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="meals on a table"
        />
      </div>
    </>
  );
};

export default Header;
