import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const {logIn , googleLogIn} = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    // const {logIn} = use(AuthContext);


    //  google log in
   const provider = new GoogleAuthProvider;

   const handleGoogleLogIn = (e) => {
    e.preventDefault();
     
     googleLogIn(provider)
     .then(() => {
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
        draggable: true
      });
      navigate(`${location.state ? location.state : "/"}`);
       navigate("/");
     })
     .catch(() => {
       Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
     })

   }

    const handleLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({email , password});

        logIn(email , password)
        .then(() => {
            Swal.fire({
                title: "Login Successfully!",
                icon: "success",
                draggable: true
              });
              navigate(`${location.state ? location.state : "/"}`);
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="font-semibold text-2xl text-center py-2">Login Your Account</h2>
        <div className="card-body">
          <form onSubmit={handleLogIn} className="fieldset">

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
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
            <p className="text-center font-bold pt-5">Don't have an account? Click <Link to={`/auth/register`} className="text-orange-500">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
