import React from 'react';
import {
  AnimalCollection 
 } from '../ui-components';
 import { ThemeProvider } from "@aws-amplify/ui-react";
 import { studioTheme } from "../ui-components";

function Overview() {
  return (
    <ThemeProvider theme={studioTheme}>
         <AnimalCollection />
    </ThemeProvider>
)
  }

export default Overview;