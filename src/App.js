import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPatient from "./components/PatientRegistration/patientRegistration.component";
import { NotFound } from "./components/navigation/notFound.component";
import PatientSearch from "./components/dashboard/patientSearch/patientSearch.component";
import Login from "./components/login./login.component";
import Navbar from './components/navigation/navbar.component'

import { useEffect, useState } from "react";


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const authKey = window.sessionStorage.getItem("auth.credentials");
  // window.addEventListener("storage", () => console.log("storage Changed"));
  useEffect(() => {
    setIsLoggedin(authKey);
  }, [authKey]);
  // console.log(authKey);
 
  return (
    <BrowserRouter>
        <Route path="*" component={Navbar}/>
        <Route path="/" component={Login} exact />
        <Route path="/searchpatient" component={PatientSearch} exact />
        <Route path="/addpatient" component={AddPatient} exact />
        {/* <Route component={NotFound} exact /> */}
      
    </BrowserRouter>
  );
}
export default App;
