import  Alert  from "./Components/Alert";
import {
  BrowserRouter as Router,Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';



function App() {

  return (
 <Router>
 <div className="App">
   <Header />
   <Routes>
   <Route exact path="/" element={<Homepage/>}/>
   <Route path="/coins/:id" element={<CoinPage/>} />
   </Routes>
 </div>
 <Alert/>
 </Router>
  );
}

export default App;
