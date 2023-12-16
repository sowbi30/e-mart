import React, { useState } from "react";
import "../styles/modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import {useCartContext} from '../context/cart_context';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 40) {
    errors.name = 'Must be 40 characters or less';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length > 40) {
    errors.address = 'Must be 40 characters or less';
  }

  if (!values.pincode) {
    errors.pincode = 'Required';
  } else if (String(values.pincode).split("").length > 6) {
    errors.pincode = 'Must be 6 numbers';
  }

  return errors;
};



const Checkout = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order confirmation and redirect to home page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      pincode: '',
    },
    validate,
  })

  const { clearCart } = useCartContext();

  const handleProceedToCheckout = () => {
    // Check if the form is valid before showing the modal
    if (formik.isValid) {
      handleShow();
    }
  };

     const handleOrderConfirm = () => {
      const isConfirmed = window.confirm("Your order placed successfully! Do you want to clear the cart?");
      if (isConfirmed) {
        clearCart();
        navigate(from, { replace: true });
      }
    };
  
  return (


    <div className="modalCard">
      <Form style={{ width: "480px", marginTop:'50px',border:'2px solid green',height: "250px", backgroundColor: "lightgreen", textAlign: "center" }} onSubmit={formik.handleSubmit}>
  <h1 className='mb-4 text-success' style={{ color: 'brown', textDecoration: 'underline', fontSize:'20px' }}>Courier Address</h1>
  <Form.Group className='mb-3 d-flex justify-content-center align-items-center'>
    <Form.Label style={{ paddingBottom: '2rem', width: '15rem',fontSize:'15px' }}>Name:</Form.Label>
    <Form.Control
      style={{ width: '15rem',padding:'5px' }}
      type="text"
      id="name"
      name="name"
      placeholder="Enter name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name ? (
      <div style={{ color: 'red', width: '15rem', textAlign: 'left' }}>{formik.errors.name}</div>
    ) : null}
  </Form.Group>
  <Form.Group className='mb-3 d-flex justify-content-center align-items-center'>
    <Form.Label style={{ paddingBottom: '2rem', width: '15rem' ,fontSize:'15px' }}>Address:</Form.Label>
    <Form.Control
      style={{ width: '15rem' }}
      type="text"
      id="address"
      name="address"
      placeholder="Enter address"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.address}
    />
    {formik.touched.address && formik.errors.address ? (
      <div style={{ color: 'red', width: '15rem', textAlign: 'left' }}>{formik.errors.address}</div>
    ) : null}
  </Form.Group>
  <Form.Group className='mb-3 d-flex justify-content-center align-items-center'>
    <Form.Label style={{ paddingBottom: '2rem', width: '15rem',fontSize:'15px'  }}>Pincode:</Form.Label>
    <Form.Control
      style={{ width: '15rem' }}
      required
      type="text"
      id="pincode"
      name="pincode"
      placeholder="Enter pincode"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.pincode}
    />
    {formik.touched.pincode && formik.errors.pincode ? (
      <div style={{ color: 'red', width: '15rem', textAlign: 'left' }}>{formik.errors.pincode}</div>
    ) : null}
  </Form.Group>
  <Button
   variant="primary" 
   style={{background:'purple',color:'white'}}
  onClick={handleProceedToCheckout} 
  className="py-2">
    Proceed to Checkout
  </Button>
</Form>


      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
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
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" />
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
                      <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card</h5>
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
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                            Add card
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    {/* Paypal tab content */}
                    <div className="mx-4 mt-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
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
                        <div className="pay px-5">
                          <button className="btn btn-primary btn-block" onClick={handleOrderConfirm}>
                            Add paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment desclaimer */}
              <p className="mt-3 px-4 p-Disclaimer">
              <em>Payment Disclaimer:</em> In no event shall payment or partial payment by Owner for any material or service
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;