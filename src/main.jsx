import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { BrowserRouter, Router } from 'react-router-dom';


Amplify.configure(outputs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
