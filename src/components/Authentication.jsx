import {useState } from "react";
import { useAuth } from "../Context/AuthContext";
import '/src/global.css'

function Authentication({handleCloseModal}) {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error,setError] = useState(null);

  const { signup, login } = useAuth();

  async function handleAuthenticate() {
    if (!email || !email.includes("@") || !password || password.length < 8 || isAuthenticating) {
      return;
    }

    try {
      setIsAuthenticating(true);
      setError(null);

      if (isRegistration) {
        await signup(email,password)
      } else {
        await login (email,password);
      }

     handleCloseModal();
    } catch (err) {
      setError(err.message)
    } finally {
      setIsAuthenticating(false); 
    }
  }

  return (
    <div className="separate">
      <h2 className="sign-up-text">{isRegistration ? "Sign up" : "Login"}</h2>
      <p>{`${isRegistration ? "Sign up" : "Login"} to your account`}</p>
      {error && (
        <p id="error"> Email and/or password are wrong! </p>
      )}
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="*******"
      />
      <button onClick={handleAuthenticate}>
        {isAuthenticating ? "Authenticating..." : isRegistration  ? "Register" : "Login"}
      </button>
      <hr />
      <div className="register-content">
        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button onClick={() => setIsRegistration(!isRegistration)}>
          {" "}
          {!isRegistration ? "Sign up" : "Login"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Authentication;
