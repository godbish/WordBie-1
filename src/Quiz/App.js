import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Page404 from './components/Page404'
import Grammar from './grammar/Apps'
import History from './history/History'
import English from './English/English'
import Dropdown from './Dropdown'

function Quiz() {
  return (
    <div className="App">
      
        <NavBar />
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/quiz/grammar" element={<Grammar />}/>
            <Route path="/quiz/history" element={<History />}/>
            <Route path="/quiz/english" element={<English />}/>
            <Route path="/quiz" element={<Dropdown />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
            {/*<Route path="/*" element={<Navigate to ="/link" />}></Route>*/}
          </Routes>
        </>
    
    </div>
  )
}

export default Quiz
