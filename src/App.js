import React from 'react';
import { useSelector} from 'react-redux'

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global';
import { darkTheme, lightTheme } from './theme/theme';

import Header from './Components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {

  const theme = useSelector((state)=>state.theme.currentTheme);
  
  return (
   
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    
    <Container>
        <GlobalStyles />
        <Header/>
        <Section>
        <Sidebar/>
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
        </Section>
        <Footer/>
        </Container>
    
        </ThemeProvider>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100vh;
`; 

const Section = styled.div`
    display: flex;
    width:100vw;
`;