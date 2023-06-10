import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Providercontext}  from './Contexts/Context1.jsx'
import {Context2Provider} from './Contexts/Context2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providercontext>
    <Context2Provider>
    <App />
    </Context2Provider>
    </Providercontext>
);
