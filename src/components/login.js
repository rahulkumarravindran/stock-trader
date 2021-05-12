const login = (props) => {
    return (<>
    <h1>Login page</h1>
    <div className="LoginContainer">
    <div className="TopDiv">
        <h3>Login</h3>
        <h3>Sign Up</h3>
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

export default login;