import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const provider = user.providerData[0];

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
      })
      .catch((error) => {
        setUser(error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-84 gap-6 bg-orange-50 p-6 rounded-lg items-center shadow-md max-w-6xl mx-auto my-6 p-10">

      <div className="flex flex-col items-center text-center">
        <img
          className="w-[100px] h-[100px] rounded-full object-cover"
          src={provider.photoURL}
          alt="User"
        />
        <h2 className="text-2xl font-semibold text-gray-900 mt-3">{provider.displayName}</h2>
        <p className="text-lg text-gray-700">{provider.email}</p>
      </div>

      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <form onSubmit={handleUpdateProfile} className="space-y-4">
          
              <label className="label font-bold text-gray-800 text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
          
              <label className="label font-bold text-gray-800 text-lg">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-full"
                placeholder="Enter your photo URL"
              />

            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold w-full mt-2"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;