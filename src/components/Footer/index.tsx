import { FooterContaier, SocialLinks, CopyrightContainer } from './style'
import logo from '../../assets/icons/logo.svg'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
const Footer = () => {
  return (
    <FooterContaier>
      <div className="container">
        <img src={logo} alt="E-food" />
        <SocialLinks>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </SocialLinks>
        <CopyrightContainer>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </CopyrightContainer>
      </div>
    </FooterContaier>
  )
}

export default Footer
