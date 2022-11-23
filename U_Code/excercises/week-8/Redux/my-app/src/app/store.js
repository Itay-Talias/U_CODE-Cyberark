import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import RandomCountSlice from "../features/RandomCounter/RandomCountSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        randomCounter: RandomCountSlice,
    },
});
