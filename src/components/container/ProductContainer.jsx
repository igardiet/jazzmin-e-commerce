import React from 'react'
import Product from '../Product/Product'
import dataBase from '../../assets/db/db'
import './ProductContainer.css'

const ProductContainer = () => {
  return (
    <div className='product-container'>
        {dataBase.map(product => {
           return <Product {...product} key={product.id} />
        })}
    </div>
  )
}

export default ProductContainer