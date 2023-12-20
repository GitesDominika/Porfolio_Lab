// import '../scss/main.scss';
import Header from './home-components/header'; // Import the Header component


function Login() {
    return (

        <>
            <section className="main-container" style={{marginRight: '16px'}}>
                {/* Include the Header component */}
                <Header/>
            </section>
            <section className="login-container">
                <div className="login-inner">
                    <div className="login-text__text">
                        <div className="login-text__hdl"><h2>Zaloguj się</h2></div>
                        <div className="login-text__ornament"><p>&nbsp;</p></div>
                    </div>

                    <div className="login-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="email" id="email"/>
                        <label htmlFor="password">Hasło</label>
                        <input type="password" className="" id="password"/>

                    </div>

                    <div className="login-buttons">
                        <buutton type="text" className="login-buttons__sginin-btn">Załóż konto</buutton>
                        <button type="text" className="login-buttons__login-btn login-buttons__login-btn--active">Zaloguj się</button>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Login;

