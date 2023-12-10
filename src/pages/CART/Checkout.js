    // Checkout.js

    import React from "react";
    import styled from "styled-components";
    import { useCartContext } from "../../context/cart_context";
    import FormatPrice from "../../Helpers/FormatPrice";
    import { Button } from "../../styles/Button";

    const Checkout = () => {
    const { total_price, shipping_fee } = useCartContext();

    return (
        <Wrapper>
        <div className="container">
            <h2>User-Details</h2>
            
            <hr />

            {/* Form for shipping information */}
            <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required></textarea>

            {/* Add more fields as needed, e.g., city, zip code, etc. */}

            {/* Payment details (simplified for demo) */}
            <label htmlFor="card">Credit Card Number:</label>
            <input type="text" id="card" name="card" required />

            <label htmlFor="expiry">Expiry Date:</label>
            <input type="text" id="expiry" name="expiry" required />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />

           
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
            <Button type="submit">Place Order</Button>
            </div>
        </div>
        </Wrapper>
    );
    };

    const Wrapper = styled.section`
    padding: 9rem 0;

    .container {
        max-width: 800px;
        margin: 0 auto;
    }

    form {
        display: grid;
        gap: 1.5rem;

        label {
        font-size: 1.2rem;
        }

        input,
        textarea {
        width: 100%;
        padding: 0.5rem;
        }
    }

    .order-summary {
        margin-top: 2rem;
        border: 1px solid #ccc;
        padding: 1.5rem;
        border-radius: 5px;

        h3 {
        font-size: 1.5rem;
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
    }
    `;

    export default Checkout;
