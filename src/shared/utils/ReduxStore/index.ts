import { configureStore } from "@reduxjs/toolkit";
import reducer from "../ReduxReducer";

const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});

export default store;
