import React from 'react';
import Annoucne from '../components/Annoucne';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';

const CategoryPage = () => {
  return <div>  
      <Annoucne/>
      <Navbar/>
      <div className='flex flex-col p-5'>
          <h1 className='text-[30px]'>Men's</h1>
          <div className='flex items-center justify-between mt-3'>
              <div className='flex mobile:flex-col'>
                  <p>Filter by</p> 
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Size</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                  </select>
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Color</option>
                      <option>Yellow</option>
                      <option>Blue</option>
                      <option>Red</option>
                      <option>Green</option>
                  </select>
              </div>
              <div className='flex mobile:flex-col mobile:items-end'>
                  <p>Sort by</p>
              <select className='ml-3 border-2 border-silver'>
                      <option selected >Newest (first)</option>
                      <option>Oldest (first)</option>
                      <option>Price (asc)</option>
                      <option>Price (desc)</option>
                  </select>
              </div>
          </div>
      </div>
      <Products/>
      <NewsLetter/>
      <Footer/>
  </div>;
};

export default CategoryPage;
