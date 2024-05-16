import * as S from './styles'
import { Restaurante } from '../../page/Home'
import Cardapio from '../Cardapio'

export type Props = {
  restaurantes: Restaurante[]
}

export const CardapioList = ({ restaurantes }: Props) => {
  return (
    <div className="container">
      <S.ContainerCard>
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
      </S.ContainerCard>
    </div>
  )
}

export default CardapioList
