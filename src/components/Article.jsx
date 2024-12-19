import React from 'react'

const articles = [
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Montsera',
    price: 15,
    imageUrl: '/assets/montsera.jpg',
    rate1: 3,
    rate2: 2
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Ficus Lyrata',
    price: 16,
    imageUrl: '/assets/ficus-lyrata.jpg',
    rate1: 1,
    rate2: 3
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Pothos argenté',
    price: 9,
    imageUrl: '/assets/pothos-argenté.jpg',
    rate1: 2,
    rate2: 1
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Calathea',
    price: 20,
    imageUrl: '/assets/calathea.jpg',
    rate1: 3,
    rate2: 2
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Olivier',
    price: 25,
    imageUrl: '/assets/olivier.jpg',
    rate1: 1,
    rate2: 3
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Cactus',
    price: 6,
    imageUrl: '/assets/cactus.jpeg',
    rate1: 1,
    rate2: 2
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Basilic',
    price: 5,
    imageUrl: '/assets/basilic.jpg',
    rate1: 3,
    rate2: 2
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Succulente',
    price: 8,
    imageUrl: '/assets/succulente.jpg',
    rate1: 1,
    rate2: 2
  },
  {
    id: Math.floor(Math.random()*99999999),
    name: 'Menthe',
    price: 4,
    imageUrl: '/assets/menthe.jpg',
    rate1: 2,
    rate2: 2
  }
]

const Articleslist = () => {

  return (
    <>
    {
      articles.map(({name, price, imageUrl, rate1, rate2}) => (
        <article className='article'>
            <div className='article__Info'>
              <img className='article__Info__Image' src={imageUrl} alt={name} />
              <strong className='article__Info__Price'>{price}€</strong>
              <p className='article__Info__Title'>{name}</p>
            </div>
            <div className='article__Rate'>
              <span className='rate1'>{rate1}</span>
              <span className='rate2'>{rate2}</span>
            </div>
            <div className='article__Option'>
              <button>Ajouter +</button>
            </div>
        </article>
        )
      )
    }
    </>
  )
}

export default Articleslist
