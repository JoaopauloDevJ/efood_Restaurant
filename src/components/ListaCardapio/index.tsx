import * as S from './styles'
import Cardapio from '../Cardapio'
import { Prato } from '../../page/Home'

export type Props = {
  cardapio: Prato[]
}

export const CardapioList = ({ cardapio }: Props) => {
  return (
    <div className="container">
      <S.ContainerCard>
        {cardapio.map((prato) => (
          <li key={prato.id}>
            <Cardapio
              nome={prato.nome}
              descricao={prato.descricao}
              foto={prato.foto}
              porcao={prato.porcao}
              preco={prato.preco}
              id={prato.id}
            />
          </li>
        ))}
      </S.ContainerCard>
    </div>
  )
}

export default CardapioList
