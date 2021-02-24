import React from 'react'

import { Button, GlobalStyle, Sidebar, Layout } from '@h1.labs/react-components'

const App = () => {
  return(
    <>
    <GlobalStyle />
    <Sidebar>
      AAAAAAAA
    </Sidebar>
    <Layout>
      <div style={{width: '50px', height: '100vh', marginRight: '10rem'}}/>
    <div style={{padding: '1rem'}}>
      <Button>Oi</Button>
    </div>
    </Layout>
  </>
  )
}

export default App
