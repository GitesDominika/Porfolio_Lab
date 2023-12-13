function Contact() {

    return (
        <>

            <div className="contact__inner">
                <div className="contact__content">

                    <div className="contact__hdl"><h2>Skontaktuj się z nami</h2></div>
                    <div className="contact__ornament"><p>&nbsp;</p></div>

                    <form className="contact__form">
                        <div className="line">
                            <div className="input__box">
                                <div className="input__row brake">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input type="text" placeholder="Imię" id="name"/>
                                </div>
                            </div>

                            <div className="input__box">
                                <div className="input__row">
                                    <label htmlFor="surname">Wpisz swój email</label>
                                    <input type="text" placeholder="Nazwisko" id="surname"/>
                                </div>
                            </div>
                        </div>

                        <div className="textarea__box">
                            <label htmlFor="textareaame" style={{fontSize: '12px', fontWeight: '900',}}>Wpisz swoją wiadomość</label>
                            <textarea rows="5" style={{width: '528px', resize: 'none', marginTop: '8px', backgroundColor: 'transparent', outlineStyle: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                            }}  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." id="textareaame"></textarea>
                        </div>

                        <button className="button-sub">Wyślij</button>
                    </form>

                </div>
                <div className="contact__img"></div>

            </div>
        </>
    );
}

export default Contact;