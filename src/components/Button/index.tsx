import { Link, Location, To } from 'react-router-dom'
import { ButtonContainer } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: To | Location
  onClick?: () => void
  children: React.ReactNode
  large?: boolean
  color?: 'primary' | 'secundary'
}

const Button = ({
  type = 'button',
  title,
  to = '/',
  onClick,
  children,
  color = 'primary',
  large = false
}: Props) => {
  if (type === 'link') {
    return (
      <ButtonContainer
        as={Link}
        to={to}
        title={title}
        color={color}
        large={large}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonContainer
      as="button"
      type="button"
      title={title}
      onClick={onClick}
      color={color}
      large={large}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
