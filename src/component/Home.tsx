import React, { useEffect, useState } from 'react';
import { FC } from "react"
import '../App.css';
import Card from '../component/Card';
import { Headphone, headphones, wirelessHeadphones } from '../lib/headphones';
import Header from '../component/Header';
import Footer from '../component/Footer';

interface HomeProps { 
  hp: Headphone[];
  wirelessHp: Headphone[];
  handleClick: (hp: Headphone) => any;
}


const Home: FC<HomeProps> = ({ hp, wirelessHp, handleClick }) => {
  return (
    <div className='app'>
      <Header />
      <div className='headphones'>
        <p className='incardText'>Наушники</p> 
        {hp.map((el: Headphone, id: number) => <Card clickHandler={handleClick} key={id} hp={el}/>)}
      </div>
      <div className='wheadphones'>
        <p className='incardText'>Беспроводные наушники</p> 
        {wirelessHp.map((el: Headphone, id: number) => <Card clickHandler={handleClick} key={id} hp={el}/>)}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
