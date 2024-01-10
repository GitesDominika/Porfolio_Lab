import { Link } from "react-router-dom";

function Intro2() {
    return (
        <>
            <div className="hero">
                <div className="hero__inner">

                    <div className="hero__row">
                        <h3 className="hero__lead">Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h3>
                        <div className="wrapper__row">
                            <p className="ornament">&nbsp;</p>
                            <button><Link to='/userform' className="gift">ODDAJ RZECZY</Link></button>
                            <button><Link to='#' className="organize">ZORGANIZUJ ZBIÓRKĘ</Link></button>
                        </div>
                    </div>

                    <div className="hero__bg"><div className="img"></div></div>
                </div>
            </div>
        </>
    );
}

export default Intro2;