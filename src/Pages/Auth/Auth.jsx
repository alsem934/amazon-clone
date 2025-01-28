import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Signup.module.css'
import {auth} from '../../Utility/firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import { Type } from '../../Utility/action.type'
import {DataContext} from '../../Component/DataProvider/DataProvider'
import {ClipLoader} from "react-spinners"
function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });
// console.log(password,email);


const {state, dispatch}= useContext(DataContext);
  
 const {user} = state;
 const navigate = useNavigate()
console.log(user)


const authHandler = (e)=>{
  e.preventDefault();


  // console.log(e.currentTarget.name)
  if (e.currentTarget.name=== "signin") {

    // firebase
    setLoading({ ...loading, signIn: true }); 
    signInWithEmailAndPassword(auth, email, password)
    .then((userInfo)=>{
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      })
      console.log(userInfo)
    })
    .catch((err)=> {
  switch (err.code) {
    case "auth/invalid-email":
      setError("Invalid email address. Please try again.");
      break;
    case "auth/wrong-password":
      setError("Incorrect password. Please try again.");
      break;
    default:
      setError("Something went wrong. Please try again.");
  }
      setLoading({ ...loading, signIn: false }); 
      navigate ("/")
    })
  } else{
    setLoading({ ...loading, signUP: true });
        createUserWithEmailAndPassword(auth, email, password)
.then((userInfo)=>{
dispatch({
  type: Type.SET_USER,
  user: userInfo.user,
})

  console.log("Sign Up Successful:", userInfo);
}) .catch((err)=>{
  setError(err.message)
  navigate ("/")
     setLoading({ ...loading, signUP: false });
})
  }
};


  return (

    <section className={classes.login}>
        {/* logo */}
        <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/*form*/ }
      <div className={classes.login__container}>
      <h1>Sign In</h1>
      <form action=""> 
        <div>
        <label htmlFor="email">Email</label>
        <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
           
          </div>
          <div>
        <label htmlFor="password">Password</label>
        <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
           
          </div>
          <button
            type="submit"
            onClick
            ={authHandler}
            name='signin'
            className={classes.login__signInButton}
          > 
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " SignIn"
            )}
          </button>
        
          </form>
{/*agreement*/}
          <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

  {/* create account btn */}
  <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        > 
        
          {loading.signUP ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  )
}

export default Auth
