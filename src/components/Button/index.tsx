import React from 'react'
import { px2vw } from '@functions/px2vw'

type OwnPropertyType = {}

export const Button: FC<OwnPropertyType> = ({ children }) => (
  <button
    className="rounded bg-primary-enable text-base font-bold leading-relaxed text-stroke hover:bg-primary-hover active:bg-primary-active"
    style={{
      height: px2vw(50),
      padding: px2vw(8),
      minWidth: px2vw(183),
      fontSize: px2vw(18),
    }}>
    {children}
  </button>
)
