import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
    value: 0,
    value2: 0,
    status: "idle",
};

export const incrementAsync = createAsyncThunk(
    "counter/fetchCount",
    async (amount) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            if (state.value % 10 == 0) {
                state.value += 1;
            }
        },
        decrement: (state) => {
            state.value -= 1;
        },
        decrement2: (state) => {
            state.value -= 2;
        },
        increment2: (state) => {
            state.value += 2;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        incrementRandom: (state) => {
            state.value2 += Math.random(0, 1);
        },
        incrementOne: (state) => {
            state.value2 += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            });
    },
});

export const selectCount = (state) => state.counter.value;
export const selectRandomCount = (state) => state.counter.value2;
export const selectMaxCount = (state) =>
    Math.max(state.counter.value, state.counter.value2);

export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
};

export const {
    incrementRandom,
    incrementOne,
    increment,
    decrement,
    incrementByAmount,
    decrement2,
    increment2,
} = counterSlice.actions;

export default counterSlice.reducer;
