import React from "react";
import { useSelector } from "react-redux";
import { data } from "../data/data";
import SingleItem from "./SingleItem";
const Content = ({ modelShow }) => {
  const { user } = useSelector((store) => store.user);
  return (
    <section className="content">
      <div className="content-links">
        <ul className="content-link-list">
          <li>Home</li>
          <li>Card</li>
          <li>{user === null ? "Local" : user.role} Passenger</li>
        </ul>
      </div>
      <main className="content-main">
        {data.map((item) => {
          return <SingleItem key={item.id} modelShow={modelShow} {...item} />;
        })}
      </main>
    </section>
  );
};

export default Content;
