import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
