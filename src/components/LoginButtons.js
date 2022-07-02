import React from 'react'

const LoginButtons = () => {
  return (
    <div className="loginButtons">
        <span>
            <button type="button" className="btn orange-button" id="log-in">Login</button>
            <div className="horizontal-spacer"></div>
            <button type="button" className="btn btn-link" id="sign-up">Sign Up</button>
        </span>
    </div>
  )
}

export default LoginButtons