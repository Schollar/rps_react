import React from 'react';
import ScoreBoard from './scoreBoard';
import UserSelection from './userSelection';
import CompSelection from './compSelection';
import '../Css/game.css'
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: {
                wins: 0,
                ties: 0,
                losses: 0,
            },
            choices: [{ name: "Rock", imageUrl: './rock.png', alt: 'A fist to represent a rock' }, { name: "Paper", imageUrl: './paper.png', alt: 'A stretched out hand to represent paper' }, { name: "Scissors", imageUrl: './scissors.png', alt: "Two fingers to represent scissors" }],
            comp_selection: '',
            selection: '',
            user_selected: false,
            result: ''
        }
    }
    handleClick = (selection) => {
        const user_selection = selection;
        this.setState({ selection: user_selection, comp_selection: "Computer is thinking...." })
        setTimeout(() => {
            this.compPick();
        }, 3000);
    }
    // Updating computer selection state after 5 second delay to appear as if computer is thinking
    compPick = () => {
        var choices = ['Rock', 'Paper', 'Scissors']
        this.setState({ comp_selection: choices[Math.floor(Math.random() * 3)] })
        setTimeout(() => {
            this.Result()
        }, 1000);
    };
    user_win() {
        this.setState({ result: "Win" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                wins: prevState.score.wins + 1       // update the value of specific key
            }
        }))
    }
    user_lose() {
        this.setState({ result: "Loss" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                losses: prevState.score.losses + 1       // update the value of specific key
            }
        }))
    }
    draw() {
        this.setState({ result: "Tie" });
        this.setState(prevState => ({
            score: {                   // object that we want to update
                ...prevState.score,    // keep all other key-value pairs
                ties: prevState.score.ties + 1       // update the value of specific key
            }
        }))
    }
    // Game logic, giant if else statement not ideal
    Result = () => {
        if (this.state.selection === "Rock" && this.state.comp_selection === "Scissors") {
            this.user_win();
        } else if (this.state.selection === "Rock" && this.state.comp_selection === "Paper") {
            this.user_lose();
        } else if (this.state.selection === "Scissors" && this.state.comp_selection === "Paper") {
            this.user_win();
        } else if (this.state.selection === "Scissors" && this.state.comp_selection === "Rock") {
            this.user_lose();
        } else if (this.state.selection === "Paper" && this.state.comp_selection === "Rock") {
            this.user_win();
        } else if (this.state.selection === "Paper" && this.state.comp_selection === "Scissors") {
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
                <p class="result">Result: {this.state.result}</p>
                {/* Passing Choices as a prop to userselection, and passing a custom prop to handle the button clicks */}
                <div class="selection_container">
                    <UserSelection
                        choices={this.state.choices}
                        sendData={this.handleClick}
                    />
                    <CompSelection selection={this.state.comp_selection}></CompSelection>
                </div>
                <div>
                </div>
            </div>
        );
    }

}

export default Game;