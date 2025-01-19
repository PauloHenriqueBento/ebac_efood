import { CategoryText, Container, RestaurantTitle } from './styles'

type Props = {
  title: string
  category: string
  image: string
}

const RestaurantBanner = ({ title, category, image }: Props) => {
  return (
    <Container image={image}>
      <div className="container">
        <CategoryText>{category}</CategoryText>
        <RestaurantTitle>{title}</RestaurantTitle>
      </div>
    </Container>
  )
}

export default RestaurantBanner
