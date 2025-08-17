import { useState } from "react";
import Header from "../navigation/Header";

const Login = () => {
  const [isLoginPage, setLoginPage] = useState(true);

  const changeSignup = () => {
    setLoginPage(!isLoginPage);
  };

  const LoginUser = () => {
    console.log("login user");
  };

  const registerUser = () => {
    console.log("register user");
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      {/* Login Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Sign {isLoginPage ? "In" : "Up"}
          </h1>
          {!isLoginPage && (
            <input
              type="name"
              placeholder="Enter your name"
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required={true}
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            required={true}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            required={true}
          />
          {!isLoginPage && (
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required={true}
            />
          )}

          <button
            type="button"
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
            onClick={() => {
              if (isLoginPage) {
                LoginUser();
              } else {
                registerUser();
              }
            }}
          >
            Sign {isLoginPage ? "In" : "Up"}
          </button>

          <p className="text-sm text-gray-400 mt-4">
            {isLoginPage ? "New to Netflix? " : "Already have an account? "}

            <button
              type="button"
              className="text-white hover:underline"
              onClick={() => {
                changeSignup();
              }}
            >
              Sign {isLoginPage ? "Up" : "In"} now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
