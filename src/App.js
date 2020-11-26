import React from 'react';

class App extends React.Component {
  
    componentDidMount() {
      fetch('http://localhost:3000/players')
      .then(res => res.json())
      .then(players => console.log(players))
    }
  
  render() {
    return (
      <div className="App">
  
      </div>
    )
  }
  

}

export default App;
