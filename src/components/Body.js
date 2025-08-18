import {
  //   BrowserRouter,
  createBrowserRouter,
  Outlet,
  //   Route,
  RouterProvider,
  //   Routes,
} from "react-router-dom";
// import Login from "./auth/Login";
import Browse from "./Browse";
import Login from "./auth/Login";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../app/features/users/userSlice";

// import Header from "./navigation/Header";

/**
 * | Feature                   | `BrowserRouter`              | `createBrowserRouter`               |
| ------------------------- | ---------------------------- | ----------------------------------- |
| Syntax                    | JSX `<Routes>` and `<Route>` | Config object with `RouterProvider` |
| Data API (loader, action) | ❌ Not supported              | ✅ Supported                         |
| Error handling            | Limited (fallback UI)        | Built-in with `errorElement`        |
| Best for                  | Small/medium apps            | Large apps with data fetching       |

 * 
 */

const Body = () => {
  const disPatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <h1>some Error</h1>,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <h1>some Error</h1>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        disPatch(addUser({ uid, email, displayName }));
      } else {
        disPatch(removeUser());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </div>
  );
};

// const Body = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<Login></Login>}
//           errorElement={<h1>somEError</h1>}
//         ></Route>
//         <Route
//           path="/browse"
//           element={<Browse></Browse>}
//           errorElement={<h1>somEError</h1>}
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
export default Body;
