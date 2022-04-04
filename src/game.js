import React from 'react';
import ScoreBoard from './scoreBoard';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: {
                wins: 0,
                ties: 0,
                losses: 0,
            },
            name: "Colton"
        }
    }
    render() {
        return (
            <ScoreBoard
                score={this.state.score}
            />
        );
    }

}

export default Game;