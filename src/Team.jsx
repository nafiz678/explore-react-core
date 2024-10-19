import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11)

    const teamStyle = {
        border : "4px solid purple",
        margin : "20px",
        padding :"15px",
        borderRadius : "20px"
    }

    return (
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={()=>{
              const newTeam = team + 1;
              setTeam(newTeam)  
            }}>Add</button>

            <button onClick={()=>{
              setTeam(team - 1)  
            }}>Remove</button>
        </div>
    )
}