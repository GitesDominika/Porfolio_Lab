import { Link } from "react-router-dom";

function Header() {
    return (
        <>

            <header className="header">
                <div className="header__inner">
                    <nav className="menu">
                        <div className="buttons-box">
                            <Link to='/register' className="register">Załóż konto</Link>
                            <Link to='/login' className="login" type='button'>Zaloguj się</Link>
                        </div>
                        <div className="menu__row">
                            <a href='/' className="menu__item menu__item--active">Start</a>
                            <a href="#fourstep" className="menu__item">O co chodzi?</a>
                            <a href="#abouteus" className="menu__item">O nas</a>
                            <a href="#whohelp" className="menu__item">Fundacja i organizacje</a>
                            <a href="#kontakt" className="menu__item">Kontakt</a>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;

