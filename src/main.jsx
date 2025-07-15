import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import i18n from './utils/i18/i18n.js';
import './utils/i18/i18n.js';
import App from './App.jsx';
import {Toaster} from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  <Toaster/>
</StrictMode>
)
