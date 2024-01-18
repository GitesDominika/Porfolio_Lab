import {Component} from 'react';
// import  {useState} from "react";

import UserDetails from "./UserDetails.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import Confirmation from "./Confirmation.jsx";
import Success from "./Success.jsx";

class Signup extends Component {

    state = {
        step: 1,
        email: '', username: '', password: '', firstName: '', lastName: '', country: '', levelOfEducation: ''
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render() {
        const { step } = this.state;
        const { email, username, password, firstName, lastName, country } = this.state;
        const values = { email, username, password, firstName, lastName, country }

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success />
                )
          default:
            // do nothing
        }
    }
}

export default Signup;