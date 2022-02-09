import React from 'react';
import Annoucne from '../components/Annoucne';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';
const Home = () => {
  return <div>
      <Annoucne/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
  </div>;
};

export default Home;
