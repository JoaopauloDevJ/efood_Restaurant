import * as S from './styles'
import { Restaurante } from '../../page/Home'
import Cardapio from '../Cardapio'

export type Props = {
  restaurantes: Restaurante[]
}

export const CardapioList = ({ restaurantes }: Props) => {
  if (!restaurantes) {
    return <h2>Carregando...</h2>
  }
  return (
    <div className="container">
      <S.CardPerfilGrid>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.cardapio.id}>
            <Cardapio
              nome={restaurantes.cardapio.nome}
              descricao={restaurantes.cardapio.descricao}
              foto={restaurantes.cardapio.foto}
              porcao={restaurantes.cardapio.porcao}
              preco={restaurantes.cardapio.preco}
              id={restaurantes.cardapio.id}
            />
          </li>
        ))}
      </S.CardPerfilGrid>
    </div>
  )
}

export default CardapioList
