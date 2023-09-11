import Header from './components/Cabecalho'
import Vagaz from './Estilos'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import {GlobalStyle} from './Global'

import './global.css'

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>

    <Header><h1>EBAC Jobs</h1></Header>
      <Hero />


      <div className="container">
      <Vagaz><ListaVagas /></Vagaz>
      </div>
    </>
  )
}

export default App
