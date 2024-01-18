// import React from "react";

const PersonalDetails = ({prevStep, nextStep, handleChange, values}) => {

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
            <label>Dupa
                <input
                    type="text"
                    placeholder="username"
                    value={values.username}
                    onChange={handleChange('username')}
                />
            </label>
            <button onClick={Previous}>Previous</button>
            <button onClick={Continue}>Next</button>
        </form>
    );
}

export default PersonalDetails;


