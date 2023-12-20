import { Link } from "react-router-dom";

function Header() {
    return (
        <>

            <header className="header">
                <div className="header__inner">
                    <nav className="menu">
                        <div className="buttons-box">
                            <Link to='/login' className="login" type='button'>Zaloguj się</Link>
                            <Link to='/register' className="register">Załóż konto</Link>
                        </div>
                        <div className="menu__row">
                            <Link to='/' className="menu__item menu__item--active">Start</Link>
                            <a href="" className="menu__item">O co chodzi?</a>
                             <a href="" className="menu__item">O nas</a>
                             <a href="" className="menu__item">Fundacja i organizacje</a>
                             <a href="" className="menu__item">Kontakt</a>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;

