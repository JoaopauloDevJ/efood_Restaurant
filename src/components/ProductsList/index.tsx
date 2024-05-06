import Produto from '../../model/produtos'
import Card from '../Products'
import { ContainerGrid } from './styles'

type Props = {
  produtos: Produto[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <div className="container">
      <ContainerGrid>
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            title={produto.title}
            description={produto.description}
            infos={produto.infos}
            image={produto.image}
            nota={produto.nota}
          />
        ))}
      </ContainerGrid>
    </div>
  )
}

export default ProductList
