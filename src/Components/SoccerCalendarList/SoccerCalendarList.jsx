import React from 'react';
import SoccerCalendarItem from './SoccerCalendarItem';
import './SoccerCalenderList.css';

export default function SoccerCalendarList({items}) {

    let ItemListJsx = items.map( item => 
        <SoccerCalendarItem 
        key={item.createdAt} 
        location={item.location}
        team1={item.team1}
        team2={item.team2}
        date={item.date} 
        winner={item.winner} />
    );

    return (
      <div className="calendar-table-container">
        <table className="calender-table"> 
           <thead>
              <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Home</th>
                  <th>Guest</th>
                  <th>Winner</th>
                  <th>Actions</th>
              </tr>
           </thead>
           <tbody>
              { ItemListJsx }
           </tbody>
      
        </table>
      </div>
    );
}

