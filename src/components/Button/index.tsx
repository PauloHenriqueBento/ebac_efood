import { Link, Location, To } from 'react-router-dom'
import { ButtonContainer } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: To | Location
  onClick?: () => void
  children: React.ReactNode
  large?: boolean
  color?: 'primary' | 'secundary'
  disabled?: boolean
}

const Button = ({
  type = 'button',
  title,
  to = '/',
  onClick,
  children,
  color = 'primary',
  large = false,
  disabled
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
      as={type}
      type="button"
      title={title}
      onClick={onClick}
      color={color}
      large={large}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
