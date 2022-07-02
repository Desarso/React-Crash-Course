import React from 'react'

const LoginInputs = () => {
  return (
    <div className='loginInputs'>
        <div className="form-control-sm">
            <input type="email" className="form-control" id="floatingInput" placeholder="email"/>
        </div>


        <div className="form-control-sm">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        </div> 
    </div>
  )
}

export default LoginInputs