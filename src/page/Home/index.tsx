import ListaRestaurante from '../../components/ListaRestaurante'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ListaRestaurante restaurantes={restaurantes} />
    </>
  )
}

export default Home
