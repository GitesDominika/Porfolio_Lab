
import {Routes, Route} from 'react-router-dom';
import Login from './jsx/Login.jsx';
import Logout from './jsx/Logout.jsx';
import Register from './jsx/Register.jsx';

import Home from './jsx/Home.jsx';
import FourSteps from './jsx/home-components/FoureSteps.jsx';
import AbouteUs from './jsx/home-components/abouteus.jsx';

import HomeAcconte from './jsx/Home-acconte.jsx';
import FormUser from "./jsx/Form-User.jsx";
// import AuthenticationPage from "./jsx/validation-code/authentication.jsx";


function App() {
    return (
        <>
            <Routes>
              <Route path='/login' element={ <Login /> }></Route>     {/*zamiast AuthenticationPage wstaw Login - jesli chcesz wrocic do pierwotnej wersji*/}
            </Routes>
            <Routes>
                <Route path='/logout' element={ <Logout /> }></Route>
            </Routes>
            <Routes>
                <Route path='/register' element={ <Register /> }></Route>
            </Routes>


            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/fourstep' element={<FourSteps />}></Route>
                <Route path='/abouteUs' element={<AbouteUs />}></Route>

                <Route path='/acconte' element={<HomeAcconte />}></Route>
                <Route path='/userform' element={<FormUser />}></Route>
            </Routes>

        </>
    );
}

export default App;

