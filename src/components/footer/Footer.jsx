import ulziiLogo from './images/Ulzii-Logo.png'

import './Footer.css'

export default function Footer()
{
    return <div className='footer'> 
        <div className='logo'>
            <img src={ ulziiLogo } />
        </div>
    </div>
}