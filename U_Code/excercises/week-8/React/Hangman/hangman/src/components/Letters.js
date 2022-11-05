import { React, Component } from "react";
import Letter from "./Letter";
class Letters extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="letters">
                <div>Available Letters</div>
                <Letter />
            </div>
        );
    }
}

export default Letters;
