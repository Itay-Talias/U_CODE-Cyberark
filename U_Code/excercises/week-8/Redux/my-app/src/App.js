import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { RandomCounter } from "./features/RandomCounter/RandomCounter";
import { DoubleIncrementButton } from "./features/DoubleIncrementButton/DoubleIncrementButton";
import "./App.css";
import { useSelector } from "react-redux";
import { selectMaxCount } from "../src/features/counter/counterSlice";

function App() {
    const count = useSelector(selectMaxCount);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>MAX: {count}</div>
                <Counter />
                <RandomCounter />
                <DoubleIncrementButton />
            </header>
        </div>
    );
}

export default App;
