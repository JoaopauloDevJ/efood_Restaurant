import ProductList from '../../components/ProductsList'
import Produto from '../../model/produtos'
import sushi from '../../assets/image/sushi.png'
import trattoria from '../../assets/image/trattoria.png'
import Header from '../../components/Header'

const anuncios: Produto[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.9
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    nota: 4.6
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    nota: 4.6
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    nota: 4.6
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    nota: 4.6
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    nota: 4.6
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <ProductList produtos={anuncios} />
    </>
  )
}

export default Home
