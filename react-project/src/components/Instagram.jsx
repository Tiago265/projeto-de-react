
import('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Play:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


import React from 'react'

import { FaInstagram } from "react-icons/fa";

import './instagram.css'


function Instagram() {

  return (

    <div className='container-instagram '>

        <a href="https://www.instagram.com/tiago_burlamaque2/" className='links-dois' target='_blank'>
            
        <FaInstagram />

             Instagram
            
            </a>

    </div>

  )

}

export default Instagram