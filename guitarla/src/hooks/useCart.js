import { useState, useEffect } from 'react'
import {db} from "../data/db";

export const useCart = () => {

    // const auth = true;
    // const carrito = [];

    const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }


  //use State
  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;
  
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  function addToCart(item){
    const itemExists = cart.findIndex((guitar =>{ guitar.id === item.id}));
    if(itemExists >= 0){ //existe en el carrito
      if(cart[itemExists].quantity >= MAX_ITEMS) return 
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    }else {
      item.quantity = 1
      setCart([...cart, item])
    }    
    
  }

  function removeFromCart(id){
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))

  }

  function increaseQuantity(id){
    const updatedCart = cart.map( item => {
      if( item.id === id && item.quantity < MAX_ITEMS ){
        return {
          ...item,
        quantity: item.quantity +1
        }

      }
      return item
    })
    setCart(updatedCart);
  }

  function decreaseQuantity(id){
    const updatedCartDecrease = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS){
        return{
          ...item,
          quantity: item.quantity -1
        }
      }
      return item
    })
    setCart(updatedCartDecrease);
  }

  function clearCart(){
    setCart([])
  }

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart
    }
}

