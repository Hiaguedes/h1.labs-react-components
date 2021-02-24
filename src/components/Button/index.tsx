import React from 'react'
import { ButtonStyle } from './styles'

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  const { ButtonBase } = ButtonStyle

  return <ButtonBase {...props}>{children}</ButtonBase>
}

export default Button
