import React, { Component } from 'react';
import {useState} from "react";
import axios from "axios"


function HeaderComponent()  {
    // set the search bar value to be the pokemonName 
    const [pokemonName, setPokemonName] = useState("");
    // function to grab a pokekmon from the api
    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (res)=> {
                console.log(res)
            }
        )
    }

    
        return (


            <div className="headerSection">
                Pokemon Data!!!
                <input className="search" type="text" 
                placeholder="Search for your Fav Pokemon!"
                onChange={(event) =>{
                  setPokemonName(event.target.value)
                  console.log(pokemonName)
                }}>

                </input>
                <button className="searchButton" onClick={searchPokemon} >Search</button>
            </div>
            
        );
    }


export default HeaderComponent;