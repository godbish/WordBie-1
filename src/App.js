import React from 'react';

import {Navbar,Header,Header1,Products,Footer} from './containers';
import About from './containers/about/About';
import Form from './wordguessing/Form';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Typing from './typing/App';
import Home from './Quiz/components/Home';
import Dropdown from './Quiz/Dropdown';
import Grammar from './Quiz/grammar/Apps';
import History from './Quiz/history/History';
import English from './Quiz/English/English';
import ScrollButton from './components/backtotop/ScrollButton';

const App = () => {
  

  return (
    
    <Routes>
      
      <Route path='/' element = {
        <div className='App'>
    
        <div className='rect'>
    
          <div className='gradient_bg'>
    
            <Navbar />
            <Header />
          </div>
    
        </div>
        
    
          <Header1 />
          <Products />
          
          <ScrollButton/>

          <Footer />
          <About />
        </div>
      }/>
  
    <Route path='/wordGuessingGame' element = {<Form/>}/>
    <Route path='/typing' element = {<Typing/>}/>
    <Route path='/quiz' element = {<Dropdown/>}/>
    <Route path="/" element={<Home />}></Route>
            <Route path="/quiz/speech" element={<Grammar />}/>
            <Route path="/quiz/vocab" element={<History />}/>
            <Route path="/quiz/preposition" element={<English />}/>
    </Routes>
  )
}

export default App;
