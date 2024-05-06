import * as S from './styles'
import Tag from '../Tag'
import estrela from '../../assets/image/estrela.png'
import { TitleRed } from '../../stylos'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Card = ({ description, image, title, nota, infos }: Props) => {
  return (
    <S.Card>
      <img src={image} />
      <S.TagImg>
        {infos.map((infos) => (
          <Tag key={infos} size="small">
            {infos}
          </Tag>
        ))}
      </S.TagImg>
      <S.Container>
        <div className="containerTitle">
          <TitleRed>{title}</TitleRed>
          <S.Nota>
            <TitleRed>{nota}</TitleRed>
            <img src={estrela} />
          </S.Nota>
        </div>
        <S.Descricao>{description}</S.Descricao>
        <S.BotaoSaibaMais to="/produtos">Saiba Mais</S.BotaoSaibaMais>
      </S.Container>
    </S.Card>
  )
}

export default Card
