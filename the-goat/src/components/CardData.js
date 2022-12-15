import React from 'react';

import Steph from './images/curry-vignette.png';
import Kevin from './images/durant.png';
import Michael from './images/jordan-vignette.png';
import Shaq from './images/shaq-vignette.png';
import Magic from './images/magic_vignette.png';
import Kareem from './images/kareem-vignette.png';
import Larry from './images/bird-vignette.png';
import Allen from './images/allen_vignette.png';

const CardData = [
    {
        versus: {
            playerOne: {
                id: 0,
                image: Steph,
                name: "Stephen Curry", 
                },
            playerTwo: {
                id: 1,
                image: Kevin,
                name: "Kevin Durant", 
                }   
        }    
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Michael,
                name: "Michael Jordan",  
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
                image: Shaq,
                name: "Shaquille O'neal",  
            },      
            playerTwo: {
                id: 1,
                image: Kareem,
                name: "K.Abdul Jabbar",        
        },
        }
    },
    {
        versus: {
            playerOne: {
                id: 0,
                image: Larry,
                name: "Larry Bird",  
            },      
            playerTwo: {
                id: 1,
                image: Allen,
                name: "Ray Allen",        
        },
        }
    }
];

export default CardData;
  
  