export const deletePlayer = (playerId) => {
    // debugger
        return (dispatch) => {
            fetch(`http://localhost:3000/players/${playerId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                },
                method: 'DELETE',
                // body: JSON.stringify(playerId)
            })
            .then(resp => resp.json())
            .then(player => dispatch({type: 'DELETE_PLAYER', payload: player}))
        }
    }