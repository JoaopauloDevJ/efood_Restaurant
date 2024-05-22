import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './stylos'
import Rotas from './router'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
