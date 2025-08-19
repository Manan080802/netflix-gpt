import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../app/features/users/userSlice";

const Header = () => {
  const userinfo = useSelector((select) => select.user.userinfo);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        disPatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        disPatch(removeUser());
        navigate("/");
      }
    });
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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-24 sm:w-32 md:w-40 lg:w-44 object-contain cursor-pointer"
        />
        {userinfo && (
          <div>
            <span className="mx-3">{userinfo.displayName}</span>
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
