import React from 'react';

import Carter from './images/carter-vignette.png';
import Ewing from './images/ewing-vignette.png';
import Duncan from './images/duncan-vignette.png';
import Harden from './images/harden-vignette.png';
import Miller from './images/miller-vignette.png';
import Iverson from './images/iverson-vignette.png';
import West from './images/west-vignette.png';
import Pierce from './images/pierce-vignette.png';


const CardData3 = [
    {
        versus: {
            playerOne: {
                id: 0,
                image: Carter,
                name: "Vince Carter", 
                },
            playerTwo: {
                id: 1,
                image: Ewing,
                name: "Patrick Ewing", 
                }   
        }    
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Duncan,
                name: "Tim Duncan",  
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
                image: Miller,
                name: "Reggie Miller",  
            },      
            playerTwo: {
                id: 1,
                image: Iverson,
                name: "Allen Iverson",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: West,
                name: "Jerry West",  
            },      
            playerTwo: {
                id: 1,
                image: Pierce,
                name: "Paul Pierce",        
        },
        }
    }
];

export default CardData3;