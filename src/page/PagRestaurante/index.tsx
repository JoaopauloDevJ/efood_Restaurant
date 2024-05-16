import HeaderCardapio from '../../components/HeaderCardapio'
import CardapioList from '../../components/ListaCardapio'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

export type Props = {
  restaurante: Restaurante[]
}

const PagRestaurante = () => {
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <HeaderCardapio />
      <Banner />
      <CardapioList restaurantes={cardapio} />
    </>
  )
}

export default PagRestaurante
