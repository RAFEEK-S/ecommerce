import React from 'react'
import Product from './Product'

function Main(props) {
  return (
    <div className='block col-2'>
        <h2>Products</h2>
        <div className='row'>
            {props.products.map((e,id)=>{
               return <Product key={id} Items={e} onAdd={props.onAdd} ></Product>
})}
        </div>
        
    </div>
  )
}

export default Main