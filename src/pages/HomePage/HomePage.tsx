import { BreakLine } from 'components/BreakLine/BreakLine'
import React from 'react'
import { Contacts } from './components/Contacts/Contacts'
import { HomePageHeader } from './components/HomePageHeader/HomePageHeader'
import { nameLastName } from './HomePage.constants'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  const { container } = styles
  return (
    <div className={container}>
      <HomePageHeader nameLastName={nameLastName} />
      <BreakLine />
      <Contacts />
    </div>
  )
}
