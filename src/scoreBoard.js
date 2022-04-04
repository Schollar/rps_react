import React from 'react';


function ScoreBoard(props) {

    return (
        <div>
            <h1> Wins: {props.score.wins}</h1>
            <h1> Ties: {props.score.ties}</h1>
            <h1> Losses: {props.score.losses}</h1>

        </div>
    );

}

export default ScoreBoard;