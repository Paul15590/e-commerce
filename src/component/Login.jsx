
const Login = () => {
    return(
        <>
         <div className="login">
            <form action="" className="login">
               <h1>Login</h1>
               <label htmlFor="">Email Address or phone Number</label>
               <input type="text" placeholder="Enter Email Address or phone Number" />
               <label htmlFor="">Password</label>
               <input type="password" name="" id=""  placeholder="Enter poassword"/>
               <button id="login"> <h4> Login</h4></button>
               <p> <a href="/"> Forgot Password</a></p>
               <p>Don't have an Account </p>
               <button id="create"><h4>  <a href="/Form"> Create an Account</a></h4></button>
            </form>
         </div>
        </>
    )
}

export default Login;