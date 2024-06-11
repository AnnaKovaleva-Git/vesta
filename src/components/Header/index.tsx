import React from 'react'
import Link from 'next/link'
import { Button } from '@components/Button'
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
  {
    link: '/#footer',
    name: 'Контакты',
  },
]

export const Header: FC = React.memo(() => (
  <header
    style={{
      width: px2vw(1100),
      paddingTop: px2vw(32),
    }}
    className="flex items-center justify-between">
    <Link href="/">
      <Logo style={{ width: px2vw(80) }} />
    </Link>

    {arr.map(item => (
      <Link key={item.name} href={item.link}>
        <Typography
          type="a"
          typography="Body"
          className="text-stroke hover:text-secondary-hover">
          {item.name}
        </Typography>
      </Link>
    ))}

    <Link href={vars.links.writeUs}>
      <Button>Написать</Button>
    </Link>
  </header>
))
