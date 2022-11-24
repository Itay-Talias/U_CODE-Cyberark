import React from "react";
import { useDispatch } from "react-redux";
import { incrementOne, increment } from "../counter/counterSlice";
import styles from "../counter/Counter.module.css";

export function DoubleIncrementButton() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() => {
                        dispatch(increment());
                        dispatch(incrementOne());
                    }}
                >
                    Double Increment
                </button>
            </div>
        </div>
    );
}
