import { Route, Routes } from 'react-router-dom';
import Introduction from './pages/introduction/Introduction';
import Contact from './pages/contact/Contact'
import Events from './pages/events/Events';

export default function Routing()
{
    return <Routes>
        <Route path="/" element={ <Introduction /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/events" element={ <Events /> } />
    </Routes>
}