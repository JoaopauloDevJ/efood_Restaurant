import bannerPerfil from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import { TitleRed } from '../../stylos'
import { Image, ContainerHeader, VerRestaurantes } from './styles'
import { open } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderCardapio = () => {
  const { items } = useSelector((state: RootReducer) => state.adicionar)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <header>
      <Image style={{ backgroundImage: `url(${bannerPerfil})` }}>
        <div className="container">
          <ContainerHeader>
            <VerRestaurantes to="/">Restaurantes</VerRestaurantes>
            <img src={logo} />
            <TitleRed onClick={openCart}>
              {items.length} Produto(s) no carrinho
            </TitleRed>
          </ContainerHeader>
        </div>
      </Image>
    </header>
  )
}

export default HeaderCardapio
