import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Context from './context';
import {useState, useEffect} from 'react'
import Header from './components/navbar/navbar';


function App() {
  const [lightMode, setLightMode] = useState(true)
  // useEffect(()=>{
  //   !lightMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  // }, [lightMode])
  return (
    <div className="App" dark-theme = {localStorage.getItem('theme')}>
      <Context.Provider value={{lightMode, setLightMode}}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>

        </Router>
      </Context.Provider>

    </div>
  );
}

export default App;
