import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/not-found.jpg";

const index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      <img alt="Hotel G Syariah Page not found" src={NotFoundImg} width={320} />
      <div className="text-center">
        <h1 className="font-semibold text-5xl text-[#FF1F57]">404 Not Found</h1>
        <p className="font-medium text-2xl mb-8">
          The page you were looking doesn't exist
        </p>
        <Link to="/" className="hover:underline hover:text-[#CC1946]">
          Please go to this link
        </Link>
      </div>
    </div>
  );
};

export default index;
