import React from 'react'
import Data from './Data'

function Basket(props) {
  const itemsPrice = props.cartItems.reduce((a , c)=> a+ c.price * c.qty ,0)
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 100 ? 50:0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    
    <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>{props.cartItems.length === 0 &&  <div>Cart is empty</div>}</div>
        {props.cartItems.map((porul ,i)=> 
        <div key = {i} className='row'>
          <div className='col-1'>{porul.name}</div>
          <div className='col-3'>
            <button onClick={()=>props.onAdd(porul)} className='Add'>+</button> 
            <button onClick={()=>props.onRemove(porul)} className='onremove'>-</button>
          </div>
          <div className='col-3'>
            {porul.qty} * {porul.price}
          </div>
        </div>
        )}
        {props.cartItems.length !== 0 && (
          <>
          <hr></hr>
          <div className='row'>
            <div className='col-2'> Items Price</div>
            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>

          </div>
          <div className='row'>
            <div className='col-2'> tax Price</div>
            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>

          </div>
          <div className='row'>
            <div className='col-2'> shipping Price</div>
            <div className='col-1 text-right'>${shippingPrice .toFixed(2)}</div>

          </div>
          <hr></hr>
          <div className='row'>
            <div className='col-2'><strong>total price</strong></div>
            <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>

          </div>
          
          </>
        )}
        
    </aside>
    
  )
}

export default Basket