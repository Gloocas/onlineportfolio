import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      yo
   <Router>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/projects" element ={<Projects />}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
