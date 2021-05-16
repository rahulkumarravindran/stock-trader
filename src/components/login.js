import { useState } from "react"

const Login = (props) => {

    //local state values
    const [FName,setFName] = useState('')
    const [LName,setLName] = useState('')
    const [Eid,setEid] = useState('')
    const [Password,setPassword] = useState('')
    const [CPassword,setCPassword] = useState('')

    const ToggleLoginFlag = (loginFlag) => {
        if(loginFlag){
            //console.log(props.loginFlag)
        }
        else{
            props.setLoginFlag(!loginFlag)
            //console.log(props.loginFlag)
        }
    }

    const ToggleSignupFlag = (loginFlag) => {
        if(loginFlag){
            props.setLoginFlag(!loginFlag)
            //console.log(props.loginFlag)
        }
        else{
            //console.log(props.loginFlag)
        }
    }

    const ValidatePassword = (password,confirmPassword) => {
        
        if(password!==confirmPassword){
            alert('The password and the confirm password do not match. Please Verify and submit again')
            return false;
        }
        
        return true;
    }

    const onSubmit = (e) => {
       //Prevent the default action of submitting to a page
       e.preventDefault();
       
       //Sign up
       if(!props.loginFlag){ 
           if (ValidatePassword(Password,CPassword)){
       props.AddUserdetails({FName,LName,Eid,Password})
           
       //resetting all the local states after submission
       setFName('');
       setLName('');
       setPassword('');
           }
       }
       else{
        props.onLogin(Eid,Password);
       }
    }


    return (<>
    <div className="LoginContainer">
    <div className="TopDiv">
        <h3 className={props.loginFlag ? 'SelectedTab' : 'UnSelectedTab'} onClick={() => ToggleLoginFlag(props.loginFlag)}>Login</h3>
        <h3 className={props.loginFlag ? 'UnSelectedTab' : 'SelectedTab'} onClick={() => ToggleSignupFlag(props.loginFlag)}>Sign Up</h3>
    </div>
    <div className="BottomDiv">
        <br></br>
        <form onSubmit={onSubmit}> 
            {!props.loginFlag ? <>
            <input type='text' id="FirstName" placeholder="First Name" maxLength="25" onChange={(e)=>setFName(e.target.value)} value={FName} required></input>
            <input type='text' id="LastName" placeholder="Last Name" maxLength="25" onChange={(e)=>setLName(e.target.value)} value={LName} required></input> 
            </> : <></>}
            <input type='text' id="LoginUsername" placeholder="e-Mail address" maxLength="36" onChange={(e)=>setEid(e.target.value)} value={Eid} required></input>
            <input type='password' id='LoginPassword' placeholder='Password' maxLength="25" onChange={(e)=>setPassword(e.target.value)} value={Password} required></input>
            {!props.loginFlag ? <>
            <input type='password' id='ConfirmPassword' placeholder='Confirm Password' maxLength="25" onChange={(e)=>setCPassword(e.target.value)} value={CPassword} required></input>
            </> : <></>}
            <input className='LoginSubmit' type='submit' value={props.loginFlag ? 'Login' : 'Sign Up'}></input>
        </form>
    </div>
    </div>
    </>)
}

export default Login;