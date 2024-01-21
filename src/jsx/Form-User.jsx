
import '../scss/main.scss';
import Header from './home-acconte-components/header'; // Import the Header component
import No2_intro3 from './user-form/no2_intro3.jsx'; // Import the Header component
import No3_yellowArgent from './user-form/no3_yellow-argent.jsx'; // Import the Header component
import ScriptToForm from "./user-form/no4_Script.jsx";
import Contact from './home-components/Contakt'; // Import the Header component
import SocialMediaBar from './home-components/social-media-bar';
// import FormStepOne from "./user-form/no3b_form_step_one.jsx";


function FormUser() {
    return (

        <>
            <section className="main-container">
                {/* Include the Header component */}
                <Header />
                {/* Include the Intro component */}
                <No2_intro3 />
            </section>
            <section className="yellow-section-container">
                {/* Include the Header component */}
                <No3_yellowArgent />
            </section>

            <div className="step__one__container">
                <ScriptToForm/>
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
