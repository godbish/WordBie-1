import React from 'react';

import {Navbar,Header,Header1,Products,Footer} from './containers';
import {Rectangle,Cylinder,Pentagon,Circle,Polygon} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <div className='rect'>
      <div className='gradient_bg'>
        <Rectangle></Rectangle>
        <Navbar />
        <Header />
        
        
        
      </div>
    </div>
      <Header1 />
      <Products />
      <Cylinder />
      <Pentagon />
      <Circle />
      <Footer />
      <Polygon />

    </div>
  )
}

export default App;
