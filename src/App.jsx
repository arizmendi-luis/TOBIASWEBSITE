import './App.css'; 
import Navbar from "./components/NavigationBars/Sidebar"; 
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';  
import Home from "./Routes/Home"
import HorizontalNav from './components/NavigationBars/HorizontalNav';


function App() {
  return ( 
      <Router>  
        <Navbar/> 
        <Routes> 
          <Route path = "/"  element={<Home/>}/> 
          <Route path = "/home"  element={<Home/>}/> 
        </Routes>
      </Router> 
  );
}

export default App;