import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (

    <section className='text-center  bg-body-secondary border'>

      <h1 className='text-primary'>{greeting}</h1>
    
    </section>
    
  )
}

export default ItemListContainer