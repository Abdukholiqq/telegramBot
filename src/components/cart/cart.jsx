import "./cart.css";
import Button from "../button/button";
import { totolPrice } from "../units/total__price";

const Cart = ({ cartItems , onCheckout}) => {
  return (
    <div className="cart__container">
      <p>
        {" "}
        Umumiy narx :{" "}
        {totolPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button
        title={`${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}`}
        disable={cartItems.length === 0 ? true : false}
        type={"checkout"}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
