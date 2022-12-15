import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Audiowide from '../fonts/Audiowide-Regular.ttf'
import './CardContain.css';
import "../components/Teams.css";


export default function CardContain({ dataStanding }) {
  console.log(dataStanding, "DATASTANDING");

  const compare = (x, y) => {
    console.log(x.position - y.position, "compare");
    return x.position - y.position;
  };

  const result = dataStanding?.standings_rows?.sort(compare);
  console.log(result, "result");
  
  return (

    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', fontFamily:{Audiowide} }}>
      
      {dataStanding?.standings_rows?.map((dataStandingMap) => {
              console.log(dataStandingMap, "INSIDE MAP");

        return (
       <>
       <div>
        <ListItem className='list-item'>
          <ListItemAvatar className='list-avatar'>
            <Avatar className='avatar' 
              sx={{ width: 50, height: 50, marginRight:'1em', marginLeft:'2em'}}
            >
              <img
              className='image-icon' 
              src={dataStandingMap?.team?.logo}
              alt="logo Team"
              sx={{ width: 62, height: 62, }}
              slotProps={{ thumb: { className: 'thumb' } }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={dataStandingMap?.team?.name_full}
            sx={{marginLeft:"1em"}}
            
             />
        
        
        </ListItem>
        </div>
        
        </>

        

        );
      })}
    </List>
);
}
