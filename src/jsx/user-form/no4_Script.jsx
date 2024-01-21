import {Component} from 'react';
// import  {useState} from "react";

import No4a_StepOne from "./no4a_StepOne.jsx";
import No4b_StepTwo from "./no4b_StepTwo.jsx";
import No4c_StepTree from "./no4c_StepTree.jsx";
import No4d_StepFore from "./no4d_StepFore.jsx";
import No4e_StepFive from "./no4e_StepFive.jsx";
import No4f_StepSix from "./no4f_StepSix.jsx";

class ScriptToForm extends Component {

    state = {
        step: 1,
        checkbox:'', email: '', username: '', password: '', firstName: '', lastName: '', country: '', levelOfEducation: ''
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
                    <No4a_StepOne
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <No4b_StepTwo
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <No4c_StepTree
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <No4d_StepFore
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <No4e_StepFive
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <No4f_StepSix />
                )
          default:
            // do nothing
        }
    }
}

export default ScriptToForm;