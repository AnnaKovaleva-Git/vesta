import React, { AnchorHTMLAttributes } from 'react'
import { px2vw } from '@functions/px2vw'

export type TypographyType = 'H1' | 'H2' | 'H2Caps' | 'H3' | 'Body'

type ElementType =
  | 'a'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'

const typographyToTailwindClass: Record<TypographyType, string> = {
  H1: 'font-semibold',
  H2: 'font-medium',
  H2Caps: 'font-medium uppercase',
  H3: 'font-semibold',
  Body: 'font-light',
}

const sizeDic: Record<TypographyType, number> = {
  H1: 38,
  H2: 32,
  H2Caps: 32,
  H3: 25,
  Body: 20,
}

type OwnPropertyType = {
  typography: TypographyType
  element?: ElementType
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Typography: FC<OwnPropertyType> = ({
  typography,
  element = 'span',
  className: clsname = '',
  children,
  ...props
}) => {
  const className = `${clsname} ${typographyToTailwindClass[typography]}`

  return React.createElement(
    element,
    {
      className,
      style: { fontSize: px2vw(sizeDic[typography]) },
      ...props,
    },
    children
  )
}

Typography.displayName = 'Typography'
