import React from 'react'
import Player from './Player'

const Players = (props) => {

    return (
        <>
            {props.players.map(player =>
                <div key={player.id}>
                <Player player={player}/>
                </div>
                )}
        </>
    )
}

export default Players;