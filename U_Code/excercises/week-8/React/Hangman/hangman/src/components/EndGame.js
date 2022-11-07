import { Component } from "react";

class EndGame extends Component {
    render() {
        return (
            <div className="EndGame">
                {this.props.win ? <div>Winnnnnn</div> : <div>Loseeee</div>}
            </div>
        );
    }
}

export default EndGame;
