import React from 'react';
import './SoccerCalendarForm.css';

export default function SoccerCalendarForm() {
  return (
    <form>
        <div className='form-row'>
             <label htmlFor="date">Date</label>
             <input type='date' id="date" required/>
        </div>
        <div className='form-row'>
             <label  htmlFor="location">Location</label>
             <input type="text" id="location" required/>
        </div>
        <div className='form-row'>
             <label  htmlFor="home">Home</label>
             <input type="text" id="home" required/>
        </div>
        <div className='form-row'>
             <label  htmlFor="guest">Guest</label>
             <input type="text" id="guest" required/>
        </div>
        <div className='form-row'>
            <button type="submit">Add</button>
        </div>
    </form>
  );
}

