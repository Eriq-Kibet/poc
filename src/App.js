import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPatient from "./components/dashboard/addPatient/addPatient.component";
import { NotFound } from "./components/dashboard/navigation/notFound.component";
import PatientSearch from "./components/dashboard/searchPatient/searchPatient.component";
import Login from "./components/login./login.component";

import { useEffect, useState } from "react";

// import PatientSearch from "./components/dashboard/searchPatient/searchPatient.component";
// import { Switch } from "carbon-components-react";
// import DisplayPatient from "./components/dashboard/displayPatient/displayPatient.component";
// import AddPatient from "./components/dashboard/addPatient/addPatient.component";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const authKey = window.sessionStorage.getItem("auth.credentials");
  window.addEventListener("storage", () => console.log("storage Changed"));
  // useEffect(() => {
  //   setIsLoggedin(authKey);
  // }, [authKey]);
  // console.log(authKey);
  // if (!isLoggedin){
  //   return <Login setIsLoggedin={isLoggedin}/>
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/searchpatient" component={PatientSearch} exact />
        <Route path="/addpatient" component={AddPatient} exact />
        <Route component={NotFound} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
