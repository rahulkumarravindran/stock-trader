
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Login from './components/Login.js'
import {useState} from 'react'

function App() {
  const [userLoginDetails, setUserLoginDetails] =useState(
    [{id:'1',firstName:'Rahul',lastName:'Ravindran',emailAddress:'rahul@stocktrader.com',password:'Abc@123'},{id:'2',firstName:'Abishek',lastName:'Balu',emailAddress:'abi@stocktrader.com',password:'Abc@123'}]
  );

  const [flagLogin,setLoginFlag] = useState(true);
  //console.log({flagLogin});

  const AddUserdetails = (userDetails) => {
    let id = userLoginDetails.length +1;
    const details = {id: id.toString(),...userDetails};
    //console.log(details)
    setUserLoginDetails([...userLoginDetails,details])
    //console.log(userLoginDetails)

    {<Redirect to="/login" />}
    alert('User has been successfully created')
    setLoginFlag(true)

  }

  const onLogin = (username,password) => {
    const userTemp=userLoginDetails.filter((user)=> user.emailAddress==username);
    console.log(userTemp[0].password)

    if (userTemp.length==0) {
      alert("The username or password is in correct")
    }

    if(userTemp[0].password.localeCompare(password)==0){
      alert("Welcome")
      {<Redirect to="/" />}
    }
    else{
      alert("The username or password is in correct")
    }
  }

  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path='/login'>
        <Login loginFlag={flagLogin} setLoginFlag={setLoginFlag} userLoginDetails={userLoginDetails} AddUserdetails={AddUserdetails} onLogin={onLogin}/>
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
