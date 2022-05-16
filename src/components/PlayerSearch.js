import React, {useState} from "react";
import List from "./List";

function PlayerSearch() {
    const [inputText, setInputText] = useState("")
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return(
        <>
            <h2>Player Search</h2>
            <div className="search">
                <label for="name">Player Name</label>
                <input type="text" id="name" onChange={inputHandler} size="10"/>   
            </div>
            <List input={inputText} />
        </>
    )
}

export default PlayerSearch;