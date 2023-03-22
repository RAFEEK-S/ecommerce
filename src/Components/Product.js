import React from 'react'


function Items(props) {
   
  return (
    <div className='col-4 mt-5'>
        <img className='small' src={props.Items.image} alt={props.Items.name}></img>
        <h3>{props.Items.name}</h3>
        <div>${props.Items.price}</div>
        <div>
            <button onClick={()=>props.onAdd(props.Items)}> Add to Cart</button>        
        </div>
    </div>
  )
}

export default Items