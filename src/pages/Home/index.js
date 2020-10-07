import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  return (
      <>
        <div className="container">
          <div id="content">
            <Link to="/Letter" id="link-home">Nossas Cartas</Link>
            <Link to="/WeekDrink" id="link-home">Drink Da Semana</Link>
          </div>
        </div>
      </>
  );
}

export default Home;