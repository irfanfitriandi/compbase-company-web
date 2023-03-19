import { createSlice } from "@reduxjs/toolkit";
import { ClientsTypes } from "shared/types/clients";

interface StateType {
  bookmarks: ClientsTypes[];
}

const initialState: StateType = {
  bookmarks: [],
};

const sliceState = createSlice({
  name: "state",
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setBookmarks } = sliceState.actions;
export default reducer;
