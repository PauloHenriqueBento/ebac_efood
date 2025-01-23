import { truncateText } from '../../utils/truncateText'
import Button from '../Button'
import { Card, Description } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onAddToCart: () => void
}

const Foods = ({ title, description, image, onAddToCart }: Props) => {
  const truncatedDescription = truncateText(description, 132)
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Description>{truncatedDescription}</Description>
      <Button
        title="Adicionar ao carrinho"
        type="button"
        color="secundary"
        large
        onClick={onAddToCart}
      >
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Foods
