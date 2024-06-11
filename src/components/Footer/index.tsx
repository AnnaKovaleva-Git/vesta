import React from 'react'
import Link from 'next/link'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'
import Logo from '@config/logo/Logo.svg'
import { vars } from '@config/vars'

const arr = [
  {
    link: '/',
    name: 'Главная',
  },
  {
    link: '/about',
    name: 'О нас',
  },
  {
    link: '/services',
    name: 'Услуги',
  },
]

export const Footer: FC = React.memo(() => (
  <footer
    id="footer"
    style={{
      width: px2vw(1100),
      // paddingTop: px2vw(12),
      paddingBottom: px2vw(72),
    }}
    className="flex items-start justify-between">
    <Link href="/">
      <div className="flex items-center">
        <Logo style={{ width: px2vw(80) }} />

        <Typography
          typography="Body"
          className="text-stroke hover:text-secondary-hover"
          style={{
            fontSize: px2vw(24),
            fontWeight: 300,
            paddingBottom: px2vw(12),
            paddingLeft: px2vw(18),
          }}>
          {vars.text.title}
        </Typography>
      </div>
    </Link>
    <div className="flex">
      <div className="flex flex-col items-end">
        {arr.map(ele => (
          <Link key={ele.name} href={ele.link}>
            <Typography
              typography="Body"
              className="text-stroke hover:text-secondary-hover"
              style={{
                fontSize: px2vw(24),
                fontWeight: 300,
                paddingBottom: px2vw(12),
                paddingRight: px2vw(72),
              }}>
              {ele.name}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-end">
        <Typography
          typography="Body"
          className="text-stroke hover:text-secondary-hover"
          style={{
            fontSize: px2vw(24),
            fontWeight: 600,
            paddingBottom: px2vw(12),
          }}>
          Контакты:
        </Typography>
        <Link href={vars.links.writeMail}>
          <Typography
            typography="Body"
            className="text-stroke hover:text-secondary-hover"
            style={{
              fontSize: px2vw(18),
              fontWeight: 300,
            }}>
            {vars.text.contacts.contactName}
          </Typography>
        </Link>
        <Link href={vars.links.telLink}>
          <Typography
            typography="Body"
            className="text-stroke hover:text-secondary-hover"
            style={{
              fontSize: px2vw(18),
              fontWeight: 300,
            }}>
            {vars.text.contacts.telTitle}
          </Typography>
        </Link>
      </div>
    </div>
  </footer>
))
