import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import StyleGlobal, { Container } from './styles'
import ColorProject from './Themes/styles'

function App() {
  return (
    <>
      <ThemeProvider theme={ColorProject}>
        <StyleGlobal />
        <Container>
          <Header />
          <Hero />
          <div className="container">
            <ListaVagas />
          </div>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
