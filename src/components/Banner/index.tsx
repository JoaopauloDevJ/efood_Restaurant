import { Image, TitleBanner, TagBanner, ContainerBanner } from './styles'
import bannerImg from '../../assets/image/bannerPrato.png'

const Banner = () => {
  return (
    <div>
      <Image style={{ backgroundImage: `url(${bannerImg})` }} />
      <ContainerBanner className="container">
        <TagBanner>Italiana</TagBanner>
        <TitleBanner>La Dolce Vita Trattoria</TitleBanner>
      </ContainerBanner>
    </div>
  )
}

export default Banner
