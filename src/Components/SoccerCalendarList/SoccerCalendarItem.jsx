import React from 'react';

export default function SoccerCalendarItem( {location, team1, team2, date, winner}) {
  let ActionsTdJsx = null;
  if ( winner === null) {
       ActionsTdJsx = (
           <td>
                <button>Home won</button>
                <button>Guest won</button>
                <button>Delete</button>
           </td>
       );
  } else {
       
       ActionsTdJsx = (
           <td>
                <button>Reset</button>
                <button>Delete</button>
           </td>
    );

  }

  return (
         <tr>
            <td>{ date }</td>
            <td>{ location }</td>
            <td> { team1 }</td>
            <td>{ team2 }</td>
            <td>{ winner }</td>
            { ActionsTdJsx }
          </tr>
  );
}
