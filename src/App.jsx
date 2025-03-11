import '@mantine/core/styles.css'
import { MantineProvider, Container} from '@mantine/core'
import { BrowserRouter as Router } from 'react-router'

function App() {

  return (
    <MantineProvider defaultColorScheme="auto" withGlobalClass>
      <Container fluid={true}>
      <Router>
        <h1>Hello Mantine!</h1>
      </Router>
      </Container>

    </MantineProvider>
  )
}

export default App
