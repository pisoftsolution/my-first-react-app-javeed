import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body shadow-lg">
                <div class="image">
                  <a href="https://pisoftsolution.com/login">
                    <img src="https://pisoftsolution.com/media/04062021183428-logo_-_Copy-removebg-preview1.png"></img>
                  </a>
                </div>
                <div class="form">

                  <div class="form-group mb-2">
                    <input type="email" id="email" name="email" class="form-control" placeholder="Email Address"></input>
                  </div>
                  
                  <div class="form-group mb-2" >
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password"></input>
                  </div>
                  
                  <div class="tw_checkbox checkbox_group mb-4 mt-4">
                    <input id="remember" name="remember" type="checkbox" ></input>
                    <label for="remember">Remember me</label>
                  </div>

                  <div class="d-grid gap-2">
                    <button class="btn nn" type="button">Login</button>
                  </div>

                  <div class="lastone">
                    <h3><a href="https://pisoftsolution.com/password/reset">Forgot your password?</a></h3>
                    <h3><a href="https://pisoftsolution.com/register">Sign up for an account</a></h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
