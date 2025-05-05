import React from "react";
import { Link } from "react-router";

const NewCardDetails = ({ details }) => {
  console.log(details);

  //   "id": 19,
  //   "name": "Athens Marathon",
  //   "thumbnail": "https://images.unsplash.com/photo-1719299246423-8be7d5209bc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
  //   "category": "Historical",
  //   "marathon_category": "42K",
  //   "date": "2025-11-09",
  //   "location": "Athens, Greece",
  //   "entry_fee": 95,
  //   "description": "Run the original marathon route from Marathon to Athens."

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2">
        <figure>
            <img src={details.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{details.name}</h2>
            <p>{details.description}</p>
            <p>{details.category}</p>
            <p>{details.marathon_category}</p>
            <p>{details.date}</p>
            <p>{details.location}</p>
            <p>{details.entry_fee}</p>
            <div className="card-actions justify-end">
            <Link to={`/`} className="btn btn-primary">Back to home</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardDetails;
