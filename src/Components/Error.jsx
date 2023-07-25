import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const history = useNavigate();

  const RedirectOthers = () => {
    history("/");
  };

  return (
    <div className="container h-screen">
      <div className="flex flex-col justify-content-center items-center">
        <h4 className="text-2xl mt-5 text-red-700">
          404 Error ! Page Not Found 😭
        </h4>
        <button
          className="rounded-[5px] text-xl mt-5 bg-blue-600 hover:bg-blue-500 text-white"
          onClick={RedirectOthers}
        >
          Redirect Login Page
        </button>
      </div>
    </div>
  );
};
export default Error;
