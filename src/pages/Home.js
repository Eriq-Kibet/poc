import React from 'react'

import './index.css'
// import Navbar from './Navbar'
// import loginLogo from './Openmrs-logo.svg'



function HomePage() {
    return (

        <div className="homePage">
            {/* <Navbar /> */}

            <div className="pocHome">
                {/* <img className="homeLogo" src={loginLogo} alt="ampathLogo" /> */}
                <div>
                    <h3>Point of Care</h3>
                    <text className="pocText">hsdfjhsfhksfhkshakhkahfkshdfkjshjkfhskjdfhkafhkjsfhksfhkjafhsk</text>
                </div>
                <hr className="line" />
                <div>
                    <h3>OpenMRS</h3>
                    <text>hsdfjhsfhksfhkshakhkahfkshdfkjshjkfhskjdfhkafhkjsfhksfhkjafhsk</text>
                </div>
            </div>

        </div>
    )
}
export default HomePage;