import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer__Text'>Pour les passionés de plantes <img src="/assets/fern.png" alt="fern" /><img src="/assets/plant.png" alt="plant" /> <img src="/assets/cactus.png" alt="cactus" /></span>
      <div className='footer__Contact'>
        <span>Laissez-nous votre email:</span>
        <input type="text" placeholder='Entrez votre email'/>
      </div>
    </footer>
  )
}

export default Footer
