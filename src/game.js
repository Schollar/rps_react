import React from 'react';
import ScoreBoard from './scoreBoard';
import UserSelection from './userSelection';
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
            selection: '',
            name: "Colton"
        }
    }
    handleClick = (selection) => {
        const user_selection = selection;
        this.setState({ selection: user_selection })
    }
    render() {
        return (
            <div>
                <ScoreBoard
                    score={this.state.score}
                />
                <UserSelection
                    choices={this.state.choices}
                    sendData={this.handleClick} />
            </div>
        );
    }

}

export default Game;