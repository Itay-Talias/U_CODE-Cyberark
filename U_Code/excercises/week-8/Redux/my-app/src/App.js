import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { RandomCounter } from "./features/RandomCounter/RandomCounter";
import { DoubleIncrementButton } from "./features/DoubleIncrementButton/DoubleIncrementButton";
import { useSelector } from "react-redux";
import { selectCount } from "../src/features/counter/counterSlice";
import { selectRandomCount } from "../src/features/RandomCounter/RandomCountSlice";

function App() {
    const count1 = useSelector(selectCount);
    const count2 = useSelector(selectRandomCount);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>MAX: {Math.max(count1, count2)}</div>
                <Counter />
                <RandomCounter />
                <DoubleIncrementButton />
            </header>
        </div>
    );
}

export default App;
