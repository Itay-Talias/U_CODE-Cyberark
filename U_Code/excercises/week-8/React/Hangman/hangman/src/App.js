import { Component } from "react";
import "./App.css";
import EndGame from "./components/EndGame";
import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";

const CORRECT_ANSWER = 5;
const WORNG_ANSWER = -15;
const A_ASCII = 65;
const Z_ASCII = 91;
const HINT = "Your name??";
const WORD = "ITAY";
const INIT_SCORE = 100;
class App extends Component {
    constructor() {
        super();
        this.state = {
            letterStatus: this.generateLetterStatuses(),
            solution: { word: WORD, hint: HINT },
            score: INIT_SCORE,
            endGame: false,
            win: false,
        };
    }
    generateLetterStatuses() {
        let letterStatus = {};
        for (let i = A_ASCII; i < Z_ASCII; i++) {
            letterStatus[String.fromCharCode(i)] = false;
        }
        return letterStatus;
    }
    checkIfWin = () => {
        let win = true;
        for (const letter of this.state.solution.word.split("")) {
            win = win && this.state.letterStatus[letter];
        }
        if (win === true) {
            this.setState({ endGame: true });
            this.setState({ win: true });
        }
        return win;
    };
    changeScore = (number) => {
        const newScore = this.state.score + number;
        this.setState({ score: newScore });
    };
    selectLetter = (letter) => {
        if (this.state.score > 0) {
            const currentLetterStatus = this.state.letterStatus;
            if (currentLetterStatus[letter] === false) {
                currentLetterStatus[letter] = true;
                this.setState({ letterStatus: currentLetterStatus });
                if (!this.state.solution.word.includes(letter)) {
                    this.changeScore(WORNG_ANSWER);
                } else {
                    this.changeScore(CORRECT_ANSWER);
                    this.checkIfWin();
                }
            }
        } else {
            this.setState({ endGame: true });
        }
    };
    render() {
        return (
            <div className="App">
                {this.state.endGame ? (
                    <EndGame status={this.state.status} />
                ) : (
                    <div>
                        <Score score={this.state.score} />
                        <Solution
                            letterStatus={this.state.letterStatus}
                            solution={this.state.solution.word}
                            hint={this.state.solution.hint}
                        />
                        <Letters
                            letterStatus={this.state.letterStatus}
                            selectLetter={this.selectLetter}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
