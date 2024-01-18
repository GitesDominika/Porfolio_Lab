
import '../scss/main.scss';
import Header from './home-acconte-components/header'; // Import the Header component
import Intro3 from './user-form/intro3'; // Import the Header component
import YellowArgent from './user-form/yellow-argent'; // Import the Header component
import Contact from './home-components/Contakt'; // Import the Header component
import SocialMediaBar from './home-components/social-media-bar';
import FormStepOne from "./user-form/form_step_one.jsx";
import Signup from "../../../multistep-form-react/src/form-components/0_Signup.jsx";


function FormUser() {
    return (

        <>
            <section className="main-container">
                {/* Include the Header component */}
                <Header />
                {/* Include the Intro component */}
                <Intro3 />
            </section>
            <section className="yellow-section-container">
                {/* Include the Header component */}
                <YellowArgent />
            </section>
            <section className="step__one__container">
                {/* Include the Header component */}
                <FormStepOne />
            </section>
            <div className="App">
                <Signup/>
            </div>
            <section className="contact__container">
                {/* Include the Header component */}
                <Contact />
            </section>
            <div className="social__container">
                {/* Include the Header component */}
                <SocialMediaBar />
            </div>

        </>

    );
}

export default FormUser;
