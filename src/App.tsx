import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './stylos'
import Rotas from './router'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
