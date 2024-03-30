import { Amplify } from 'aws-amplify';
import "./App.css"
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import {
  Pokedex,
  ManausOverviewCollection 
} from './ui-components';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(config)

function App() {
  return (     
    <ThemeProvider theme={studioTheme}>
      <div className="sla">
    <Pokedex />
    <ManausOverviewCollection />
    </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);