
import './scss/main.scss';
import Header from './jsx/components/header'; // Import the Header component
import Intro from './jsx/components/intro'; // Import the Header component
import YellowSection from './jsx/components/yellow_section'; // Import the Header component


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
        </>
    );
}

export default App;

