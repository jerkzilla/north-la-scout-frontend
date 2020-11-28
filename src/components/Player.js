import React from 'react'

const Player = (props) => {
    
    // console.log(props)

    let player = props.players[props.match.params.id - 1]
    
    return (
        <li>
            {player ? player.name: null} - {player ? player.school : null}
            {/* {props.player.name} - {props.player.school} */}
        </li>
    )
}

export default Player;
