import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className="Header">
            <h1 className='Header-main-title'>Games</h1>
            <div className='Header-title'>
              <h2 className='Header-subtitle'>The G.O.A.T</h2>
              <div className='Header-p'>
              <p>32 Legends</p>
              <p>4 Weeks</p>
              </div>
            </div>            
          </header>
    )
}

export default Header;