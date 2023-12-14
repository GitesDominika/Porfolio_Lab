import {useEffect} from 'react';

function TabsPage() {
    useEffect(() => {
        document.getElementById("defaultOpen").click();
    }, []);

    function openPage(pageName, elmnt, color) {
        // Hide all elements with class="tabcontent" by default
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";

        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = color;
    }

    return (
        <>
            <div className="tab__inner">

                <div className="tab__text">
                    <div className="tab__hdl"><h2>Komu pomagamy?</h2></div>
                    <div className="tab__ornament"><p>&nbsp;</p></div>
                </div>

                <div className="tab__buttons">
                    <button className="tablink tablink--active" onClick={() => openPage('Home', this, 'red')} id="defaultOpen">
                        Fundacjom
                    </button>
                    <button className="tablink" onClick={() => openPage('News', this, 'green')}>
                        Organizacjom pozarządowym
                    </button>
                    <button className="tablink" onClick={() => openPage('Contact', this, 'blue')}>
                        Lokalnym zbiórkom
                    </button>
                </div>

                <div id="Home" className="tabcontent">
                    <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p></div>

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

                <div id="News" className="tabcontent">
                    <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p></div>

                    <div className="tab__box">
                        <h3>Orgdnizdcja "Lorem Ipsum" 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    <div className="tab__box">
                        <h3>Orgdnizdcja "Lorem Ipsum" 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eos?</p>
                    </div>

                    <div className="tab__box">
                        <h3>Orgdnizdcja "Lorem Ipsum" 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div id="Contact" className="tabcontent">
                    <div className="tab__title"><p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z&nbsp;którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p></div>

                    <div className="tab__box">
                        <h3>Zbiórka "Lorem Ipsum" 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius laborum perspiciatis!</p>
                    </div>

                    <div className="tab__box">
                        <h3>Zbiórka "Lorem Ipsum" 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <div className="tab__box">
                        <h3>Zbiórka "Lorem Ipsum" 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, iure.</p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default TabsPage;
