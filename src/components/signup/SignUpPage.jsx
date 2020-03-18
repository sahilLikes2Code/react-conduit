import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const SignUpPage = () => {
  let email = React.useRef(null);
  let username = React.useRef(null);
  let password = React.useRef(null);
  function handleSignup() {
    fetch(`https://conduit.productionready.io/api/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userData => console.log(userData));
  }
  return (
    <>
      <div className="width-1100">
        <Header />
      </div>
      <div className="signup">
        <h1 className="signup-h1">Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            ref={username}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            ref={password}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
