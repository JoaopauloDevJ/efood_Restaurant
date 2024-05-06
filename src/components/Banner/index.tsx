import { Image, TitleBanner, TagBanner } from './styles'
import bannerImg from '../../assets/image/bannerPrato.png'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <TagBanner>Italiana</TagBanner>
        <TitleBanner>La Dolce Vita Trattoria</TitleBanner>
      </div>
    </Image>
  )
}

export default Banner
