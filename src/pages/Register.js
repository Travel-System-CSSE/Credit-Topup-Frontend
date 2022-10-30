import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow } from "../components";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  idNumber: "",
  password: "",
  role: "local",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, idNumber, password, isMember, role } = values;
    if (!password || !idNumber || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ idNumber: idNumber, password: password }));
      return;
    }

    dispatch(registerUser({ name, idNumber, password, role }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <main className="main">
      <form className="form" onSubmit={onSubmit}>
        <h2>Travel Application</h2>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            placeHolder="Name"
          />
        )}
        <FormRow
          type="text"
          name="idNumber"
          value={values.idNumber}
          handleChange={handleChange}
          placeHolder="Your Id Number"
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          placeHolder="Password"
        />

        {!values.isMember && (
          <div className="form-row">
            <label htmlFor="role" className="form-label">
              User Type
            </label>
            <select
              name="role"
              value={values.role}
              onChange={handleChange}
              className="form-input"
            >
              <option value="local">Local</option>
              <option value="foreign">Foreign</option>
            </select>
          </div>
        )}

        <button className="btn btn-full" disabled={isLoading}>
          {isLoading ? "Loading...." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </main>
  );
};

export default Register;
