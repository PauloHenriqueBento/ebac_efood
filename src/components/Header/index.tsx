import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import { HeaderContainer, HeaderTitle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type Props = {
  isHome: boolean
}

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer isHome={isHome}>
      <div className="container">
        <nav>
          {!isHome && <Link to="/">Restaurantes</Link>}
          <img src={logo} alt="E-food" />
          {!isHome && (
            <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
          )}
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
