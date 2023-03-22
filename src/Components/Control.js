import React from 'react'
import Basket from './Basket'
import Main from './Main'
import Thala from './Thala'
import { useState } from "react";

function Control() {
    
    const Data={
    products:[
        {
            id:1,
            name:'apple',
            price:'150',
            image:'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg'

        },
        {
            id:2,
            name:'orange',
            price:'150',
            image:'https://www.shutterstock.com/image-photo/orange-fruit-slices-leaves-isolated-260nw-1386912362.jpg'

        },
        {
            id:3,
            name:'strawberry',
            price:'200',
            image:'https://www.shutterstock.com/image-photo/strawberry-isolated-strawberries-isolate-whole-260nw-1750959335.jpg'

        },

        {
            id:4,
            name:'pineapple',
            price:'50',
            image:'https://www.shutterstock.com/image-photo/whole-pineapple-slice-leaves-isolate-260nw-1403484713.jpg'

        },
        {
            id:5,
            name:'kiwi',
            price:'80',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI5kQ5kfwEdeBu3F3p-RX-a8fNLdcOPFXWQ&usqp=CAU'

        },
        {
            id:6,
            name:'grapes',
            price:'100',
            image:'https://www.shutterstock.com/image-photo/green-grape-leaves-isolated-on-260nw-533487490.jpg'

        }
    ]
    }

   

    const[cartItems, setCartItems] = useState([])

    const onAdd = (products) => {
        const exist = cartItems.find((x) => x.id === products.id);

        

        if (exist){
            setCartItems(cartItems.map((x) => 
                x.id === products.id ? {...exist,qty: exist.qty + 1}: x
                ))
        }else {
            setCartItems([...cartItems, {...products, qty:1}])
        }
    };
   
    const onRemove = (products) =>{
        const exist = cartItems.find((x) => x.id === products.id)
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== products.id))
        }else {
            setCartItems(cartItems.map((x) => 
                x.id === products.id ? {...exist,qty: exist.qty - 1}: x
                ))
        }
    }
    
  return (
    <div className='APP'>
        <Thala></Thala>
        <div className='row'>
            <Main onAdd = {onAdd} products= {Data.products}></Main>
            <Basket onAdd = {onAdd} onRemove = {onRemove} cartItems = {cartItems}></Basket>
        </div>
        </div>
  )
}

export default Control