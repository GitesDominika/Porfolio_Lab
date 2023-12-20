import { Link } from "react-router-dom";

import Header from './home-components/header'; // Import the Header component


function Register() {
    return (

        <>
            <section className="main-container" style={{marginRight: '16px'}}>
                {/* Include the Header component */}
                <Header/>
            </section>
            <section className="login-container">
                <div className="login-inner">
                    <div className="login-text__text">
                        <div className="login-text__hdl"><h2>Załóż konto</h2></div>
                        <div className="login-text__ornament"><p>&nbsp;</p></div>
                    </div>

                    <div className="login-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="email" id="email"/>
                        <label htmlFor="password">Hasło</label>
                        <input type="password" className="email" id="password"/>
                        <label htmlFor="password">Powtórz hasło</label>
                        <input type="password" className="" id="password"/>

                    </div>

                    <div className="login-buttons">
                        <button type="text" className="login-buttons__sginin-btn login-buttons__sginin-btn--active">Załóż konto</button>
                        <Link to='/login' className="login-buttons__login-btn login-buttons__login-btn--active">Zaloguj się</Link>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Register;

