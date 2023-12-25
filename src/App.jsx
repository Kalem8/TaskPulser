//J'utilise la méthode .map dans une li pour afficher chaque nom sous forme de li.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //State
  const [titre, setTitre] = useState("Titre");
  const [taches, setTaches] = useState([
    { id: 1, nom: 'tâche' },
    { id: 2, nom: 'tâche' },
    { id: 3, nom: 'tâche' }
  ]);

  //Comportements
  const handleWrite = (event) => {

    //1. On copie le tableau 
    const copyTachesArray = [...taches];

    //2. On manipule le tableau
    const idUnique = new Date().getTime();
    const updatedTachesArray = copyTachesArray.push({ id: idUnique, nom: event.target.value })
    console.log(copyTachesArray)

    //3. On met à jour le tableau
    setTaches(updatedTachesArray);
  }

  const handleAdd = (event) => {
    //Empêche le rechargement de la page.
    event.preventDefault();
  }

  const handleDelete = (id) => {
    // 3 Partie

    //Copier le state
    const copyTachesArray = [...taches];

    //Manipuler
    const updatedTachesArray = copyTachesArray.filter(tache => tache.id !== id)

    //Updater
    setTaches(updatedTachesArray);
  }

  //Render
  return (
    <div>
      <h1>{titre}</h1>
      <ul>
        {taches.map(tache =>
          <li key={tache.id} > {tache.nom}
            <button onClick={() => handleDelete(tache.id)}> Terminé ! </button>
          </li>

        )}
      </ul>
      <form>
        <input type="text" placeholder='...' onChange={handleWrite} />
        <button type='submit' onClick={handleAdd}>+</button>
      </form>
    </div>
  )
}

export default App
