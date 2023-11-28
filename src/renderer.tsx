import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import './index.scss'

const root = document.getElementById('react-root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);