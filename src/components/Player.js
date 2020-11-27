import React from 'react'

const Player = (props) => {

    return (
        <>
            {props.players.map(player =>
                <li key={player.id}>
                {player.name} - {player.school} - {player.year}: <br/>
                <p>{player.scout}</p> 
                </li>
                )}
        </>
    )
}

export default Player;