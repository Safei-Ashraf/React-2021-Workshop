import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 14.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <div>
      <ul className={classes[`cart-items`]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>44.4</span>
      </div>
      <div className={classes.action}>
        <button className={classes.button}>Close X</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
