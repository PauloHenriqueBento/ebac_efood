import Food from '../../models/Foods'
import Foods from '../Food'
import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

export const FoodList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <Foods
              key={food.id}
              description={food.description}
              image={food.image}
              title={food.title}
            ></Foods>
          ))}
        </List>
      </div>
    </Container>
  )
}
