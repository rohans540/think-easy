import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth.slice";
import appSlice from "./app.slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        app: appSlice.reducer
    }
});

export default store;