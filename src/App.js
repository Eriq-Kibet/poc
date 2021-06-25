import { BrowserRouter, Route} from "react-router-dom";
import AddPatient from "./components/Registration/registerPerson.component";
import PatientSearch from "./components/patientSearch/patientSearch.component";
import Login from "./components/login./login.component";
import Navbar from "./components/navigation/navbar.component";
import { useEffect, useState } from "react";
import Encounters from "./components/patientEncounters/patientEncounters.component";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const authKey = window.sessionStorage.getItem("auth.credentials");
  useEffect(() => {
    setIsLoggedin(authKey);
  }, [authKey]);

  return (
    <BrowserRouter>
      <Route path="*" component={Navbar} />
      <Route path="/" component={Login} exact />
      <Route path="/searchpatient" component={PatientSearch} exact />
      <Route path="/registerpatient" component={AddPatient} exact />
      <Route path="/encounters/:patientuuid?" component={Encounters} exact />
     
    </BrowserRouter>
  );
}
export default App;
