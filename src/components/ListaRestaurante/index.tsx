import { Restaurante } from '../../page/Home'
import Card from '../Restaurante'
import { ContainerGrid } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  const getRestauranteTag = (restaurantes: Restaurante) => {
    const tags = []

    if (restaurantes.tipo) {
      tags.push(restaurantes.tipo)
    }

    return tags
  }
  return (
    <div className="container">
      <ContainerGrid>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.id}>
            <Card
              title={restaurantes.titulo}
              avaliation={restaurantes.avaliacao}
              description={restaurantes.descricao}
              cover={restaurantes.capa}
              type={getRestauranteTag(restaurantes)}
              id={restaurantes.id}
              highlighted={restaurantes.destacado}
            />
          </li>
        ))}
      </ContainerGrid>
    </div>
  )
}

export default ListaRestaurante
