
import '../scss/main.scss';
import Header from './home-acconte-components/header'; // Import the Header component
import Intro from './user-form/intro'; // Import the Header component
import YellowSection from './home-components/yellow_section'; // Import the Header component
import FourSteps from './home-components/FoureSteps'; // Import the Header component
import AbouteUs from './home-components/abouteus'; // Import the Header component
import Contact from './home-components/Contakt'; // Import the Header component
import SocialMediaBar from './home-components/social-media-bar';
import TabTwo from './home-components/tabtwo'; // Import the Header component


function FormUser() {
    return (

        <>
            <section className="main-container">
                {/* Include the Header component */}
                <Header />
                {/* Include the Intro component */}
                <Intro />
            </section>
            <section className="yellow-section-container">
                {/* Include the Header component */}
                <YellowSection />
            </section>
            <section className="four-steps__container">
                {/* Include the Header component */}
                <FourSteps />
            </section>
            <section className="aboute-us__container">
                {/* Include the Header component */}
                <AbouteUs />
            </section>
            <section className="tabtwo__container">
                {/* Include the Header component */}
                <TabTwo />
            </section>
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
