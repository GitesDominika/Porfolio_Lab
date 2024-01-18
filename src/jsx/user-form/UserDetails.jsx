// import React from "react";

const UserDetails = ({nextStep, handleChange, values}) => {


    const Continue = event => {
        event.preventDefault();
        nextStep();
    }
    return (


        <form>
            <label>Email
                <input
                    type="text"
                    placeholder="email address"
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </label>
            <button onClick={Continue}>Next</button>
        </form>
    );
}

export default UserDetails;