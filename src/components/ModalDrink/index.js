import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './style.css'

function ModalDrink({ infos, btnclosemodal }) {
  return (
    <div className="container-modal-drink">
        <button id="btnCloseModalDrink" 
          onClick={btnclosemodal}>
          <AiOutlineClose size={30}/>
        </button>
        
      <div id="content-modal-drink">
        <div id="texts-modal-drink">
            <p id="drink_name-modal-drink">{infos.drink_name}</p>
            <img src={infos.url_img} alt=""/>
        </div>
        <div id="list-ingredients-modal-drink">
          <p id="title-list-ingredients">Ingredientes</p>
            {infos.ingredients.map((item) => (
              <div>
                <ul>
                  <li id="items-ingredients">{item}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ModalDrink;