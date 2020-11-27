import React from 'react';
import {connect} from 'react-redux'
import { fetchPlayers } from './actions/fetchPlayers';
import PlayersContainer from './containers/PlayersContainer'


class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <PlayersContainer />
      </div>
    )
  }
  

}

// const mSTP = (state) => {
//   return {
//     players: state.players
//   }
// }

export default connect(null, {fetchPlayers})(App);
