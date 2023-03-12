import store from "../utils/ReduxStore";

export type RootState = ReturnType<typeof store.getState>;
