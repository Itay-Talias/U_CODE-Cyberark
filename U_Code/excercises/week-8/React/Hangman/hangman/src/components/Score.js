import { React, Component } from "react";
class Score extends Component {
    constructor() {
        super();
        this.score = 100;
    }
    render() {
        return <div id="score">{this.score}</div>;
    }
}

export default Score;
