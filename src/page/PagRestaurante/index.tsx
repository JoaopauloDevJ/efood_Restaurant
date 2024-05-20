import HeaderCardapio from '../../components/HeaderCardapio'
import CardapioList from '../../components/ListaCardapio'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Prato } from '../Home'

const PagRestaurante = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Prato[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  return (
    <>
      <HeaderCardapio />
      <Banner />
      <CardapioList cardapio={cardapio} />
    </>
  )
}

export default PagRestaurante
