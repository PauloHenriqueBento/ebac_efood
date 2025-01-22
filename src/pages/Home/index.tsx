import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
