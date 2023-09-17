import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SignupProvider>
        <App />
    </SignupProvider>
);
