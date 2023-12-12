// Checkout.js

import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState } from "react";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Checkout = () => {
  const { total_price, shipping_fee } = useCartContext();
  const navigate = useNavigate(); // Use useNavigate hook
  const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
        navigate("/order");
    }


  return (
    <Wrapper>
      <div className="container">
        <h2>User-Details</h2>

            <hr />

            {/* Form for shipping information */}
            <form style={{width:'100%'}}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" style={{width:'80%'}} name="name" required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter Your Address" required></textarea>

            <label htmlFor="card">State:</label>
            <input type="text" id="state"  name="state" required />

            <label htmlFor="expiry">Country:</label>
            <input type="text" id="country" name="country" required />

            <label htmlFor="cvv">Pincode:</label>
            <input type="number" id="pincode" name="pincode" required />

           
            </form>

            {/* Order summary */}
            <div className="order-summary">
            <h3>Order Summary</h3>
            <div>
                <p>Subtotal:</p>
                <p>
                <FormatPrice price={total_price} />
                </p>
            </div>
            <div>
                <p>Shipping Fee:</p>
                <p>
                <FormatPrice price={shipping_fee} />
                </p>
            </div>
            <hr />
            <div>
                <p>Total:</p>
                <p>
                <FormatPrice price={shipping_fee + total_price} />
                </p>
            </div>
            <Link to="/order">
            <Button variant="primary" onClick={handleShow} className="py-2">
            Proceed to Checkout
            </Button>
            </Link>
         </div>
        </div>
        </Wrapper>
    );
    };

    const Wrapper = styled.section`
    background:lightyellow;
    padding: 9rem 0;

    .container {
        background:lightgreen;
        border:2px solid green;
        max-width: 650px;
        margin: 0 auto;
        text-align:left;
    }
    .container h2{
       color:Darkgreen;
    }

    form {
        display: grid;
        gap: 1.5rem;
             

        label {
        font-size: 1.2rem;
        color:purple;
        }

        input,
        textarea {
           
        padding:10px;
        background:lavender;
      }
    }

    .order-summary {
        margin-top: 2rem;
        border: 1px solid green;
        padding: 1.5rem;
        border-radius: 5px;
        color:purple;

        h3 {
        font-size: 2rem;
        }

        div {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        }

        hr {
        margin: 1rem 0;
        border: none;
        border-top: 1px solid #ccc;
        }
        Button{
            width: 50%;
            display:flex;
            justify-content:center;
        }
    }
    `;

    export default Checkout;