import { Restaurant } from '../../types/restaurant'
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
            <li key={restaurant.id}>
              <Restaurants
                id={restaurant.id}
                category={restaurant.tipo}
                description={restaurant.descricao}
                image={restaurant.capa}
                note={restaurant.avaliacao}
                title={restaurant.titulo}
                tag={restaurant.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
