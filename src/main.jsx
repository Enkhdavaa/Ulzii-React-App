import ReactDOM from 'react-dom/client'
import React from 'react'
import './style.css'
import Introduction from './pages/introduction/Introduction'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <div>
            <Introduction />
        </div>
    </React.StrictMode>,
)
