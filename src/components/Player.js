import React from "react";
// import {Redirect} from 'react-router-dom'

const Player = (props) => {
  
  console.log(props);

  let playerId = parseInt(props.match.params.id)
  let players = props.players

  let player = players.find((p) => p.id === playerId)
  // props.players.filter((p) => p.id === playerId)
  debugger
  return (
    <li>

      {player ? player.name : null} - {player ? player.school : null} -{" "}
      {player ? player.year : null}
      <br />
      <p>{player ? player.scout : null}</p>
      {/* <iframe
        width="800"
        height="1000"
        name={player ? player.name : null}
        src={player ? player.video_link : null}
      /> */}
      {/* {props.player.name} - {props.player.school} */}
    </li>
  );
};

export default Player;
