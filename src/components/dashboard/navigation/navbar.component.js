import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div >
            <ul className='nav'>
                <li><Link to='AddPatient'>Add Patient</Link></li>
                <li><Link to='searchpatient'>Search Patient</Link></li>
                <li><Link to=''>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;