// import React from 'react'
import Player from './Player'
import {Route, Link} from 'react-router-dom'
import Button from './Button'
import { deletePlayer } from "../actions/deletePlayer";
import React, { useState } from "react";
import { connect } from "react-redux";


class Players extends React.Component {
    // const [players, setPlayers] = useState();

    handleDelete = (event) => {
        // debugger
        event.preventDefault();
        let playerId = event.target.dataset.playerid
        this.props.deletePlayer(playerId);
        // this.props.history.push('/players')
      };
   
    render() {
    return (
        <>
        
            {this.props.players.map(player =>
                <div key={player.id}>
                    
                <Link to={`/players/${player.id}`}>{player.name}</Link>
                <Button
                onClick={this.handleDelete}
                debugger
                data-playerid= {player.id}
                >DELETE</Button>
                </div>
                )}
                
        </>
    )
}
}

export default connect(null, { deletePlayer })(Players);
