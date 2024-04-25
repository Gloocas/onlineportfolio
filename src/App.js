import logo from './images/logo.svg';
import { useState, useEffect } from 'react'; 
import './App.css'
import  { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'
import { Skills } from './components/Skills.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [ImageUpdating, setUpdating] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <Banner ImageUpdating={ImageUpdating}/>
      <Skills ImageUpdating={ImageUpdating} setUpdating={setUpdating}/>
    </div>
  );
}

export default App;
