import React from "react";
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";

const Register = () => {
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row my-4">
        <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="signup-bg"></div>
          <form className="mt-3" action="" method="post">
            <Text
              placeholder="Name of Unit"
              type="text"
              name="name"
              icon="fa fa-user"
            />
            <div class="input-group mb-3 border-bottom">
              <select class="form-control custom-select border-0 ">
                <option>Choose Designation</option>
                <option>Health Workers</option>
                <option>Security Personnels</option>
                <option>Fire Service</option>
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
              <select
                class="form-control custom-select border-0"
                required
                name="stateOfO"
              >
                <option value="">State</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="AkwaIbom">AkwaIbom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="FCT">FCT</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamafara</option>
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

            <Text
              placeholder="City"
              type="text"
              name="city"
              icon="fa fa-map-marker"
            />
            <Text
              placeholder="Geolocation"
              type="text"
              name="geolocation"
              icon="fa fa-map-marker"
            />
            <Text
              placeholder="Emergency Number"
              type="number"
              name="number"
              icon="fa fa-phone"
            />
            <Text
              placeholder="Official Email"
              type="email"
              name="email"
              icon="fa fa-envelope"
            />
            <Text
              placeholder="Password"
              type="password"
              name="paassword1"
              icon="fa fa-lock"
            />
            <Text
              placeholder="Re-enter password"
              type="password"
              name="paassword2"
              icon="fa fa-lock"
            />

            <Link
              question="Already Registered? "
              link="Login"
              linkTo="/login"
            />
          </form>
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Register;
