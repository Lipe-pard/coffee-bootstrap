import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primeicons/primeicons.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";  
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './routes'

function App() {
  return (
    <Router>
     <Routers />
    </Router>
  );
}

export default App;
