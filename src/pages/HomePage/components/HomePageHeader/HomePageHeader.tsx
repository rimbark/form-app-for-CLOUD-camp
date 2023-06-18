import React from 'react'
import { CircleWithInitials } from '../CircleWithInitials/CircleWithInitials'
import { NameLastName } from '../NameLastName/NameLastName'
import { NameLastNameTypes } from '../NameLastName/NameLastName.types'
import { Socials } from '../Socials/Socials'
import styles from './HomePageHeader.module.scss'

export const HomePageHeader = ({ nameLastName }: NameLastNameTypes) => {
  const { container, headBlockContainerItem } = styles
  const { name, lastname } = nameLastName

  return (
    <div className={container}>
      <CircleWithInitials name={name} lastname={lastname} />
      <div className={headBlockContainerItem}>
        <NameLastName name={name} lastname={lastname} />
        <Socials />
      </div>
    </div>
  )
}
