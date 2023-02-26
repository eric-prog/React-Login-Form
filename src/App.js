// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import SignInInputs from "./signInOptions/signInInputs";
import SignUpInputs from "./signInOptions/signUpInputs";


function App() {
  const [isSignIn, setIsSignIn] = useState(true)
  const [userInfo, setUserInfo] = useState("")

  const handleSignIn = (signInBool) => {
    setIsSignIn(signInBool)
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({...userInfo, [name]: value})
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  const returnInputs = () => {
    if (isSignIn) {
      return (      
        <SignInInputs 
          handleOnChange={handleOnChange}
        >
          <button type="submit">Sign In</button>
          <div>
            <p>Don't have an account?</p>
            <button onClick={() => handleSignIn(false)}>Sign Up</button>
          </div>
        </SignInInputs>
      )
    }
    if (!isSignIn) {
      return  (
        <SignUpInputs
          handleOnChange={handleOnChange}
        >
           <button type="submit">Sign Up</button>
           <div>
              <p>Already have an account?</p>
              <button onClick={() => handleSignIn(true)}>Sign in</button>
           </div>
        </SignUpInputs>
      )
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        { returnInputs() }
      </form>
    </div>
  );
}

export default App;
