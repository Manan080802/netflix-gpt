import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../app/features/users/userSlice";
import { LOGO_URL } from "../../constants/config";

const Header = () => {
  const userinfo = useSelector((select) => select.user.userinfo);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        disPatch(addUser({ uid, email, displayName }));
        // navigate("/browse");
      } else {
        disPatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOutData = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <header className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-3 bg-gradient-to-b from-black z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="w-24 sm:w-32 md:w-40 lg:w-44 object-contain cursor-pointer"
        />
        {userinfo && (
          <div>
            <span className="mx-3 text-white">{userinfo.displayName}</span>
            <button
              className="bg-red-600 text-white text-sm sm:text-base md:text-lg rounded-md px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 font-semibold hover:bg-red-700 transition"
              onClick={() => {
                signOutData();
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
