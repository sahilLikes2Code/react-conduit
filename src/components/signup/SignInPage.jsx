import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

function SignInPage() {
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
            <input type="email" placeholder="Email" className="form-input" />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
            />
            <Link to="/login-home" className="txt-dec-none">
              <button type="submit">Sign In</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignInPage;
