import { Route, Routes } from 'react-router-dom';
import Introduction from './pages/introduction/Introduction';
import Contact from './pages/contact/Contact'

export default function Routing()
{
    return <Routes>
        <Route path="/" element={ <Introduction /> } />
        <Route path="/contact" element={ <Contact /> } />
    </Routes>
}