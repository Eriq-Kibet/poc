import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './pages/Home';
import AddPatient from './pages/AddPatient';
import PatientSearch from './pages/PatientSearch'
import Login from './pages/login'
function App(){

return(
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path='/' component={ HomePage } exact/>
    <Route path='/AddPatient' component={AddPatient }/>
    <Route path='/PatientSearch' component={PatientSearch }/>
    <Route path='/login' component={ Login}/>
    </Switch>

    </BrowserRouter>
)
}export default App;