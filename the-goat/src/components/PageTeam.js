import React from 'react';
import './PageTeam.css';

const PageTeam = () => {
    return (
        <>
            <div className='header-team'>
                <div className='team-logo'>                    
                </div>
                <div className='header-contain'>
                    <div className='team-name-burger'>
                        <div className='team-name'>
                            Chicago Bulls
                        </div>
                        <div className='team-burger'>
                            menu-burger
                        </div>
                    </div>
                    <div className='team-navbar'>
                        navbar Filtre Stat Team
                    </div>
                </div>
            </div>
            <div className='main-contain-team'>
                <div className='team-title'>
                    Season and team roster title
                </div>
                <div className='contain-stat-player'>
                    <div className='player-card'>
                        <div className='player-img'>
                            
                        </div>
                        <div className='player-name'>
                            Michael Jordan
                        </div>
                    </div>
                    <div className='stat-container'>
                        <table className='table-stat'>
                            <tr>
                                <th>Filter</th>
                                <th>Filter</th> 
                            </tr>
                            <tr>
                                <td>Stats</td>
                                <td>Stats</td>
                            </tr>
                        </table> 
                    </div>
                </div>
            </div>
        </>
    );
};
export default PageTeam;
            