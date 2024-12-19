import React from 'react'
import ArticlesList from './Article.jsx'

const Main = () => {
  return (
    <main className='main'>
      <div className='mainAside'>
        <p>Votre panier est vide</p>
        <button>Fermer</button>
      </div>
      <div className='mainSection'>
        <div className='mainSection__Head'>
          <select name="#" id="#">
            <option value="1" selected>_ _ _</option>
          </select>
          <button>Réinitialiser</button>
        </div>
        <div className='mainSection__Content'>
          <ArticlesList />
        </div>
      </div>
    </main>
  )
}

export default Main
