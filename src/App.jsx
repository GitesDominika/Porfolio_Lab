
import {Routes, Route} from 'react-router-dom';
import Login from './jsx/Login.jsx';

import Home from './jsx/Home.jsx';


function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={ <Login /> }></Route>
            </Routes>


            <Routes>
                <Route path='/' element={ <Home /> }></Route>
            </Routes>


        </>
    );
}

export default App;

