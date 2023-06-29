import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../utility/internalMemory";

const authSlice = () => {
  const token = internalMemory.get("token");
  const user = internalMemory.get("user");

  return createSlice({
    name: "auth",
    initialState: {
      token: token || null,
      user: user || null,
    },
    reducers: {
      login: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        internalMemory.save("token", token);
        internalMemory.save("user", user);
      },
      logout: (state) => {
        state.token = null;
        state.user = null;
        internalMemory.remove("token");
        internalMemory.remove("user");
      },
    },
  });
};

export const { login, logout } = authSlice().actions;

export default authSlice().reducer;
