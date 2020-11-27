import React from 'react'
import { connect } from 'react-redux'
import Player from '../components/Player'
import PlayerInput from '../components/PlayerInput'
import {fetchPlayers} from '../actions/fetchPlayers'

class PlayersContainer extends React.Component {

        componentDidMount(){
            this.props.fetchPlayers()
        }

    render() {
        return (
            <div>
                <Player players={this.props.players}/>
                <PlayerInput />
            </div>

        )

    }
}

const mSTP = state => {
    return {
        players: state.players
    }
}

export default connect(mSTP, {fetchPlayers})(PlayersContainer);