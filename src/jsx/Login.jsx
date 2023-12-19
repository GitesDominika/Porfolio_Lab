// import '../scss/main.scss';
import Header from './home-components/header'; // Import the Header component


function Login() {
    return (

        <>
            <section className="main-container">
                {/* Include the Header component */}
                <Header/>
            </section>
            <section className="login-container">
                <div className="login-inner">
                    <div className="login-text__text">
                        <h2 className="login-text__hdl"></h2>
                        <p className="login-text__ornament"></p>
                    </div>

                    <div className="login-box">
                        <input type="text" className="email"/>
                        <input type="text" className="password"/>
                    </div>
                    <div className="login-buttons">
                        <buutton type="text" className="login-buttons__singin-btn"></buutton>
                        <button type="text" className="login-buttons__login-btn"></button>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Login;

