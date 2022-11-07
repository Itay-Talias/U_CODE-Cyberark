import { React, Component } from "react";
import Letter from "./Letter";
class Solution extends Component {
    render() {
        return (
            <div id="solution">
                {this.props.solution
                    .split("")
                    .map((letter, index) =>
                        this.props.letterStatus[letter] ? (
                            <Letter letter={letter} key={index} />
                        ) : (
                            <Letter letter="_" key={index} />
                        )
                    )}
                <div>{this.props.hint}</div>
            </div>
        );
    }
}

export default Solution;
