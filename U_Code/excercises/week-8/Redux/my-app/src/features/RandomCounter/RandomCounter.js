import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRandomCount, incrementRandom } from "../counter/counterSlice";
import styles from "../counter/Counter.module.css";

export function RandomCounter() {
    const count = useSelector(selectRandomCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementRandom())}
                >
                    Add Amount
                </button>
            </div>
        </div>
    );
}
