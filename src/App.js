import React from 'react';

import {Navbar,Header,Header1,Products,Footer} from './containers';
import {Rectangle,Cylinder,Pentagon,Circle,Polygon} from './components';
import Form from './wordguessing/Form';
import './App.css';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      
      <Route path='/' element = {
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
      }/>
  
    <Route path='/wordGuessingGame' element = {<Form/>}/>
    </Routes>
  )
}

export default App;
