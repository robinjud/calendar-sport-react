import React from 'react';
import SoccerCalendarItem from './SoccerCalendarItem';
import './SoccerCalenderList.css';

export default function SoccerCalendarList({items, updateWinner, deleteItem}) {

    let ItemListJsx = items.map( item => 
        <SoccerCalendarItem 
        key={item.id} 
        id={item.id}
        location={item.location}
        team1={item.team1}
        team2={item.team2}
        date={item.date} 
        winner={item.winner} 
        updateWinner={updateWinner}
        deleteItem={deleteItem}/>
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

