import {Routes, Route} from 'react-router-dom';

import Main from './Componets/Main/main';
import Home from './Componets/Home/home';
import Modalweb from './Componets/Modalwebsite/modalweb';
import Modals from './Componets/Modals/Modals';

export default function Router(){
    return(
       <Routes>  
            <Route path='/' element={ <Main/>} />
            <Route path='/modal' element={ <Modals/>} />
            <Route path='/home' element={ <Home/>} />
       </Routes>
    );
}