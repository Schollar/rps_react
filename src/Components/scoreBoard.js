import React from 'react';
import '../Css/scoreBoard.css'

// Scoreboard component accepts props from the parent(game compoenent)
// Then Display the information as h1s in a div
function ScoreBoard(props) {

    return (
        <div className='scoreboard_container'>
            <h1> Wins: {props.score.wins}</h1>
            <h1> Ties: {props.score.ties}</h1>
            <h1> Losses: {props.score.losses}</h1>

        </div>
    );

}

export default ScoreBoard;