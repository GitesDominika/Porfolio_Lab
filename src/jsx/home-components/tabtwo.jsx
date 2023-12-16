
    import {useEffect} from 'react';

    function TabTwo() {
        useEffect(() => {
            const cityName = 'London'; // Set a default city or use some logic to determine it
            const evt = { currentTarget: document.querySelector('.tablinks') }; // Set a default event or use some logic to determine it

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = 'block';
            evt.currentTarget.className += ' active';
        }, []);

        function openCity(evt, cityName) {
            // Declare all variables
            let i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = 'block';
            evt.currentTarget.className += ' active';

        }
    return (
        <>
            <div className="tab__inner">

                <div className="tab__text">
                    <div className="tab__hdl"><h2>Komu pomagamy?</h2></div>
                    <div className="tab__ornament"><p>&nbsp;</p></div>
                </div>

            <div className="tab">
                <button className="tablinks" onClick={(event) => openCity(event, 'London')}>
                    Fundacjom
                </button>
                <button className="tablinks" onClick={(event) => openCity(event, 'Paris')}>
                    Organizacjom pozarządowym
                </button>
                <button className="tablinks" onClick={(event) => openCity(event, 'Tokyo')}>
                    Lokalnym zbiórkom
                </button>
            </div>


            <div id="London" className="tabcontent">
                <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br />
                    z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br />
                    komu pomagają i czego potrzebują.</p></div>

                <div className="tab__box">
                    <h3>Fundacja “Dbam o Zdrowie”</h3>
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <div className="tab__box">
                    <h3>Fundacja “Dla dzieci”</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>

                <div className="tab__box">
                    <h3>Fundacja “Bez domu”</h3>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                </div>
            </div>
            <div id="Paris" className="tabcontent">
                <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br />
                    z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br />
                    komu pomagają i czego potrzebują.</p></div>

                <div className="tab__box">
                    <h3>Orgdnizdcja &ldquo;Lorem Ipsum&rdquo; 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>

                <div className="tab__box">
                    <h3>Orgdnizdcja &ldquo;Lorem Ipsum&rdquo; 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eos?</p>
                </div>

                <div className="tab__box">
                    <h3>Orgdnizdcja &ldquo;Lorem Ipsum&rdquo; 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div id="Tokyo" className="tabcontent">
                <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br />
                    z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br />
                    komu pomagają i czego potrzebują.</p></div>

                <div className="tab__box">
                    <h3>Zbiórka &ldquo;Lorem Ipsum&rdquo; 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius laborum perspiciatis!</p>
                </div>

                <div className="tab__box">
                    <h3>Zbiórka &ldquo;Lorem Ipsum&rdquo; 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="tab__box">
                    <h3>Zbiórka &ldquo;Lorem Ipsum&rdquo; 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, iure.</p>
                </div>
            </div>

            <div className="tab__row">
                <div className="tab__btn">
                    <button className="tablinks"   onClick={(event) => openCity(event, 'London')}>1</button>
                    <button className="tablinks"   onClick={(event) => openCity(event, 'Paris')}>2</button>
                    <button className="tablinks"  onClick={(event) => openCity(event, 'Tokyo')}>3</button>
                </div>
            </div>
            </div>


        </>

    );
}

export default TabTwo;