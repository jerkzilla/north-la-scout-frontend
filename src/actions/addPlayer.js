export const addPlayer = (data) => {
// debugger
    return (dispatch) => {
        fetch('http://localhost:3000/players', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(player => dispatch({type: 'ADD_PLAYER', payload: player}))
    }
}