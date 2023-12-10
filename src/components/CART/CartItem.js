import FormatPrice from "../../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
import styled from "styled-components";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <Wrapper>
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cart_heading {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: lavender; /* Set the background color here */
    align-items: center;
    margin: 0;
    border: none;
  }

  figure {
    margin: 0;
  }

  .cart-hide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .color-style {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
`;


export default CartItem;