import {
  Card,
  CardContent,
  InfoContainer,
  Tag,
  TagsContainer,
  Description
} from './styles'

type Props = {
  title: string
  category: string
  image: string
  description: string
  note: number
  tag?: string
}

import star from '../../assets/icons/star_favorite.svg'
import Button from '../Button'

const Restaurants = ({
  title,
  category,
  image,
  description,
  note,
  tag
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <TagsContainer>
        {tag && <Tag>{tag}</Tag>}
        <Tag>{category}</Tag>
      </TagsContainer>
      <CardContent>
        <InfoContainer>
          <h3>{title}</h3>
          <div>
            {note}
            <img src={star} alt="nota" />
          </div>
        </InfoContainer>
        <Description>{description}</Description>
        <Button
          type="link"
          to={{ pathname: '/restaurant', state: { title, category, image } }}
          title="Saiba mais"
          color="primary"
        >
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  )
}

export default Restaurants
