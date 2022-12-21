import React from 'react';

import Carter from './images/carter-vignette.png';
import Carmelo from './images/carmelo-vignette.png';
import Jordan from './images/jordan-vignette.png';
import Harden from './images/harden-vignette.png';
import Magic from './images/magic_vignette.png';
import Iverson from './images/iverson-vignette.png';
import Malone from './images/malone-vignette1.png';
import Wade from './images/wade-vignette.png';
import Curry from './images/curry-vignette.png';


const CardData4 = [
    {
        versus: {
            playerOne: {
                id: 0,
                image: Carter,
                name: "Vince Carter", 
                },
            playerTwo: {
                id: 1,
                image: Carmelo,
                name: "Carmelo Anthony", 
                }   
        }    
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Jordan,
                name: "Michael Jordan",  
            },      
            playerTwo: {
                id: 1,
                image: Harden,
                name: "James Harden",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Wade,
                name: "James Wade",  
            },      
            playerTwo: {
                id: 1,
                image: Magic,
                name: "Magic Johnson",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Curry,
                name: "Stephen Curry",  
            },      
            playerTwo: {
                id: 1,
                image: Iverson,
                name: "Allen Iverson",        
        },
        }
    }
];

export default CardData4;