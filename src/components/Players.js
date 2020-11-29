import React from 'react'
import Player from './Player'
import {Route, Link} from 'react-router-dom'

const Players = (props) => {

    return (
        <>
            {props.players.map(player =>
                <div key={player.id}>
                <Link to={`/players/${player.id}`}>{player.name}</Link>
                </div>
                )}
        </>
    )
}

export default Players;