const Login = (props) => {

    const ToggleLoginFlag = (loginFlag) => {
        if(loginFlag){
            console.log(props.loginFlag)
        }
        else{
            props.setLoginFlag(!loginFlag)
            console.log(props.loginFlag)
        }
    }

    const ToggleSignupFlag = (loginFlag) => {
        if(loginFlag){
            props.setLoginFlag(!loginFlag)
            console.log(props.loginFlag)
        }
        else{
            console.log(props.loginFlag)
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
        <form>
            <input type='text' id="LoginUsername" placeholder="Username"></input>
            <input type='text' id='LoginPassword' placeholder='Password'></input>
            <input className='LoginSubmit' type='submit'></input>
        </form>
    </div>
    </div>
    </>)
}

export default Login;