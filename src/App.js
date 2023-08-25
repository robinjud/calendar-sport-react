import './App.css';
import React, {useState} from 'react';
import SoccerCalendarForm from './Components/SoccerCalendarForm/SoccerCalendarForm';
import SoccerCalendarList from './Components/SoccerCalendarList/SoccerCalendarList';


function App() {
  const [items, setItems] = useState ([
        {
          id: 1689374598465,
          location: 'Madrid',
          team1: 'Real Madrid',
          team2: 'Barcelona',
          date: '2023-08-11',
          winner: 'Real Madrid',
        },
        {
          id: 1689374598466,  
          location: 'Barcelona',
          team1: 'Barcelona',
          team2: 'Real Madrid',
          date: '2023-10-12',
          winner: null,
        },
  ]);

  function createItem(date, location, home, guest) {
       setItems(oldItems => {
            let newItems = [
              ...oldItems,
              {
                id: new Date().getTime(),
                location,
                team1: home,
                team2: guest,
                date,
                winner: null,

              },
            ];
            newItems.sort((match1, match2) => match1.date > match2.date ? 1 : -1);
            return newItems;
       });
  }

  function updateWinner(id, newWinnerValue) {
       let result = [];
       let newItems = structuredClone(items);
       for (let item of newItems) {
        if (item.id === id) {
           item.winner = newWinnerValue; 
        }
        result.push(item);
       }
       setItems(result);
  }

  function deleteItem(id) {
       let result = [];
       for (let item of items) {
        if (item.id !== id) {
          result.push(item);
        }
       }
       setItems(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Soccer Calendar</h1>
      </header>
     <SoccerCalendarForm createItem={createItem}/>
     <SoccerCalendarList items={items} updateWinner={updateWinner} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
