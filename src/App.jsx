import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Routing from './Routing.jsx'
import Navbar from './components/navbar/Navbar.jsx'

export default function App()
{
    return <div className='flex flex-col h-screen'>
        <div className='h-[100px]'>
            <Header />
        </div>
        <div>
            <Navbar />
        </div>
        <div className='flex-grow'>
            <Routing />
        </div>
        <div className='h-[100px]'>
            <Footer />
        </div>
    </div>
}