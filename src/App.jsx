import '@mantine/core/styles.css'
import { MantineProvider, Container } from '@mantine/core'
import AppRoutes from './router/routes'
import { BrowserRouter as Router } from 'react-router'

function App() {

  return (
    <MantineProvider defaultColorScheme="auto" withGlobalClass>
      <Container fluid={true}>
        <Router>
          <AppRoutes />
        </Router>
      </Container>

    </MantineProvider>
  )
}

export default App
