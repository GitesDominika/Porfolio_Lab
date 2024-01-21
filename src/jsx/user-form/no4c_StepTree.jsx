// import React from "react";

const No4c_StepTree = ({prevStep, nextStep, handleChange, values}) => {

    const Previous = event => {
        event.preventDefault();
        prevStep();
    }
    const Continue = event => {
        event.preventDefault();
        nextStep();
    }

    return (

        <>
            <div className="step__one__main">
                <div className="step__one__inner">

                    <div className="step__one__left">
                        <div className="step__one__number">
                            <p className="step__one__txt">Krok 3/4</p>
                        </div>


                        <div className="step__one__headline">
                            <h2 className="step__one__hdl">Lokalizacja:</h2>
                            <br />
                            <select>
                                <option selected="-- Wybierz --" value="aa"> -- Wybierz -- </option>
                                <option value="a">Poznań</option>
                                <option value="b">Warszawa</option>
                                <option value="c">Kraków</option>
                                <option value="e">Wrocław</option>
                                <option value="f">Katowice</option>
                            </select>
                        </div>

                        <form className="step__one__forms" action="">
                            <p className="step__one__txt"><strong>Komu chcesz pomóc</strong></p>
                            <div className="yellow__btn">
                                <button>dzieciom</button>
                            </div>
                            <br/>
                            <div className="yellow__btn">
                                <button>samotnym matkom</button>
                            </div>
                            <br/>
                            <div className="yellow__btn">
                                <button>bezdomnym</button>
                            </div>
                            <br/>
                            <div className="yellow__btn">
                                <button>niepełnosprawnym</button>
                            </div>
                            <br/>
                            <div className="yellow__btn">
                                <button>osobom starszym</button>
                            </div>
                        </form>
                    </div>

                    <div className="step__one__btn">
                        <button onClick={Previous} className="" type="submit" value="Wstecz">Wstecz</button>
                        <button onClick={Continue} className="" type="submit" value="Dalej">Dalej</button>
                    </div>

                    <div className="step__one__img">
                        <div className="img"></div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default No4c_StepTree;
