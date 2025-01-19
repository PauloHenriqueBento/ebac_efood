import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurants'

import japonesa from '../../assets/food1.png'
import italiana from '../../assets/food2.png'

const restaurant: Restaurant[] = [
  {
    id: 1,
    category: 'Japonesa',
    tag: 'Destaque da semana',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japonesa
  },
  {
    id: 2,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana
  },
  {
    id: 3,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana
  },
  {
    id: 4,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana
  },
  {
    id: 5,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana
  },
  {
    id: 6,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana
  }
]

const Home = () => (
  <>
    <RestaurantList restaurants={restaurant} />
  </>
)

export default Home
