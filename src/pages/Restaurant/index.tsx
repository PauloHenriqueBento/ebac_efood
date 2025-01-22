import { useParams } from 'react-router-dom'
import { FoodList } from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { useGetRestaurantByIdQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantByIdQuery(id!)

  if (!restaurant) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <RestaurantBanner
        category={restaurant.tipo}
        title={restaurant.titulo}
        image={restaurant.capa}
      />
      <FoodList foods={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
