import Button from '../Button'
import { Card, Description } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Foods = ({ title, description, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Description>{description}</Description>
      <Button
        title="Adicionar ao carrinho"
        type="button"
        color="secundary"
        large
        onClick={() => console.log('teste')}
      >
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Foods
