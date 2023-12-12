
import './scss/main.scss';
import Header from './jsx/components/header'; // Import the Header component
import Intro from './jsx/components/intro'; // Import the Header component
import YellowSection from './jsx/components/yellow_section'; // Import the Header component
import FourSteps from './jsx/components/FoureSteps'; // Import the Header component
import AbouteUs from './jsx/components/abouteus'; // Import the Header component
import Contact from './jsx/components/Contakt'; // Import the Header component






function App() {
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
            <section className="contakt__container">
                {/* Include the Header component */}
                <Contact />
            </section>
        </>
    );
}

export default App;

