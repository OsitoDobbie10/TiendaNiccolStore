import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Providercontext}  from './Contexts/Context1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Providercontext>
    <App />
    </Providercontext>
);
