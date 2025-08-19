import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default appStore;
