import { useRef, useState } from "react";

export default function LoginForm({
  registeredUser,
  setIsLoggedIn
}) {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {

      setMessage("Login Successful");

      setIsLoggedIn(true);

    } else {

      setMessage("Invalid Email or Password");
    }
  };

  return (

    <div className="card">

      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Registered Email"
          ref={emailRef}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Registered Password"
          ref={passwordRef}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>{message}</p>

    </div>
  );
}