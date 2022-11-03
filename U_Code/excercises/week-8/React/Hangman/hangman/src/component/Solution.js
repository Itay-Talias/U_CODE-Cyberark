import { React, Component } from "react";
class Solution extends Component {
    constructor() {
        super();
        this.secretWord = ["_", "_", "_", "_"];
    }
    render() {
        return (
            <div id="solution">
                {this.secretWord.map((letter, index) => (
                    <span key={index} className="letter">
                        {" "}
                        {letter}{" "}
                    </span>
                ))}
            </div>
        );
    }
}

export default Solution;
