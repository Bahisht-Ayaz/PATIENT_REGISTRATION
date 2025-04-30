import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './Components/Register';
import ShowData from './Components/ShowData';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/s' element={<ShowData/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
