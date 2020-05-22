import React from "react";

const Login = () => {
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row mt-4">
        <div className="col-sm-3 mx-auto mt-4 pt-4 bg-white shadow">
          <div className='login-bg'></div>
          <form className="mt-3" action="" method="post">
            
            <div class="input-group mb-3 border-bottom">
              <input
                className="form-control border-0"
                placeholder="Official email"
                type="email"
                name="city"
                id=""
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-envelope"></span>
                </span>
              </div>
            </div>
            <div class="input-group mb-3 border-bottom">
              <input
                className="form-control border-0"
                placeholder="Password"
                type="password"
                name="city"
                id=""
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-lock"></span>
                </span>
              </div>
            </div>
            
            <div className='d-flex'>
              <p>Not Registered? <a href='/register' className='text-primary '>Signup</a></p>
              <a href="/" className='text-success ml-auto'>Back to home page</a>
            </div>
            
          </form>
            <div className='lower-btn'>
            <button className="btn btn-r mb-0 bg-success text-light px-4 py-2" type="submit">
              Login
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
