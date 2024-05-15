import HeaderPerfil from '../../components/HeaderPerfil'
import CardapioList from '../../components/ListaCardapio'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

export type Props = {
  restaurante: Restaurante[]
}

const PagRestaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner />
      <CardapioList restaurantes={restaurante} />
    </>
  )
}

export default PagRestaurante
