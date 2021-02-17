import React from 'react'
import { Button as CButton, Text } from '@chakra-ui/react'

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
  if (mode === 'primary') {
    return (
      <CButton onClick={onClick} bg="gray.900" _hover={{ bg: `gray.500` }}>
        <Text color="gray.50">{label}</Text>
      </CButton>
    )
  } else if (mode === 'secondary') {
    return (
      <CButton
        onClick={onClick}
        bg="gray.50"
        _hover={{ bg: `gray.200` }}
        border="2px"
        borderColor="gray.900"
      >
        <Text color="gray.900">{label}</Text>
      </CButton>
    )
  } else {
    return (
      <CButton
        onClick={onClick}
        bg="gray.500"
        _hover={{ bg: `gray.500` }}
        isDisabled={true}
      >
        <Text color="gray.900">{label}</Text>
      </CButton>
    )
  }
}
