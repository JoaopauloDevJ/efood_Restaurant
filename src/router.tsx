import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Perfil from './page/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos" element={<Perfil />} />
  </Routes>
)

export default Rotas
