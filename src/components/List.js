import React from 'react';
import Players from "./AddStats";

function List(props){
    const filteredPlayers = Players.filter(player => {
        if (props.input === '') {
            return null;
        }
        else {
            return player.name.toLowerCase().includes(props.input);
        }
    })

    return(
        <div className="PlayerResults">
            <ul>
                {filteredPlayers.map((player) => (
                    <li key={player.id}>{player.name} - {player.otter}</li>
                ))}
            </ul>
        </div>
    )
};

export default List;