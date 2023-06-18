import fileImage from 'images/FileHomePage.png'
import React from 'react'
import styles from './SocialUrl.module.scss'
import { SocialUrlPropsTypes } from './SocialUrlPropsTypes.types'

export const SocialUrl = ({ url, socialName }: SocialUrlPropsTypes) => {
  const { container } = styles

  return (
    <div className={container}>
      <img src={fileImage} alt="FileHomePage" />
      <div>
        <a href={url}>{socialName}</a>
      </div>
    </div>
  )
}
