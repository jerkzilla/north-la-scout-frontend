export default function playerReducer(state = {players: []}, action) {

    switch(action.type) {
        case 'FETCH_PLAYERS':
            return {...state, players: action.payload}
        
        case 'ADD_PLAYER':
            return {...state, players: [...state.players, action.payload]}
            
            default:
            return state
        }
    

    


}