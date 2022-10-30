import React from "react";
import { useSelector } from "react-redux";

const SingleItem = ({ modelShow, id, title, image }) => {
  const { user } = useSelector((store) => store.user);

  const getData = (id) => {
    modelShow(id);
  };

  return (
    <article className="single-content">
      <img src={image} alt="img" />
      <div className="info">
        <h4 className="item-title">{title}</h4>
        <button
          className={user ? "btn btn-click" : "btn-disable"}
          onClick={() => getData(id)}
          disabled={user ? false : true}
        >
          Click Here
        </button>
      </div>
    </article>
  );
};

export default SingleItem;
