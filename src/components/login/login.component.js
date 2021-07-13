import {
  TextInput,
  Button,
  FormGroup,
  InlineNotification,
} from "carbon-components-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Authenticate } from "./login.resource";
import "./login.component.css";
import Openmrs from "../../images/Openmrs.png";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Authenticate(username, password).then(({ authenticated }) => {
      authenticated ? history.push("/searchpatient") : setInvalidPassword(true);
      window.sessionStorage.setItem("auth.credentials", authenticated);
    });
  };

  return (
    <div className="login">
      <img className="logo" src={Openmrs} alt="Logo" />
      <form onSubmit={handleSubmit} className="loginForm">
        <FormGroup className="formGroup" legendText="">
          <TextInput
            id="userName"
            labelText="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput.PasswordInput
            showPasswordLabel="Show password"
            hidePasswordLabel="hide password"
            id="password"
            labelText="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <Button
          disabled={password === "" || username === ""}
          type="submit"
          className="loginBtn"
          kind="primary"
        >
          Login
        </Button>
        {invalidPassword && (
          <div>
            <InlineNotification
              kind="error"
              title="Invalid password or Username"
              lowContrast
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
