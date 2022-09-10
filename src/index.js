import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

// REACT 18.x

const container = document.getElementById('app');
const root = createRoot(container);

// <App tab="home" />
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// REACT 17.x
// ReactDOM.render(<App/>, document.getElementById('app'));