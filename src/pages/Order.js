import React, {useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/modal.css';
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");
  
    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
    };
  
    const handleClose = () => setShow(false);
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const handleOrderConfirm = () => {
      alert("Your order placed successfully!");
      localStorage.removeItem("Cart");
      navigate(from, { replace: true });
      handleClose(); 
    };
  
    useEffect(() => {
      if (location.pathname === "/order") {
        setShow(true);
      }
    }, [location.pathname]);
  
    return (
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >

      <Card>
        <Card.Header>
          <h5>Select Your Payment Method</h5>
        </Card.Header>
        <Card.Body>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${
                  activeTab === "visa" ? "active" : ""
                }`}
                id="visa-tab"
                data-toggle="tab"
                href="#visa"
                role="tab"
                aria-controls="visa"
                aria-selected={activeTab === "visa"}
                onClick={() => handleTabChange("visa")}
              >
                Visa
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${
                  activeTab === "paypal" ? "active" : ""
                }`}
                id="paypal-tab"
                data-toggle="tab"
                href="#paypal"
                role="tab"
                aria-controls="paypal"
                aria-selected={activeTab === "paypal"}
                onClick={() => handleTabChange("paypal")}
              >
                PayPal
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {/* Visa content */}
            <div
              className={`tab-pane fade ${
                activeTab === "visa" ? "show active" : ""
              }`}
              id="visa"
              role="tabpanel"
            >
              <div className="mt-4 mx-4">
                <div className="text-center">
                  <h5>Visa Payment Details</h5>
                </div>
                <div className="form mt-3">
                  <div className="inputbox">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />
                    <span>Cardholder Name</span>
                  </div>
                  <div className="inputbox">
                    <input
                      type="text"
                      name="name"
                      min="1"
                      max="999"
                      className="form-control"
                      required="required"
                    />
                    <span>Card Number</span> <i className="fa fa-eye"></i>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        className="form-control"
                        required="required"
                      />
                      <span>Expiration Date</span>
                    </div>
                    <div className="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        className="form-control"
                        required="required"
                      />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="success"
                  className="btn-block"
                  onClick={handleOrderConfirm}
                >
                  Add Card
                </Button>
              </div>
            </div>
            {/* PayPal content */}
            <div
              className={`tab-pane fade ${
                activeTab === "paypal" ? "show active" : ""
              }`}
              id="paypal"
              role="tabpanel"
            >
              <div className="mt-4 mx-4">
                <div className="text-center">
                  <h5>PayPal Payment Details</h5>
                </div>
                <div className="form mt-3">
                  <div className="inputbox">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />
                    <span>Enter your email</span>
                  </div>
                  <div className="inputbox">
                    <input
                      type="text"
                      name="name"
                      min="1"
                      max="999"
                      className="form-control"
                      required="required"
                    />
                    <span>Your Name</span>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        className="form-control"
                        required="required"
                      />
                      <span>Extra Info</span>
                    </div>
                    <div className="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        className="form-control"
                        required="required"
                      />
                      <span></span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="btn-block"
                  onClick={handleOrderConfirm}
                >
                  Add PayPal
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
        {/* Payment disclaimer */}
        <Card.Footer>
          <p className="mt-3 px-4 p-Disclaimer">
            <em>
              Payment Disclaimer: In no event shall payment or partial payment by
              Owner for any material or service
            </em>
          </p>
        </Card.Footer>
      </Card>
    </Modal>
  );
};



export default Order;
