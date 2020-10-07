import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import api from '../../services/api'

function WeekDrink() {
  const [state, setState] = useState([])
  

  useEffect(() => {
    async function fecthData() {
      await api.get("drinks")
        .then((response) => {
          const data = response.data.filter((item) => item.week_drink == true)
          setState(data)
        })
        .catch(err => console.log(err))
    }
    fecthData()
  }, [])

  return (
    <>
      {state.map((item, index) => (
        <div key={index} id="container-weeldrink">
          
          <style>{`
            div#container-weeldrink {
              background-image: url(${item.url_img});
            }
          `}</style>

          <div id="content-wee-drink">
            <div id="texts-week-drink">
              <Link id="text-back-week-drink" to="/letter">Voltar</Link>
              <h1 id="title-week-drink">Drink da Semana</h1>
              <h3 id="name-week-drink">{item.drink_name}</h3>
            </div>

            <div id="ingredients-week-drinks">
              <p id="title-ingredients-week-drink">Ingredientes</p>
              {item.ingredients.map((item, index) => (
                <div key={index}>
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      
    </>
  );
}

export default WeekDrink;