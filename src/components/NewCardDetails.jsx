import React from "react";
import { RiArrowRightDownBoxFill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const NewCardDetails = ({ details }) => {
  //   console.log(details);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    Swal.fire({
      title: name,
      text: email,
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div>
      <title>Run.Card Details</title>
      <div className="card bg-orange-50 shadow-sm mt-3 p-5">
        <div>
          <figure>
            <img className="mb-10" src={details.thumbnail} alt="Shoes" />
          </figure>

          <div className="card-body">
            <div className="flex">
              <h2 className="card-title text-2xl text-gray-900">
                {details.name}
              </h2>

              {/* <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
               
                <FiAlignCenter />
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                     
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog> */}

              <details className="dropdown">
                <summary className="btn btn-ghost"><RiArrowRightDownBoxFill size={20} /></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1  p-2 shadow-sm">
                 
                    <button
                className="btn font-bold text-gray-900"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
               History
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg"><img className="w-20" src={details.logo} alt="" />{details.name}</h3>
                  <p className="py-4">
                    {details.history}
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                     
                      <button className="btn bg-orange-500 font-bold text-gray-900">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
                  
                </ul>
              </details>
            </div>
            <p className="text-xl text-gray-900">{details.description}</p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">Category : </span>
              {details.category}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-bold text-gray-900">
                Marathon Category :{" "}
              </span>{" "}
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
              Registration For Marathon
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset space-y-3">
                <label className="label font-bold text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your name"
                  required
                />
                <label className="label font-bold text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your Email"
                  required
                />
                <input
                  className="btn bg-orange-500 font-bold text-lg"
                  type="submit"
                  value="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardDetails;
