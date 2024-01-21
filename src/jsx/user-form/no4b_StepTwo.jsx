// import React from "react";

const No4b_StepTwo = ({prevStep, nextStep, handleChange, values}) => {

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
                            <p className="step__one__txt">Krok 2/4</p>
                        </div>


                        <div className="step__one__headline">
                            <h2 className="step__one__hdl">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        </div>

                        <form className="step__one__forms" action="">
                            <div className="step__two_checks">
                                <span className="labels">Liczba 60l worków:</span>
                                <select>
                                        <option selected="-- Wybierz --" value="aa"> -- Wybierz -- </option>
                                        <option value="a">1</option>
                                        <option value="b">2</option>
                                        <option value="c">3</option>
                                        <option value="d">4</option>
                                        <option value="e">5</option>
                                        <option value="f">6</option>
                                </select>
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

export default No4b_StepTwo;


