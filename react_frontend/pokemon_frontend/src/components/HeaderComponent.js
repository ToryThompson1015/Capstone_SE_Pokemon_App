import React, { Component } from 'react';
import {useState} from "react";
import axios from "axios"

const [pokemonName, setPokemonName] = useState("");

class HeaderComponent extends Component {
    
    render() {
        return (


            <div className="headerSection">
                Pokemon Data!!!
                <input className="search" type="text" 
                placeholder="Search for your Fav Pokemon!"
                onChange={(event) =>{
                  setPokemonName(event.target.value)
                }}>

                </input>
                <button className="searchButton" >Search</button>
            </div>
            
        );
    }
}

export default HeaderComponent;