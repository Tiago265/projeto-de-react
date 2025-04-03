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
