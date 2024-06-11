import React, { ReactNode } from 'react'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'

type OwnPropertyType = {
  title: string
  body: string
  SVG: ReactNode
}

export const Slogan: FC<OwnPropertyType> = ({ title, body, SVG }) => (
  <div className="m-6 flex items-start justify-start">
    {SVG}

    <div
      className="ml-4 box-border flex flex-col"
      style={{
        width: px2vw(234),
      }}>
      <Typography
        typography="H3"
        className="text-background"
        style={{ fontSize: px2vw(24) }}>
        {title}
      </Typography>
      <Typography
        typography="Body"
        className="mt-4 text-gray"
        style={{ fontSize: px2vw(16) }}>
        {body}
      </Typography>
    </div>
  </div>
)
