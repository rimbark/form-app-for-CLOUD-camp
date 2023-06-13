import React from 'react'
import { InitialsPropsTypes } from '../../types/initials.types'
import styles from './NameLastName.module.scss'

export const NameLastName = ({ name, lastname }: InitialsPropsTypes) => {
  const { container } = styles
  return <div className={container}>{name + ` ` + lastname}</div>
}
