import React from 'react'
import ArticlesList from './Article.jsx'

const Main = () => {
  return (
    <main className='main'>
      <div className='mainAside'>Votre panier est vide</div>
      <div className='mainSection'>
        <div className='mainSection__Title'>
          <h2>The main section</h2>
        </div>
        <div className='mainSection__Content'>
          <ArticlesList />
        </div>
      </div>
    </main>
  )
}

export default Main
