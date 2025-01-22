import { MenuItem } from '../../types/restaurant'
import Foods from '../Food'
import {
  Container,
  List,
  Modal,
  ModalContent,
  ModalInfoContainer
} from './styles'

import close from '../../assets/icons/close.png'
import { useState } from 'react'
import Button from '../Button'
import { formatToBRLCurrency } from '../../utils/formatToBRLCurrency'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  foods: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

export const FoodList = ({ foods }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (food: MenuItem) => {
    dispatch(add(food))
    dispatch(open())
    closeModal()
  }

  const [modal, setModal] = useState<ModalState>({
    descricao: '',
    foto: '',
    nome: '',
    porcao: '',
    preco: 0,
    id: 0,
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      descricao: '',
      foto: '',
      nome: '',
      porcao: '',
      preco: 0,
      id: 0,
      isVisible: false
    })
  }

  const openModal = (item: MenuItem) => {
    setModal({
      descricao: item.descricao,
      foto: item.foto,
      nome: item.nome,
      porcao: item.porcao,
      preco: item.preco,
      id: item.id,
      isVisible: true
    })
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {foods.map((food) => (
              <Foods
                key={food.id}
                description={food.descricao}
                image={food.foto}
                title={food.nome}
                onAddToCart={() => openModal(food)}
              />
            ))}
          </List>
        </div>
      </Container>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <ModalInfoContainer>
            <img
              src={modal.foto}
              alt={modal.nome}
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <h3>{modal.nome}</h3>
              <p>{modal.descricao}</p>
              <p>{modal.porcao}</p>
              <Button
                title="Adicione ao carrinho"
                color="secundary"
                type="button"
                onClick={() => addToCart(modal)}
              >
                Adicionar ao carrinho - {formatToBRLCurrency(modal.preco)}
              </Button>
            </div>
          </ModalInfoContainer>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        />
      </Modal>
    </>
  )
}
