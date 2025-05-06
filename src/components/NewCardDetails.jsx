import React from "react";
import { Link } from "react-router";

import { ToastContainer, toast } from 'react-toastify';


const NewCardDetails = ({ details }) => {
  //   console.log(details);

  
const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    toast("Submit Successfully" , name,email);

}

  return (
    <div>
      <div className="card bg-orange-50 shadow-sm mt-3 p-5">
        <div>
          <figure>
            <img className="mb-10" src={details.thumbnail} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl text-gray-900">{details.name}</h2>
            <p className="text-xl text-gray-900">{details.description}</p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Category : </span>
              {details.category}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Marathon Category : </span>{" "}
              {details.marathon_category}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Date : </span>
              {details.date}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Location : </span>
              {details.location}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Entre Fee : </span>
              {details.entry_fee}$
            </p>
            <div className="card-actions mt-5">
              <Link
                to={`/`}
                className="btn bg-orange-500 font-bold text-gray-900"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-orange-50 border-t-8 border-white min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-10 text-gray-900">
            Registration For Marathon</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset space-y-3">
                <label className="label font-bold text-lg">Name</label>
                <input type="text" name="name" className="input" placeholder="Enter your name" required/>
                <label className="label font-bold text-lg">Email</label>
                <input type="email" name="email" className="input" placeholder="Enter your Email" required/>
                <input className="btn bg-orange-500 font-bold text-lg" type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewCardDetails;
