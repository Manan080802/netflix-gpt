import { useRef, useState } from "react";
import Header from "../navigation/Header";

import { checkValidate } from "../../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/features/users/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoginPage, setLoginPage] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const changeSignup = () => {
    setLoginPage(!isLoginPage);
  };

  const disPatch = useDispatch();
  const handleButtonClick = () => {
    const message = checkValidate(
      isLoginPage,
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setError(message);

    if (message) return;
    if (isLoginPage) {
      // login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      // registar
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name?.current?.value || "",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              disPatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
          // ..
        });
    }
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
        <form
          className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Sign {isLoginPage ? "In" : "Up"}
          </h1>
          {!isLoginPage && (
            <input
              type="text"
              ref={name}
              placeholder="Enter your name"
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required={true}
            />
          )}

          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required={true}
          />

          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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
          <p className="text-red-600 font-bold text-lg py-3">{error}</p>
          {/* {error != null && <p className="text-red-600">{error}</p>} */}

          <button
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Sign {isLoginPage ? "In" : "Up"}
          </button>

          <p className="text-sm text-gray-400 mt-4">
            {isLoginPage ? "New to Netflix? " : "Already have an account? "}

            <button
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
