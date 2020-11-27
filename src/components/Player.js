import React from 'react'

const Player = (props) => {

    return (
        <>
            {props.players.map(player =>
                <li>
                    {player.name} - {player.school} - {player.year}: <br/>
                   <p>{player.scout}</p> 
                 </li>
                )}
        </>
    )
}

export default Player;