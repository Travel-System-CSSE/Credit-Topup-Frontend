import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import customFetch from "../util/axios";

const Model = ({ modelShow }) => {
  const { user } = useSelector((store) => store.user);
  const [values, setValue] = useState("");

  const makePayment = async (token) => {
    const data = {
      amount: values,
      userId: user.userId,
    };
    await customFetch.post("/credit/", data);
  };

  const modelClose = () => {
    console.log(process.env.STRIPE_PK_KEY);
    modelShow();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="model">
      <form className="form" onSubmit={onSubmit}>
        <FiX className="close-icon" onClick={() => modelShow()} />
        <h2>Add Credit Online</h2>
        <div className="form-row">
          <label htmlFor="credit" className="form-label">
            credit amount
          </label>
          <input
            type="text"
            name="credit"
            className="form-input"
            placeholder="Credit Amount"
            value={values}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <StripeCheckout
          token={makePayment}
          name="Travel Application"
          stripeKey={process.env.REACT_APP_STRIPE_PK_KEY}
          currency="USD"
          amount={values * 100}
          opened={modelClose}
        />
      </form>
    </section>
  );
};

export default Model;
