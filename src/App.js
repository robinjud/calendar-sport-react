import './App.css';
import React, {useState} from 'react';
import SoccerCalendarForm from './Components/SoccerCalendarForm/SoccerCalendarForm';
import SoccerCalendarList from './Components/SoccerCalendarList/SoccerCalendarList';


function App() {
  const [items, setItems] = useState ([
        {
          createdAt: 1689374598465,
          location: 'Madrid',
          team1: 'Real Madrid',
          team2: 'Barcelona',
          date: '2023-08-11',
          winner: 'Real Madrid',
        },
        {
          createdAt: 1689374598466,  
          location: 'Barcelona',
          team1: 'Barcelona',
          team2: 'Real Madrid',
          date: '20230-10-12',
          winner: null,
        },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Soccer Calendar</h1>
      </header>
     <SoccerCalendarForm/>
     <SoccerCalendarList items={items}/>
    </div>
  );
}

export default App;
