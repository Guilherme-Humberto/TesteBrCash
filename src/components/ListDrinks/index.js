import React, { useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './style.css'
import api from '../../services/api'
import ModalUpdateDrink from '../ModalUpdateDrink';
import ModalDrink from '../ModalDrink';

function ListDrinks({ handleChangeContent }) {
  const [state, setState] = useState([])
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDrink, setModalDrink] = useState(false)
  const [infos, setInfos] = useState({})

  useEffect(() => {
    async function fecthData() {
      await api.get("drinks")
        .then((response) => setState(response.data))
        .catch(err => console.log(err))
    }
    fecthData()
  }, [])

  async function handleDeleteDrink(id) {
    await api.delete(`drinks/${id}`)
      .then((response) => console.log(response))
      .catch(err => console.log(err))
  }

  function handleOpenModal(item) {
    setModalEdit(true)
    setInfos(item)
  }

  function handleDrinkSelected(item) {
    setModalDrink(true)
    setInfos(item)
  }

  return (
    <>
    <div id="container-nav">
        <Link id="back-link" to="/">Voltar</Link>
        <p id="title-letter">Nossas Cartas</p>
    </div>
     <div id="container-list-drinks">
        {state.map((item, index) => (
          <div key={index} id="drinks-list">
            <div id="teste2">

              <button
                onClick={() => handleDrinkSelected(item)}>
                <img src={item.url_img} alt="Image Drink" />
              </button>

              <div id="icons">
                <button id="btn-icon" 
                  onClick={() => handleDeleteDrink(item.id)}>
                  <AiOutlineClose size={25} />
                </button>

                <button id="btn-icon" 
                  onClick={() => handleOpenModal(item)}>
                  <FiEdit2 size={25} />
                </button>
              </div>

            </div>
            <p id="drink-name">{item.drink_name}</p>
          </div>
        ))}

        <div id="button-content-drink">
            <button 
                onClick={handleChangeContent} 
                id="btn-new-drink">
                <BsPlus size={70} />
            </button>
            <p id="btn-text-add">Novo Drink</p>
        </div>

     </div>
    
     {modalEdit && (
      <ModalUpdateDrink 
        btnclosemodal={() => setModalEdit(false)} 
        infos={infos}/>
     )}

     {modalDrink && (
       <ModalDrink 
        btnclosemodal={() => setModalDrink(false)} 
        infos={infos}
      />
     )}
    </>
  );
}

export default ListDrinks;