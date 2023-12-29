import { Link } from "react-router-dom";
const Form = () => {
    return (
        <> 
         <div className="form">
            <form action="">
                <h1>Create An Account</h1>
                <label htmlFor="">First Name</label>
                <input type="text" name="" id="" placeholder="Enter your first name" />
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" placeholder="Enter your last name"/>
                <label htmlFor="">Email Address</label>
                <input type="email" name="" id="" placeholder="Enter email address"/>
                <label htmlFor="">Phone Number</label>
                <input type="number" name="" id="" placeholder="Enter Phone Number" />
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder="Enter your password"/>
                <button id="create"> <h4> Creat an Account </h4></button>
                <p>By signing up you accept our terms and condition & privacy policy</p>
                <p>Already have and account?</p>
                <Link to="/login" className="link">Login</Link>
                {/* <button id="login" type="button"><h4> <a href="/Login"> </a></h4></button> */}
            </form>
         </div>
        </>
    )
}

export default Form;