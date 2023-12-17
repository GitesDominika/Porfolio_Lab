import {useState} from "react";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        name: '', email:'', message:''
    });

    const [didEdit, setDidEdit] = useState( {
        name: false, email: false, message:false
    });

    const nameIsInvalid = didEdit.name && !/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/.test(enteredValues.name);
    const emailIsInvalid = didEdit.email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(enteredValues.email);
    const messageIsInvalid = didEdit.message && enteredValues.message.trim() === '';


    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues)

        for (const key in enteredValues) {
            if (!enteredValues[key]) {
                console.error(`Please enter ${key}`);
                return; // Prevent form submission
            }
        }

    }

    function handleInputChange(identifier, event) {
        setEnteredValues(prevValues => ({
            ...prevValues, [identifier]: event.target.value
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit, [identifier]: false,
        }));
    }

    function handleInputBlur (identifier) {
        setDidEdit(prevEdit => ({
            ...prevEdit, [identifier]: true,
        }));
    }

    return (
        <>

            <div className="contact__inner">
                <div className="contact__content">

                    <div className="contact__hdl"><h2>Skontaktuj się z nami</h2></div>
                    <div className="contact__ornament"><p>&nbsp;</p></div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="line">
                            <div className="input__box">
                                <div className="input__row brake">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input type="text" placeholder="Imię" id="name"
                                           onBlur={() => handleInputBlur("name")}
                                           onChange={(event) => handleInputChange("name", event)}
                                           value={enteredValues.name}/>
                                    <div className="control-error">{nameIsInvalid && <p>Wpisz tylko imię</p>}</div>
                                </div>
                            </div>

                            <div className="input__box">
                                <div className="input__row">
                                    <label htmlFor="email">Wpisz swój e-mail</label>
                                    <input type="email" placeholder="wpisz adres e-mail" id="email"
                                           onBlur={() => handleInputBlur('email') }
                                           onChange={(event) => handleInputChange('email', event)}
                                           value={enteredValues.email}/>
                                    <div className="control-error">{emailIsInvalid && <p>Wpisz poprawnie adres e-mail</p>}</div>
                                </div>
                            </div>
                        </div>

                        <div className="textarea__box">
                            <label htmlFor="message" style={{fontSize: '12px', fontWeight: '900',}}>Wpisz swoją wiadomość</label>
                            <textarea   onBlur={() => handleInputBlur('message') }
                                        onChange={(event) => handleInputChange('message', event)}
                                        value={enteredValues.message}

                                        rows="5" style={{width: '528px', resize: 'none', marginTop: '8px', backgroundColor: 'transparent', outlineStyle: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                            }}  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." id="message"></textarea>
                            <div className="control-error" style={{color: 'red', paddingTop: '.250rem', fontSize: "12px"}}>{messageIsInvalid && <p style={{marginBottom: '4px',}}>Zostaw nam wiadomość</p>}</div>

                        </div>

                        <button className="button-sub">Wyślij</button>
                    </form>

                </div>
                <div className="contact__img"></div>

            </div>
        </>
    );
}

