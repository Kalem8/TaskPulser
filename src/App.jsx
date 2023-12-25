import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //State
  const [titre, setTitre] = useState("Titre");
  const [taches, setListes] = useState([
    {id: 1, nom: 'tâche'},
    {id: 2, nom: 'tâche'},
    {id: 3, nom: 'tâche'}
  ]);

  //Comportements


  //Render
  return (
    <div>
      <h1>{titre}</h1>
      <ul>
        {taches.map(tache => (
          <li key={tache.id} > {tache.nom} </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder='...' />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}

export default App
