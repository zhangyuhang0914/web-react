import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'

const CustomButton: React.FC<ButtonProps> = ({ size = 'default', shape = 'default', ...rest }) => {
  let className = ''
  if (size !== 'default') {
    className += ` ${size}`
  }
  if (shape !== 'default') {
    className += ` ${shape}`
  }
  return <Button className={className.trim()} {...rest} />
}

export default CustomButton
