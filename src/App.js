import React from 'react';

import {Navbar,Header,Header1,Products,Rectangle,Footer} from './containers';
import {Cylinder,Pentagon,Circle,Polygon,Title} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <div className='rect'>
      <div className='gradient_bg'> 
        <Navbar />
        <Header />    
      </div>
  </div>
      <Header1 />
      <Products />
      <Rectangle />
      <Title />
      <Footer />
      

    </div>
  )
}

export default App;
