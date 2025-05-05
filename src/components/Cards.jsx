import React from "react";
import { Link } from "react-router";

const Cards = ({ data }) => {
  const { id, name, description, thumbnail } = data;

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure>
        <img className="w-[300px] h-[200px]" src={thumbnail} alt="running" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="w-9/12">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/card_details/${id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
