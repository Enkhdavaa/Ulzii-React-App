import { SparklesIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Navbar()
{
    return <nav className="bg-green-100">
        <div>
            <div className="flex justify-center space-x-4">
                <div>
                    <a href="/" className="flex items-center">
                        <SparklesIcon className="h-6 w-6 mr-2"/>
                        <span>Introduction</span>
                    </a>
                </div>
                <div>
                    <a href="/contact" className="flex items-center">
                        <PhoneIcon className="w-6 h-6 mr-2"/>
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
}