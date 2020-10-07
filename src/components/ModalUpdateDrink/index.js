import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

import './style.css'
import api from '../../services/api'

function ModalUpdateDrink({ infos, btnclosemodal }) {
  
    const [url_img, setAdressImg] = useState('')
    const [drink_name, setDrinkName] = useState('')
    const [price, setPrice] = useState(0)
    const [ingredients, setIngredients] = useState([])

    async function handleUpdateDrink() {
      await api.put(`drinks/${infos.id}`, { 
        drink_name, 
        price, 
        ingredients: [ingredients], 
        url_img 
      })
      .then((response) => console.log(response))
      .catch(err => console.log(err))
    }

  return (
      <div className="container-modal-update-drink">
          <button id="btnCloseModal" 
          onClick={btnclosemodal}>
            <AiOutlineClose size={30}/>
          </button>

          <div id="modal-content">
            <form onSubmit={handleUpdateDrink} id="form-edit">
                <div id="test1">
                  <label id="title-drink-edit">{infos.drink_name}</label>
                  <img src={infos.url_img} alt=""/>
                </div>
                <div id="test2">

                  <label>Image</label>
                  <input
                    onChange={(e) =>
                    setAdressImg(e.target.value)}
                    id="input-edit-drink"
                    placeholder="Cole o endereço da imagem"
                  />

                  <label>Drink Name</label>
                  <input
                    onChange={(e) =>
                    setDrinkName(e.target.value)}
                    id="input-edit-drink"
                    placeholder="Digite o nome da bebida"
                  />

                  <label>Price</label>
                  <input
                    onChange={(e) =>
                    setPrice(e.target.value)}
                    id="input-edit-drink"
                    placeholder="Digite o preço da bebida"
                  />

                  <label>Ingredients</label>
                  <input
                    onChange={(e) =>
                    setIngredients(e.target.value)}
                    id="input-edit-drink"
                    placeholder="Digite os ingradientes da bebida"
                  />
                  <textarea value={ingredients} id="ingredients-edit"/>
                  <button id="button-edit-drink" type="submit">Editar</button>

                </div>
            </form>
          </div>
      </div>
  );
}

export default ModalUpdateDrink;