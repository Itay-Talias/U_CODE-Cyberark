import { Component } from "react";

class EndGame extends Component {
    render() {
        return (
            <div className="EndGame">
                {this.props.status ? <div>Loseeee</div> : <div>Winnnnnn</div>}
            </div>
        );
    }
}

export default EndGame;
