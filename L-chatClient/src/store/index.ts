import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ChatState } from "./chat";

export type ReduxStoreState = {
  chat: ChatState;
};

export default configureStore({
  reducer: {},
});
