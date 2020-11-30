import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            NORTH LOUISIANA BASKETBALL SCOUT<br/>
            <Link to="/">  Home  </Link>  
            <Link to="/players">  PLAYERS  </Link>  
            <Link to="/players/new">  Add Player  </Link>  
        </div>
    )
}
