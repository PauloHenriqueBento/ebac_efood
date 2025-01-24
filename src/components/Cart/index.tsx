import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Price, Sidebar } from './styles'
import { formatToBRLCurrency } from '../../utils/formatToBRLCurrency'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((sum, actualValue) => {
      return (sum += actualValue.preco)
    }, 0)
  }

  const removeitem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatToBRLCurrency(item.preco)}</span>
              </div>
              <button onClick={() => removeitem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Price>
          Valor total: <span>{formatToBRLCurrency(getTotalPrice())}</span>
        </Price>
        <Button
          type="button"
          title="Clique aqui para continuar com a compra"
          color="secundary"
          large
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
