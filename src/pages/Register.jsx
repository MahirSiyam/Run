import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {

    const navigate = useNavigate();

    const {createUser , setUser , updateUser , googleLogIn} = use(AuthContext);

    const [showPassword , setShowPassword] = useState(false);

    // google log in
    const provider = new GoogleAuthProvider;
    const handleGoogleLogIn = (e) => {
      e.preventDefault();
      
      googleLogIn(provider)
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      })

    }

    // email password sign in
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log({name, email, photoURL, password});

        createUser(email , password)
        .then(result => {
            const user = result.user;

            updateUser({displayName: name , photoURL: photoURL})
            .then(() => {

                setUser({...user , displayName: name , photoURL: photoURL});
                navigate("/");

            })
            .catch(error => {
                setUser(error);
                  });
            })
        .catch(() => {
            Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Something went wrong!",
                      footer: '<a href="#">Why do I have this issue?</a>'
                    });
        });

    }

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-2">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">

            {/* name */}
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Enter your name" required/>

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Enter your email" required/>

            {/* photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" name="photoURL" className="input" placeholder="Enter your photo URL" required/>

            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <button onClick={handleGoogleLogIn} type="submit" className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-center font-bold pt-5">
              Don't have an account? Click{" "}
              <Link to={`/auth/login`} className="text-orange-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
