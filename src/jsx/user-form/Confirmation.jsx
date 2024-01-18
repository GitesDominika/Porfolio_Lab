// import React from "react";

const Confirmation = ({prevStep, nextStep, handleChange, values}) => {

    const Previous = event => {
        event.preventDefault();
        prevStep();
    }
    const Continue = event => {
        event.preventDefault();
        nextStep();
    }

    return (
        <form>
            <label>Cycki
                <input
                    type="text"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange('password')}
                />
            </label>
            <button onClick={Previous }>Previous</button>
            <button onClick={Continue }>Next</button>
        </form>
    );
}

export default Confirmation;
