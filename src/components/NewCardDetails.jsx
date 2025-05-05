import React from "react";
import { Link } from "react-router";

const NewCardDetails = ({ details }) => {
//   console.log(details);

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
    <div className="card bg-orange-50 shadow-sm mt-3 p-5">
      <div className="">
        <figure>
            <img src={details.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-2xl">{details.name}</h2>
            <p className="text-xl">{details.description}</p>
            <p className="text-lg"><span className="font-bold">Category : </span>{details.category}</p>
            <p className="text-lg"><span className="font-bold">Marathon Category : </span> {details.marathon_category}</p>
            <p className="text-lg"><span className="font-bold">Date : </span>{details.date}</p>
            <p className="text-lg"><span className="font-bold">Location : </span>{details.location}</p>
            <p className="text-lg"><span className="font-bold">Entre Fee : </span>{details.entry_fee}$</p>
            <div className="card-actions mt-5">
            <Link to={`/`} className="btn bg-orange-500 font-bold text-gray-900">Back to home</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardDetails;
