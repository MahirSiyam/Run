import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import logInLogo from "../assets/undraw_login_weas.svg"

const Login = () => {
  const {logIn, googleLogIn, forgetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  // Forget password
  const handleForgetPassword = () => {
    if (!email) {
      Swal.fire("Please enter your email address.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        Swal.fire(
          "Check your email",
          "We've sent a password reset link.",
          "success"
        );
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  // Google log in
  const provider = new GoogleAuthProvider();

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    googleLogIn(provider)
      .then(() => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  // Email-password login
  const handleLogIn = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="flex mb-5 flex-col md:flex-row justify-center items-center mt-10 md:mt-20 px-4">
  {/* Image for medium and larger screens */}
  <img
    className="w-full md:w-[400px] mb-6 md:mb-0 md:mr-10"
    src={logInLogo}
    alt="Login Illustration"
  />

  {/* Login Card */}
  <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
    <h2 className="font-semibold text-2xl text-center py-2">
      Login Your Account
    </h2>
    <div className="card-body">
      <form onSubmit={handleLogIn} className="fieldset">
        {/* email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* password */}
        <label className="label">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input input-bordered w-full pr-10"
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* forgot password */}
        <div onClick={handleForgetPassword}>
          <a
            className={`link link-hover p-0 mt-2 bg-transparent border-0 text-left text-sm ${
              !email ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogIn}
          type="button"
          className="btn bg-white text-black border-[#e5e5e5] w-full mt-2"
        >
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

        {/* Register Link */}
        <p className="text-center font-bold pt-5">
          Don't have an account? Click{" "}
          <Link to={`/auth/register`} className="text-orange-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
