import React from 'react'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'

type OwnPropertyType = {
  title: string
  body: string
}

export const Service: FC<OwnPropertyType> = React.memo(({ title, body }) => (
  <div className="flex flex-col">
    <Typography
      typography="H3"
      style={{
        fontSize: px2vw(32),
        width: px2vw(258),
        fontWeight: 700,
      }}
      className="whitespace-pre-line text-background ">
      {title}
    </Typography>

    <div
      className="bg-secondary-enable"
      style={{
        width: px2vw(128),
        height: px2vw(8),
      }}
    />

    <Typography
      typography="Body"
      style={{
        fontSize: px2vw(16),
        width: px2vw(539),

        marginTop: px2vw(24),
      }}
      className="whitespace-pre-line text-gray">
      {body}
    </Typography>
  </div>
))
