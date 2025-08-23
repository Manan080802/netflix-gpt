import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../app/features/users/userSlice";
import { LOGO_URL } from "../../constants/config";
import { handleGptSearch } from "../../app/features/gpt/gptSlice";

const Header = () => {
  const userinfo = useSelector((select) => select.user.userinfo);
  const isGptSearch = useSelector((select) => select.gpt.isGptSearch);
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
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="w-24 sm:w-28 md:w-36 lg:w-40 object-contain cursor-pointer"
        />

        {/* Right Section */}
        {userinfo && (
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
            {/* User Name */}
            <span className="hidden sm:inline text-white text-sm md:text-base font-medium">
              {userinfo.displayName}
            </span>

            {/* GPT Search Button */}
            <button
              className="bg-purple-600 text-white text-xs sm:text-sm md:text-base rounded-md px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 font-semibold hover:bg-purple-700 transition"
              onClick={() => {
                disPatch(handleGptSearch());
                console.log("isGptSearch", isGptSearch);
              }}
            >
              {isGptSearch ? "Home page" : "Gpt search"}
            </button>

            {/* Sign Out Button */}
            <button
              className="bg-red-600 text-white text-xs sm:text-sm md:text-base rounded-md px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 font-semibold hover:bg-red-700 transition"
              onClick={() => signOutData()}
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
