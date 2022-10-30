import React from "react";
import { data } from "../data/data";
import SingleItem from "./SingleItem";
const Content = ({ modelShow }) => {
  return (
    <section className="content">
      <main className="content-main">
        {data.map((item) => {
          return <SingleItem key={item.id} modelShow={modelShow} {...item} />;
        })}
      </main>
    </section>
  );
};

export default Content;
