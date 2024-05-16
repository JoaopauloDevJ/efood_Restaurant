import bannerPerfil from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import { TitleRed } from '../../stylos'
import { Image, ContainerHeader, VerRestaurantes } from './styles'

const HeaderCardapio = () => {
  return (
    <header>
      <Image style={{ backgroundImage: `url(${bannerPerfil})` }}>
        <div className="container">
          <ContainerHeader>
            <VerRestaurantes to="/">Restaurantes</VerRestaurantes>
            <img src={logo} />
            <TitleRed>0 Produto(s) no carrinho</TitleRed>
          </ContainerHeader>
        </div>
      </Image>
    </header>
  )
}

export default HeaderCardapio
