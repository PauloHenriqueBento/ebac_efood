import Restaurant from '../../models/Restaurants'
import Restaurants from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

export const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurants
              key={restaurant.id}
              category={restaurant.category}
              description={restaurant.description}
              image={restaurant.image}
              note={restaurant.note}
              title={restaurant.title}
              tag={restaurant.tag}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
