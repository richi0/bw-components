import React from 'react'
import { Button as CButton } from '@chakra-ui/react'

export interface CustomButtonProps {
  /**
   * Button lable
   */
  label: string
  /**
   * What background color to use
   */
  mode?: 'primary' | 'secondary' | 'inactive' | undefined
  /**
   * Click handler
   */
  onClick: () => void
}

export const Button: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  mode = 'primary',
}) => {
  return (
    <CButton
      onClick={onClick}
      isDisabled={mode === 'inactive' ? true : false}
      bg={mode === 'primary' ? 'primary.500' : 'secondary.500'}
    >
      <b>{label}</b>
    </CButton>
  )
}
