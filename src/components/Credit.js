import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import customFetch from "../util/axios";

const Credit = ({ showCredit }) => {
  const { user } = useSelector((store) => store.user);
  const [credit, setCredit] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await customFetch.get(`credit/${user.userId}`);
    setLoading(false);
    setCredit(res.data.balance);
    // return;
    // setCredit(0);
    // setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="model">
      <form className="form">
        <FiX className="close-icon" onClick={() => showCredit()} />
        <h2>Available Credit</h2>
        <div className="form-row">
          <label htmlFor="credit" className="form-label amount">
            credit amount
          </label>
        </div>
        <div className="form-row">
          {loading ? (
            "Loading..."
          ) : (
            <label htmlFor="credit" className="form-label amount">
              {credit === 0 ? "No Credit Available" : `$ ${credit}`}
            </label>
          )}
        </div>
      </form>
    </section>
  );
};

export default Credit;
