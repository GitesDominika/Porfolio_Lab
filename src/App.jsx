
import {Routes, Route} from 'react-router-dom';
import Home from './jsx/Home.jsx';


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
            </Routes>


        </>
    );
}

export default App;

