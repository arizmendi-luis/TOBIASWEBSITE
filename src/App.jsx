import './App.css'; 
import Navbar from "./components/NavigationBars/Sidebar"; 
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';  
import Home from "./Routes/Home"
import {ModeContextProvider} from './components/Context/ModeContext';

function App() {
  return (  
    <ModeContextProvider>
      <Router>   
        <Navbar/>  
        <Routes> 
          <Route path = "/"  element={<Home/>}/> 
          <Route path = "/home"  element={<Home/>}/> 
        </Routes>
      </Router> 
    </ModeContextProvider> 
  );
}

export default App;