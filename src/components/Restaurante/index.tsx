import * as S from './styles'
import Tag from '../Tag'
import estrela from '../../assets/image/estrela.png'
import { TitleRed } from '../../stylos'

export type Props = {
  title: string
  description: string
  type: string[]
  highlighted?: boolean
  avaliation: number
  cover: string
  id: number
}

const Card = ({
  title,
  description,
  type,
  avaliation,
  cover,
  highlighted,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 250) {
      return description.slice(0, 247) + '...'
    }
    return description
  }
  return (
    <div className="container">
      <S.Card>
        <S.Capa src={cover} />
        <S.TagImg>
          {highlighted === true ? (
            <Tag size="small">Destaque da semana</Tag>
          ) : (
            ''
          )}
          {type.map((type) => (
            <Tag key={type} size="small">
              {type}
            </Tag>
          ))}
        </S.TagImg>
        <S.Container>
          <div className="containerTitle">
            <TitleRed>{title}</TitleRed>
            <S.Nota>
              <TitleRed>{avaliation}</TitleRed>
              <img src={estrela} />
            </S.Nota>
          </div>
          <S.Descricao>{getDescription(description)}</S.Descricao>
          <S.BotaoSaibaMais to={`/restaurantes/${id}`}>
            Saiba Mais
          </S.BotaoSaibaMais>
        </S.Container>
      </S.Card>
    </div>
  )
}

export default Card
