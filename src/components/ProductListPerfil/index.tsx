import { CardPerfilGrid } from './styles'
import PerfilProdutos from '../../model/perfilProdutos'
import CardPerfil from '../CardsPerfil'

export type Props = {
  produtosPerfil: PerfilProdutos[]
}

const ProductPerfil = ({ produtosPerfil }: Props) => {
  return (
    <div className="container">
      <CardPerfilGrid>
        {produtosPerfil.map((produtos) => (
          <CardPerfil
            key={produtos.id}
            title={produtos.title}
            image={produtos.image}
            descricao={produtos.descricao}
          />
        ))}
      </CardPerfilGrid>
    </div>
  )
}

export default ProductPerfil
