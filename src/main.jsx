import React from 'react';
import ReactDOM from 'react-dom/client';

import { GifExpertApp } from './GifExportApp';

import './styles.css';

// Stricmode is a tool for highlighting potential problems in an application
// Strict mode checks are run in development mode only; they do not impact the production build.
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
);
