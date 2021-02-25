import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle, Sidebar, Layout, AppThemeProvider } from '@h1.labs/react-components'
import ButtonPage from './pages/button';

const App = () => {
  return(
    <>
    <AppThemeProvider>
    <GlobalStyle />
      <BrowserRouter>
    <Sidebar>
      <Link to="/button">
        button
      </Link>
    </Sidebar>
    <Layout>
      <div style={{width: '50px', height: '100vh', marginRight: '10rem'}}/>
    <div style={{padding: '1rem'}}>
        <Route path="/button">
          <ButtonPage />
        </Route>
    </div>
    </Layout>
      </BrowserRouter>
      </AppThemeProvider>
  </>
  )
}

export default App
