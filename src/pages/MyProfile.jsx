import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user , updateUser , setUser} = use(AuthContext);

  const provider = user.providerData[0];

  const handleUpdateProfile = (e) => {

    const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        updateUser({displayName: name , photoURL: photoURL})
            .then(() => {

                setUser({...user , displayName: name , photoURL: photoURL});
                // navigate("/");

            })
            .catch(error => {
                setUser(error);
                  });

  }

  return (
      <div className="card card-side bg-orange-50 items-center p-2">
        <figure>
          <img className="w-[300px] h-[300px]" src={provider.photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-gray-900">{provider.displayName}</h2>
          <p className="text-xl text-gray-900">{provider.email}</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdateProfile} className="fieldset space-y-3">

            <label className="label font-bold text-lg">Name</label>
            <input type="text" name="name" className="input" placeholder="Enter your name" />

            <label className="label font-bold text-lg">Photo URL</label>
            <input type="text" name="photoURL" className="input" placeholder="Enter your photo URL" />
        
            <button type="submit" className="btn font-bold text-gray-900 mt-4 bg-orange-500">Save Changes</button>
          </form>
        </div>
      </div>
      </div>
  );
};

export default MyProfile;
