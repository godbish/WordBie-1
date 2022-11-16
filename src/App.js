import React from 'react';

import {Navbar,Header,Header1,Products,Footer} from './containers';

import Form from './wordguessing/Form';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Typing from './typing/App';
import Home from './Quiz/components/Home';
import Dropdown from './Quiz/Dropdown';
import Quiz from './Quiz/App';
import Grammar from './Quiz/grammar/Apps';
import History from './Quiz/history/History';
import English from './Quiz/English/English';
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
          
          
          <Footer />
          
    
        </div>
      }/>
  
    <Route path='/wordGuessingGame' element = {<Form/>}/>
    <Route path='/typing' element = {<Typing/>}/>
    <Route path='/quiz' element = {<Dropdown/>}/>
    <Route path="/" element={<Home />}></Route>
            <Route path="/quiz/grammar" element={<Grammar />}/>
            <Route path="/quiz/history" element={<History />}/>
            <Route path="/quiz/english" element={<English />}/>
    </Routes>
  )
}

export default App;
