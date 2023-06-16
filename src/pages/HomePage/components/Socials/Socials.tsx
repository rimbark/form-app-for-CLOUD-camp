import React from 'react'
import { socialNetworks } from './Socials.constants'
import styles from './Socials.module.scss'
import { SocialUrl } from './SocialUrl/SocialUrl'

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
