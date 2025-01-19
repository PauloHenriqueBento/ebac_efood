import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import { HeaderContainer, HeaderTitle } from './styles'

export type Props = {
  isHome: boolean
}

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContainer isHome={isHome}>
      <div className="container">
        <nav>
          {!isHome && <Link to="/">Restaurantes</Link>}
          <img src={logo} alt="E-food" />
          {!isHome && <p>0 produto(s) no carrinho</p>}
        </nav>
        {isHome && (
          <HeaderTitle>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </HeaderTitle>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
