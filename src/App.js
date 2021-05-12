
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import login from './components/login.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/login' component= {login} />
    </div>
    </Router>
  );
}

export default App;
