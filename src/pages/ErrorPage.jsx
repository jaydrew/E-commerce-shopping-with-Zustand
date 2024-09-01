import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404 Not Found!</h1>
        <p className="w-96 mb-5 text-gray-500">
          Oops! The page you requested could not be found.
        </p>
        <Link
          to={"/"}
          className="border-2 border-slate-500 px-4 py-1 rounded hover:bg-stone-100 hover:text-slate-700"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
