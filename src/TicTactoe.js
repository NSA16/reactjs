import { useState, createContext, useContext } from "react";
import React from "react";

// const PlayerContext = createContext ();

function TicTactoe () {

    // const [player, setPlayer] = useState ('O')

    return (
        <div>
            <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
            </div>
            <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
            </div>
            <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
            </div>
        </div>
    );
}


function TicBox () {

    return (
        <div className="testUser"></div>
    );
}



export default TicTactoe;