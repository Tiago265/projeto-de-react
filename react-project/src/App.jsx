import ('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Play:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


import './App.css'

import { IoLogoGithub } from "react-icons/io";

import Instagram from './components/Instagram';

function App() {
 
  return (

    <div className ='container-app'>

      <h1>Links do Tiago</h1>

      <a href="https://github.com/Tiago265" className='links' target='_blank'>

      <IoLogoGithub />

      Github

      </a>
      
      <Instagram />

    </div>


  )

}

export default App
