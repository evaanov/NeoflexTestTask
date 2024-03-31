import './App.css';
import Cart from './component/Cart';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Headphone } from './lib/headphones';
import { headphones, wirelessHeadphones } from './lib/headphones';


interface CartEl { 
  img: string,
  title: string,
  price: number,
  rate: number,
  count: number
}


function App() {
  const [hp, setHp] = useState<Headphone[]>([])
  const [wirelessHp, setWireless] = useState<Headphone[]>([])
  const [likesList, setLikedList] = useState<Headphone[]>([])
  const [cartList, setCart] = useState<Headphone[]>([])

  useEffect(() => { 
    setHp(headphones)
    setWireless(wirelessHeadphones)
  }, [])


  const handleClick = (hp: Headphone) => { 
    const prevCartState = cartList
    prevCartState.push(hp)
    setCart(prevCartState)
  }


  
  return (
    <Routes>
      <Route path="/" element={<Home hp={hp} wirelessHp={wirelessHp} handleClick={handleClick} />}/>
      <Route path="/Cart" element={<Cart cartList={cartList}/>}/>
    </Routes>
  );
}

export default App;
