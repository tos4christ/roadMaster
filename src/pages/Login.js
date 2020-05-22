import React from "react";
import signupHead from "../assets/img/signup-head.JPG";

const Login = () => {
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row mt-4">
        <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
          <img src={signupHead} alt="banner" className="signup-head" />
          <form className="mt-3" action="" method="post">
            <div class="input-group mb-3 border-bottom">
              <select class="form-control custom-select border-0 ">
                <option>Choose Designation</option>
                <option>Health Workers</option>
                <option>Security Personnels</option>
              </select>
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-newspaper-o"></span>
                </span>
              </div>
            </div>

            <div class="input-group mb-3 border-bottom">
              <select class="form-control custom-select border-0" required name="stateOfO">
                <option value="">State</option>
                <option value='Abia'>Abia</option>
                <option value='Adamawa'>Adamawa</option>
                <option value='AkwaIbom'>AkwaIbom</option>
                <option value='Anambra'>Anambra</option>
                <option value='Bauchi'>Bauchi</option>
                <option value='Bayelsa'>Bayelsa</option>
                <option value='Benue'>Benue</option>
                <option value='Borno'>Borno</option>
                <option value='Cross River'>Cross River</option>
                <option value='Delta'>Delta</option>
                <option value='Ebonyi'>Ebonyi</option>
                <option value='Edo'>Edo</option>
                <option value='Ekiti'>Ekiti</option>
                <option value='Enugu'>Enugu</option>
                <option value='FCT'>FCT</option>
                <option value='Gombe'>Gombe</option>
                <option value='Imo'>Imo</option>
                <option value='Jigawa'>Jigawa</option>
                <option value='Kaduna'>Kaduna</option>
                <option value='Kano'>Kano</option>
                <option value='Katsina'>Katsina</option>
                <option value='Kebbi'>Kebbi</option>
                <option value='Kogi'>Kogi</option>
                <option value='Kwara'>Kwara</option>
                <option value='Lagos'>Lagos</option>
                <option value='Nasarawa'>Nasarawa</option>
                <option value='Niger'>Niger</option>
                <option value='Ogun'>Ogun</option>
                <option value='Ondo'>Ondo</option>
                <option value='Osun'>Osun</option>
                <option value='Oyo'>Oyo</option>
                <option value='Plateau'>Plateau</option>
                <option value='Rivers'>Rivers</option>
                <option value='Sokoto'>Sokoto</option>
                <option value='Taraba'>Taraba</option>
                <option value='Yobe'>Yobe</option>
                <option value='Zamfara'>Zamafara</option>
              </select>
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-university"></span>
                </span>
              </div>
            </div>
            <div class="input-group mb-3 border-bottom">
              <input
                className="form-control border-0"
                placeholder="City"
                type="text"
                name="city"
                id=""
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-map-marker"></span>
                </span>
              </div>
            </div>
            <div class="input-group mb-3 border-bottom">
              <input
                className="form-control border-0"
                placeholder="Emergency Number"
                type="text"
                name="number"
                id=""
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-phone"></span>
                </span>
              </div>
            </div>
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
            <div class="input-group mb-3 border-bottom">
              <input
                className="form-control border-0"
                placeholder="Re-enter password"
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
            
          </form>
            <div className='lower-btn'>
            <button className="btn btn-r mb-0 bg-success text-light px-4 py-2" type="submit">
              Submit
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
