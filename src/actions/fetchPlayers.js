

export function fetchPlayers() {
    return (dispatch) => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(players => dispatch({
        type: 'FETCH_PLAYERS',
        payload: players
    }))
    }

}