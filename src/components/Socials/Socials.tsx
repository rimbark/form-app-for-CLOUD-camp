import React from 'react'
import { SocialUrl } from '../SocialUrl/SocialUrl'
import { socialNetworks } from './Socials.constants'
import styles from './Socials.module.scss'

export const Socials = () => {
  const { container } = styles
  return (
    <div className={container}>
      {socialNetworks.map((item) => (
        <SocialUrl key={item.url} url={item.url} socialName={item.socialName} />
      ))}
    </div>
  )
}
