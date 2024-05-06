import * as S from './styles'

export type Props = {
  title: string
  image: string
  descricao: string
}

const CardPerfil = ({ title, descricao, image }: Props) => {
  return (
    <S.CardPerfil>
      <S.ImageCard src={image} />
      <S.Title>{title}</S.Title>
      <S.Descricao>{descricao}</S.Descricao>
      <S.BotaoAdicionarCarrinho>Adicionar ao carrinho</S.BotaoAdicionarCarrinho>
    </S.CardPerfil>
  )
}

export default CardPerfil
