import React from 'react'
import loginLogo from './Openmrs-logo.png'
import View32 from '@carbon/icons-react/es/view/32'
import axios from 'axios'
import './index.css'
import { Button, FormGroup, TextInput } from 'carbon-components-react';

const apiUrl = 'http://10.50.80.115:8090/amrs/ws/rest/v1/';
axios(apiUrl)
    .then((response) => {
        console.log(response)
    })

const InvalidPasswordProps = {
    className: 'some-class',
    id: 'test4',
    labelText: 'Password',
    invalid: true,
    invalidText:
        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};
// fetch(apiUrl,)
//     .then(response => response.json())
//     .then(v1 => 
//         {
//             console.log(v1)
//         });


function Login() {




    return (
        <div className="login">
            <img className="logo" src={loginLogo} alt="ampathLogo" />
            <FormGroup className="formGroup" legendText="">
                <TextInput id="userName" labelText="Username" />
                <TextInput id="password" labelText="Password" type="password" required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    {...InvalidPasswordProps} /> <View32 />
            </FormGroup>

            <Button className="contactAdminBtn" kind="tertiary">Admin </Button>
            <Button className="loginBtn" kind="primary">Login</Button>
        </div>

    )
}
export default Login;