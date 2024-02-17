import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebaseconfig.js";
import { signInWithPopup } from "firebase/auth";
import LogoutFunc from "./LogoutFunc.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // initialize state for user
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // handle click function
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("user", JSON.stringify(data.user.email));
    });
  };

  // useeffect to get user from local storage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  });

  return (
    <div>
      {user ? (
        <div>
          <h5
            className="text-white mt-5 text-center mx-auto opacity-70 p-4 uppercase font-bold tracking-wide overline text-white mt-10 text-center w-100 md:w-70 lg:w-3/4
        "
          >
            {/* navigate to /home */}
            Welcome {user}! Click the button below to go to the home page.
            <button
              onClick={() => navigate("/home")}
              type="button"
              className="py-2 px-4 max-w-md flex justify-center items-center bg-sky-50 font-bold hover:bg-black focus:ring-red-500 focus:ring-offset-red-200 text-black w-40 hover:text-white transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg display-flex justify-center items-center mt-10 mx-auto"
            >
              HOME
            </button>
          </h5>
          <LogoutFunc />
        </div>
      ) : (
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-4 max-w-md flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg
          display-flex justify-center items-center mt-10 mx-auto mb-10"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
          </svg>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
