
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login.js'
import {useState} from 'react'

function App() {
  const [flagLogin,setLoginFlag] = useState(true);
  console.log({flagLogin});

  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path='/login'>
        <Login loginFlag={flagLogin} setLoginFlag={setLoginFlag}/>
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
