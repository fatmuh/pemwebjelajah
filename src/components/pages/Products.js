import React from 'react';
import '../../App.css';
import Cards from '../Products';
import Footer from '../Footer';

export default function Products() {
  return (
    <>
    <h1 className='products'>PRODUCTS</h1>
      <Cards />
      <Footer />
    </>
  );
}
