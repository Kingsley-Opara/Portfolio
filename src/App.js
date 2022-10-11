import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Context from './context';
import {useState, useEffect} from 'react'


function App() {
  const [lightMode, setLightMode] = useState(localStorage.getItem('theme') === 'dark' ? 
  false : localStorage.getItem('theme') === 'dark' ? true : false )
  // useEffect(()=>{
  //   !lightMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  // }, [lightMode])
  return (
    <div className="App" dark-theme = {localStorage.getItem('theme')}>
      <Context.Provider value={{lightMode, setLightMode}}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>

        </Router>
      </Context.Provider>

    </div>
  );
}

export default App;
