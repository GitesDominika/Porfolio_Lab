// import '../scss/main.scss';
import Header from './home-components/header';
import {Link} from "react-router-dom"; // Import the Header component


function Logout() {
    return (

        <>
            <section className="main-container" style={{marginRight: '16px'}}>
                {/* Include the Header component */}
                <Header/>
            </section>
            <section className="logout-container">
                <div className="logout-inner">
                    
                    <div className="logout-text__text">
                        <div className="logout-text__hdl"><h2>Wylogowanie nastąpiło <br /> pomyślnie!</h2></div>
                        <div className="logout-text__ornament"><p>&nbsp;</p></div>

                        <div className="logout-buttons">
                            <Link to='/' className="logout-buttons__logout-btn logout-buttons__logout-btn--active">Strona główna</Link>
                        </div>
                    </div>


                </div>
            </section>
        </>

    );
}

export default Logout;

