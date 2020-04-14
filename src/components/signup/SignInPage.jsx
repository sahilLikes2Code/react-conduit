import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link, withRouter } from "react-router-dom";

function SignInPage(props) {
  let email = React.useRef(null);
  let password = React.useRef(null);
  // console.log(email);?
  // console.log(password);

  function handleLogin() {
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email.current.value,
          password: password.current.value,
        },
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        if (userInfo.errors) {
          // localStorage.setItem("isLoggedIn", false);
          console.log(userInfo, "errrorr");
        } else {
          localStorage.setItem("conduit-token", userInfo.user.token);
          // sessionStorage.setItem("conduit-token", userInfo.user.token);
          props.history.push("/login-home");
          props.updateIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="width-1100">
        <Header />
      </div>
      <div className="signup">
        <h1 className="signup-h1">Sign In</h1>
        <Link to="/signup" className="txt-dec-none">
          <p>Need an account?</p>
        </Link>

        <div>
          <form action="">
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
            <Link className="txt-dec-none">
              <button type="submit" onClick={handleLogin}>
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(SignInPage);
