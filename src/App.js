import {
  AnimalsCollection 
 } from './ui-components';
 import { Amplify } from 'aws-amplify';
 import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App() {
  return (
    <div className="App">
    <AnimalsCollection />
    </div>
  );
}

export default withAuthenticator(App);
