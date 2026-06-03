import { useRef, useState } from "react";

export default function RegistrationForm({ setRegisteredUser }) {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = (e) => {

    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!emailRegex.test(email)) {

      setMessage("Invalid Email Format");
      return;
    }

    if (!passwordRegex.test(password)) {

      setMessage(
        "Password must contain uppercase, lowercase, number and special character"
      );

      return;
    }

    // Store registered user
    setRegisteredUser({ email, password });

    setMessage("Registration Successful");
  };

  return (

    <div className="card">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      <p>{message}</p>

    </div>
  );
}