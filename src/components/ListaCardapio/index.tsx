import * as S from './styles'
import Cardapio from '../Cardapio'
import { Restaurante } from '../../page/Home'

export type Props = {
  restaurante: Restaurante[]
}

export const CardapioList = ({ restaurante }: Props) => {
  console.log(restaurante)
  return (
    <div className="container">
      <S.ContainerCard>
        {restaurante.cardapio.map((cardapio) => (
          <li key={cardapio.id}>
            <Cardapio
              nome={cardapio.nome}
              descricao={cardapio.descricao}
              foto={cardapio.foto}
              porcao={cardapio.porcao}
              preco={cardapio.preco}
              id={cardapio.id}
            />
          </li>
        ))}
      </S.ContainerCard>
    </div>
  )
}

export default CardapioList
