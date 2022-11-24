import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import RandomCountSlice from "../features/RandomCounter/RandomCountSlice";
import MaxCounter from "../features/MaxCounter/MaxCounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        randomCounter: RandomCountSlice,
        maxCounter: MaxCounter,
    },
});
