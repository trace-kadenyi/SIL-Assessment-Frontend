import React from "react";

const Home = () => {
  return (
    <div className="font-bold underline justify-center flex text-4xl mt-2 text-center tracking-wide">
      <button
        type="button"
        className="bg-white font-bold text-black py-2 px-4 max-w-md flex justify-center items-center bg-transparent hover:bg-black hover:text-white focus:ring-sky-500 focus:ring-offset-sky-200 w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <a href="/users" className=" uppercase p-3 tracking-wide">
          View Users
        </a>
      </button>
    </div>
  );
};

export default Home;
