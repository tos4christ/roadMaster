import React from "react";
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";
const Login = () => {
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row mt-4">
        <div className="col-sm-3 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="login-bg"></div>
          <form className="mt-3" action="" method="post">
            <Text
              type={"email"}
              placeholder={"Official Email"}
              name={"email"}
              icon={"fa fa-envelope"}
            />
            <Text
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              icon={"fa fa-lock"}
            />
            <Link
              question="Not Registered? "
              link="Signup"
              linkTo="/register"
            />
            <Button text={"Login"} />
          </form>
        </div>
      </div>
      <div className="mx-auto mt-2" style={{width: 200}}>

        <a href="/dashboard" className="btn btn-info btn-block active">
          Login as guest
      </a>
      </div>
    </div>
  );
};

export default Login;
