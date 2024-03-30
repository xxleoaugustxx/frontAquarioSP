import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Amplify } from "aws-amplify";
import amplifyconfig from './amplifyconfiguration.json';
import { ThemeProvider } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { BrowserRouter} from 'react-router-dom';
import MainRoutes from './routes'

Amplify.configure(awsconfig);
Amplify.configure(amplifyconfig);



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={studioTheme}>
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
    </ThemeProvider>
)