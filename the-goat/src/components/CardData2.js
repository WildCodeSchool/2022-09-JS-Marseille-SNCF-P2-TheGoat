import React from 'react';

import Dirk from './images/Dirk-vignette.png';
import Carmelo from './images/carmelo-vignette.png';
import English from './images/english-vignette2.png';
import Harden from './images/harden-vignette.png';
import Hayes from './images/hayes_vignette2.png';
import Iverson from './images/iverson-vignette.png';
import Malone from './images/malone-vignette2.png';
import Wade from './images/wade_vignette.png';


const CardData2 = [
    {
        versus: {
            playerOne: {
                id: 0,
                image: Dirk,
                name: "Dirk Nowitzki", 
                },
            playerTwo: {
                id: 1,
                image: Malone,
                name: "Karl Malone", 
                }   
        }    
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: English,
                name: "Alex English",  
            },      
            playerTwo: {
                id: 1,
                image: Wade,
                name: "Dwayne Wade",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Carmelo,
                name: "Carmello Anthony",  
            },      
            playerTwo: {
                id: 1,
                image: Hayes,
                name: "Elvin Hayes",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Harden,
                name: "James Harden",  
            },      
            playerTwo: {
                id: 1,
                image: Iverson,
                name: "Allen Iverson",        
        },
        }
    }
];

export default CardData2;