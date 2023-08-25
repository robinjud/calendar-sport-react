import React from "react";

export default function SoccerCalendarItem({
  location,
  team1,
  team2,
  date,
  winner,
  id,
  updateWinner,
  deleteItem
}) {
  function homeWonHandler() {
     updateWinner(id,team1);
  }

  function guessWonHandler() {
     updateWinner(id,team2);
  }

  function resetHandler() {
     updateWinner(id, null);
  }

  function deleteHandler() {
     deleteItem(id);
  }

  let ActionsTdJsx = null;
  if (winner === null) {
    ActionsTdJsx = (
      <td>
        <button onClick={homeWonHandler} class="controlbuttons">Home won</button>
        <button onClick={guessWonHandler} class="controlbuttons">Guest won</button>
        <button onClick={deleteHandler} class="controlbuttons">Delete</button>
      </td>
    );
  } else {
    ActionsTdJsx = (
      <td>
        <button onClick={resetHandler} class="controlbuttons">Reset</button>
        <button onClick={deleteHandler} class="controlbuttons">Delete</button>
      </td>
    );
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{location}</td>
      <td> {team1}</td>
      <td>{team2}</td>
      <td>{winner}</td>
      {ActionsTdJsx}
    </tr>
  );
}
