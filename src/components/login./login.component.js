import { TextInput, Button, FormGroup } from "carbon-components-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Authenticate } from "./login.resource";
import './login.component.css'

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/searchpatient")
    Authenticate(username, password).then(({ authenticated }) => {
      authenticated ? history.push("/searchpatient") : setInvalidPassword(true);
      window.sessionStorage.setItem('auth.credentials', authenticated);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup className="formGroup" legendText="">
          <TextInput
            id="userName"
            labelText="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            id="password"
            labelText="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <Button type="submit" className="loginBtn" kind="primary">
          Login
        </Button>
        {invalidPassword && <p>invalid Password or Username </p>}
      </form>
    </div>
  );
}

export default Login;
