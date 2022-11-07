import { React, Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
    render() {
        return (
            <div id="letters">
                <div>Available Letters</div>
                {Object.keys(this.props.letterStatus).map((letter, index) => (
                    <Letter
                        selected={this.props.letterStatus[letter]}
                        letter={letter}
                        key={index}
                        selectLetter={this.props.selectLetter}
                    />
                ))}
            </div>
        );
    }
}

export default Letters;
