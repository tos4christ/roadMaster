import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ls from 'local-storage';
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";

const UserLogin = () => {
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const changeEmail = (email) => {
    setEmail(email);
  }
  const changePassword = (password) => {
    setPassword(password);
  }

  const handleSubmission = (e) => {
    e.preventDefault();
    const url = "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/signin";
    const data = {email, password};
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( res => res.json())
    .then( response => {
      console.log(response);
      ls.set('userId', response.data.userId)
      history.push('/dashboard');
    })
    .catch( error => console.error(error.message))
  }

  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row mt-4">
        <div className="col-sm-3 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="login-bg"></div>
          <form className="mt-3" onSubmit={handleSubmission} autoComplete="on">
            <Text
              type={"email"}
              placeholder={"User Email"}
              name={"email"}
              icon={"fa fa-envelope"}
              nameChange={ changeEmail }
            />
            <Text
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              icon={"fa fa-lock"}
              nameChange={ changePassword }
            />
            <Link
              question="Not Registered? "
              link="Signup"
              linkTo="/user-register"
            />
            <Button 
            text={"Login"}
            onClick={ () => console.log(true)}
             />
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

export default UserLogin;