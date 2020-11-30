import React from 'react';
import {connect} from 'react-redux'
import { fetchPlayers } from './actions/fetchPlayers';
import PlayersContainer from './containers/PlayersContainer'
import Button from './components/Button'
import Home from './components/Home'


class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <Home />
        <PlayersContainer />
        <Button >Button</Button>
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
