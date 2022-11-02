import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import customFetch from "../util/axios";
import { toast } from "react-toastify";

const Model = ({ modelShow }) => {
  const { user } = useSelector((store) => store.user);
  const [values, setValue] = useState("");

  const makePayment = async (token) => {
    const data = {
      amount: values,
      userId: user.idNumber,
    };
    await customFetch.post("/credit/", data);
    toast.success(`$ ${values} credit add to your account`);
  };

  const modelClose = () => {
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
          image="https://img.icons8.com/cotton/64/000000/school-bus--v2.png"
          name="Enter Card Details"
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
