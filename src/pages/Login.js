import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";
import socket from "../utility/socketioConnection";

const Login = () => {
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const changeEmail = (email) => {
    setEmail(email);
    localStorage.setItem('responseSocketEmail', email);
  }
  const changePassword = (password) => {
    setPassword(password);
    localStorage.setItem('responseSocketPassword', password);
  }
  const handleSubmission = (e) => {
    e.preventDefault();
    const url = "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/responder/signin";
    if(email === "") {
      return;
    }
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
      console.log(response.data.responderName, 'this responder')
      localStorage.setItem('nameOfUnit', response.data.responderName);
      socket.emit('responderSignin', {nameOfUnit: response.data.responderName});
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
              placeholder={"Official Email"}
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
              linkTo="/register"
            />
            <Button
            id=''
            text={"Login"}
            onClick={ () => 'done'}
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

export default Login;
