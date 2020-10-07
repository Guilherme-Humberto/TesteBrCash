import React, { useState } from 'react';

import './style.css'
import api from '../../services/api'
import ListDrinks from '../../components/ListDrinks'

function Letter() {
  const [content, setContent] = useState(true)

  const [url_img, setAdressImg] = useState('')
  const [drink_name, setDrinkName] = useState('')
  const [price, setPrice] = useState(0)
  const [ingredients, setIngredients] = useState([])

  function handleChangeContent() {
    setContent(false)
    setIngredients([])
  }
  
  async function handleAddDrink(e) {
    e.preventDefault()
    await api.post(`drinks`, { url_img, drink_name, price, ingredients })
      .then(() => setContent(true))
      .catch(err => console.log(err))
  }

  return (
    <div className="container-letter">
      {content ? (<ListDrinks handleChangeContent={handleChangeContent}/>) 
        : (
          <div id="container-add-drink">
            <p id="title-letter-add-drink">Adicionar Drink</p>

            <form onSubmit={handleAddDrink}>

              <label>Imagem</label>
              <input 
                onChange={(e) => 
                setAdressImg(e.target.value)} 
                id="input-add-drink" 
                placeholder="Cole o endereço da imagem" 
              />

              <label>Drink Name</label>
              <input 
                onChange={(e) => 
                setDrinkName(e.target.value)} 
                id="input-add-drink" 
                placeholder="Digite o nome da bebida" 
              />

              <label>Price</label>
              <input 
                onChange={(e) => 
                setPrice(e.target.value)} 
                id="input-add-drink" 
                placeholder="Digite o valor bebida" 
              />

              <label>Ingredients</label>
              <input 
                onChange={(e) => 
                setIngredients(e.target.value)} 
                id="input-add-drink" 
                placeholder="Digite o preço da bebida" 
              />
              <textarea 
                value={ingredients} 
                id="list-ingredients" 
                disabled 
                placeholder="Ingredientes" 
              />

              <button type="submit" id="btn-add-drink">Adicionar</button>
            </form>

          </div>
        )}
    </div>
  );
}

export default Letter;