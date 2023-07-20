import React from 'react';
import './App.css';
import Pincode from './fragments/Pincode'
import AllCategories from './fragments/AllCategories';
import Carousel from './fragments/Carousel';
import { Link } from 'react-router-dom';

import groupBuy from './images/groupBuyImg.png';

export default function App() {
  return (
    <>
      <Pincode />
      <div className='all-categories pt-2  flex overflow-scroll gap-3'>
        <AllCategories />
      </div>
      <Carousel/>
      <Link to={'/groupBuy'}>
        <img src={groupBuy} alt='groupBuy' />
      </Link>
    </>
  )
}
