import HeaderCardapio from '../../components/HeaderCardapio'
import CardapioList from '../../components/ListaCardapio'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'

export type Props = {
  restaurante: Restaurante[]
}

const PagRestaurante = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  return (
    <>
      <HeaderCardapio />
      <Banner />
      <CardapioList restaurante={cardapio} />
    </>
  )
}

export default PagRestaurante
