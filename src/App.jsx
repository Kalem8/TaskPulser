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
  const [nouvelleTache, setNouvelleTache] = useState("Sam");

  //Comportements
  const handleWrite = (event) => {
    setNouvelleTache(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();//Empêche le rechargement de la page.

    //Changer le state en 3 étapes copier/ manipuler/ updater
    //1.COPIER avec spreadOpperator 
    const copyTachesArray = [... taches];

    //2.Manipuler
    const createId = new Date().getTime(); 
    copyTachesArray.push( { id: createId, nom: nouvelleTache } )
    
    //3.Update
    setTaches(copyTachesArray);

  }
  const handleDelete = (id) => {
    // 3 Partie pour modifier un state

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
        <input 
        value={nouvelleTache}
        action="submit" 
        type="text" placeholder='...' 
        onChange={handleWrite} 
        />
        <button type='submit' onClick={handleSubmit}>+</button>
      </form>
    </div>
  )
}

export default App
