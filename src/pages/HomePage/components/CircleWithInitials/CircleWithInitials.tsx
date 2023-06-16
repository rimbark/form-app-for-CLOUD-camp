import React from 'react'
import { InitialsPropsTypes } from 'types/initials.types'
import styles from './CircleWithInitials.module.scss'

export const CircleWithInitials = ({ name, lastname }: InitialsPropsTypes) => {
  const { container } = styles
  return <div className={container}>{name[0] + lastname[0]}</div>
}
