import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

function SignUpPage() {
  return (
    <>
      <div className="width-1100">
        <Header />
      </div>
      <div className="signup">
        <h1 className="signup-h1">Sign Up</h1>
        <div>
          <form action="">
            <input type="text" placeholder="Username" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
