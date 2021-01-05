import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Text2Speech from './components/text2speech/text2speech.component';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text2Speech />
    </ThemeProvider>
  );
}

export default App;
