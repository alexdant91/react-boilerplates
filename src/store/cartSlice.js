import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../utility/internalMemory";

const cartSlice = () => {
  const id = internalMemory.get("id") || null;
  const qnt = internalMemory.get("qnt") || null;

  return createSlice({
    name: "cart",
    initialState: {
      id: id,
      qnt: qnt,
    },
    reducers: {
      add: (state, action) => {
        state.id = action.payload.id;
        state.qnt = action.payload.qnt;
        internalMemory.save("id", action.payload.id);
        internalMemory.save("qnt", action.payload.qnt);
      },
      getId: () => internalMemory.get("id"),
      getQnt: () => internalMemory.get("qnt"),
    },
  });
};

export const { add } = cartSlice().actions;

export default cartSlice().reducer;
