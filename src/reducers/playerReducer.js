export default function playerReducer(state = { players: [] }, action) {
  switch (action.type) {
    case "FETCH_PLAYERS":
      return { ...state, players: action.payload };

    case "ADD_PLAYER":
      return { ...state, players: [...state.players, action.payload] };

      case "DELETE_PLAYER":
        // debugger
        let newPlayers = state.players.filter((player) => { return player.id !== action.payload.id})
        // debugger
        return { players: newPlayers };
    default:
      return state;
  }
}
