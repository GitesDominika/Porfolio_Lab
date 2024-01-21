const No4a_StepOne = ({nextStep, handleChange, values}) => {


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
                            <p className="step__one__txt">Krok 1/4</p>
                        </div>


                        <div className="step__one__headline">
                            <h2 className="step__one__hdl">Zaznacz co chcesz oddać:</h2>
                        </div>

                        <form className="step__one__forms" action="">
                            <div className="step__one_checks">
                                <input className="step__one__checkbox" type="checkbox" value={values.checkbox}
                                       onChange={handleChange('checkbox')}/>
                                <span className="labels">ubrania, które nadają się do ponownego użycia</span>
                            </div>
                            <br/>
                            <div className="step__one_checks">
                                <input className="step__one__checkbox" type="checkbox" value={values.checkbox}
                                       onChange={handleChange('checkbox')}/>
                                <span className="labels">ubrania, do wyrzucenia</span>
                            </div>
                            <br/>
                            <div className="step__one_checks">
                                <input className="step__one__checkbox" type="checkbox" value={values.checkbox}
                                       onChange={handleChange('checkbox')}/>
                                <span className="labels">zabawki</span>
                            </div>
                            <br/>
                            <div className="step__one_checks">
                                <input className="step__one__checkbox" type="checkbox" value={values.checkbox}
                                       onChange={handleChange('checkbox')}/>
                                <span className="labels">książki</span>
                            </div>
                            <br/>
                            <div className="step__one_checks">
                                <input className="step__one__checkbox" type="checkbox" value={values.checkbox}
                                       onChange={handleChange('checkbox')}/>
                                <span className="labels">Inne</span>
                            </div>
                        </form>
                    </div>

                    <br/><br/>
                    <div className="step__one__btn">
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

export default No4a_StepOne;