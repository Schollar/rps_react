import React from 'react';
import ScoreBoard from './scoreBoard';
import UserSelection from './userSelection';
import CompSelection from './compSelection';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: {
                wins: 0,
                ties: 0,
                losses: 0,

            },
            choices: ["Rock", "Paper", "Scissors"],
            comp_selection: '',
            selection: '',
            user_selected: false,
            name: "Colton",
            result: ''
        }
    }
    handleClick = (selection) => {
        const user_selection = selection;
        this.setState({ selection: user_selection })
    }
    // Updating computer selection state after 5 second delay to appear as if computer is thinking
    compPick = () => {
        var choices = this.state.choices
        this.setState({ comp_selection: choices[Math.floor(Math.random() * 3)] });
        setTimeout(() => {
            this.setState({ comp_selection: choices[Math.floor(Math.random() * 3)] });
        }, 5000);

    };
    user_win() {
        this.setState({ result: "win" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                wins: +1       // update the value of specific key
            }
        }))
    }
    user_lose() {
        this.setState({ result: "loss" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                losses: +1       // update the value of specific key
            }
        }))
    }
    draw() {
        this.setState({ result: "tie" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                ties: +1       // update the value of specific key
            }
        }))
    }
    Result = () => {
        if (this.state.selection === "rock" && this.state.comp_selection === "scissors") {
            this.user_win();
        } else if (this.state.selection === "rock" && this.state.comp_selection === "paper") {
            this.user_lose();
        } else if (this.state.selection === "scissors" && this.state.comp_selection === "paper") {
            this.user_win();
        } else if (this.state.selection === "scissors" && this.state.comp_selection === "rock") {
            this.user_lose();
        } else if (this.state.selection === "paper" && this.state.comp_selection === "rock") {
            this.user_win();
        } else if (this.state.selection === "paper" && this.state.comp_selection === "scissors") {
            this.user_lose();
        } else {
            this.draw()
        }
    };
    render() {
        return (
            <div>
                <ScoreBoard
                    score={this.state.score}
                />
                <UserSelection
                    choices={this.state.choices}
                    sendData={this.handleClick}
                    compTurn={this.compPick} />
                <CompSelection selection={this.state.comp_selection}></CompSelection>
            </div>
        );
    }

}

export default Game;