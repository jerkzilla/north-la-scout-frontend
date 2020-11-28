import React from 'react'
import { connect } from 'react-redux'
import Player from '../components/Player'
import Players from '../components/Players'
import PlayerInput from '../components/PlayerInput'
import {fetchPlayers} from '../actions/fetchPlayers'
import {Route} from 'react-router-dom'

class PlayersContainer extends React.Component {

    componentDidMount(){
        this.props.fetchPlayers()
    }

    render() {
        return (
            <div>
                <Route path='/players/new' component={PlayerInput} />
                <Route path='/players/:id' render={(routerProps) => <Player {...routerProps} players={this.props.players}/>}/>
                <Route exact path='/players' render={(routerProps) => <Players players={this.props.players}/>}/>
         
                
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