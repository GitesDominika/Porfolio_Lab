
import {Routes, Route} from 'react-router-dom';
import Login from './jsx/Login.jsx';
import Logout from './jsx/Logout.jsx';
import Register from './jsx/Register.jsx';

import Home from './jsx/Home.jsx';


function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={ <Login /> }></Route>
            </Routes>
            <Routes>
                <Route path='/logout' element={ <Logout /> }></Route>
            </Routes>
            <Routes>
                <Route path='/register' element={ <Register /> }></Route>
            </Routes>


            <Routes>
                <Route path='/' element={ <Home /> }></Route>
            </Routes>


        </>
    );
}

export default App;

