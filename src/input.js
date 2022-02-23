import React from "react"
import "./input.css"
import LogIn from "./logins"

function SignIn(props){
    console.log(props.currentTheme)
    const [formState, setFormState]= React.useState('signin');
    function handleClick(){
      setFormState((prevState)=> prevState === "signup"? 'signin':'signup')
    }
    

return <div>
 <div class={`login-box ${props.currentTheme === "white" ? "black" : "white"}`} style={{ backgroundColor: props.currentTheme === "white" ? "white" : "black"}}>
 
 <h2>{formState === 'signin' ? "Sign In" : "Sign Up"}</h2>
 <form>
   <div class="user-box">
     <input type="text" name="" required="Username"/>
     <label>Username</label>
   </div>
   <div class="user-box">
     <input type="password" name="" required="password"/>
     <label>Password</label>
   </div>
   {formState === 'signup' && <div class="user-box">
     <input type="password" name="" required="password"/>
     <label>Confirm Password</label>
   </div>}
     
   <a href="#">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     Submit
   </a>
   <div className="jans">
   <span className="reds">{formState === 'signin' ? "Don't" : "Already"} have an account?</span> <button className="blacks" onClick={handleClick}>Sign up</button> 
   </div>
 </form>
</div>
</div>
}
export default SignIn

/////////////////////////////////////////

// import React from "react"
// import "./input.css"
// import LogIn from "./logins"

// function SignIn(){
    
//     const [formState, setFormState]= React.useState('signin');
    

// return <div>
// {formState === 'signin' && <div class="login-box">
 
//  <h2>Sign In</h2>
//  <form>
//    <div class="user-box">
//      <input type="text" name="" required="Username"/>
//      <label>Username</label>
//    </div>
//    <div class="user-box">
//      <input type="password" name="" required="password"/>
//      <label>Password</label>
//    </div>
     
//    <a href="#">
//      <span></span>
//      <span></span>
//      <span></span>
//      <span></span>
//      Submit
//    </a>
//    <div className="jans">
//    <span className="reds">Don't have an account?</span> <button className="blacks" onClick={() => setFormState('signup')}>Sign up</button> 
//    </div>
//  </form>
// </div>}
// {
//  formState === 'signup' && <div class="login-box">
 
//  <h2>Sign Up</h2>
//  <form>
//    <div class="user-box">
//      <input type="text" name="" required="Username"/>
//      <label>Username</label>
//    </div>
//    <div class="user-box">
//      <input type="password" name="" required="password"/>
//      <label>Password</label>
//    </div>
   
//     <div class="user-box">
//     <input type="password" name="" required="password"/>
//     <label> Confirm Password</label>
//     </div>
     
     
   
//    <a href="#">
//      <span></span>
//      <span></span>
//      <span></span>
//      <span></span>
//      Submit
//    </a>
//    <div className="jans">
//    <span className="reds">Already have an account?</span> <button className="blacks" onClick={() => setFormState('signin')}>Signin</button> 
//    </div>
//  </form>

// </div>
// }
// </div>
// }
// export default SignIn