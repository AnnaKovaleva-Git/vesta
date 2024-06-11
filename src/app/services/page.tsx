import { NextPage } from 'next'
import { Service } from '@components/Service'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'
import { vars } from '@config/vars'

const width = px2vw(1100)

// Компонент страницы: Начало
const ServicesPage: NextPage = () => (
  <div className="flex min-h-screen w-full flex-col items-center">
    {/*   Первый блок: Начало   */}
    <div
      className="flex w-full flex-col items-center justify-center bg-white"
      style={{ marginTop: px2vw(32) }}>
      <div
        className="flex flex-col items-center"
        style={{
          marginTop: px2vw(96),
          marginBottom: px2vw(96),
        }}>
        <Typography
          typography="H3"
          style={{
            fontSize: px2vw(32),
            marginBottom: px2vw(24),
          }}
          className="text-background">
          {vars.text.services.title}
        </Typography>

        <Typography
          typography="Body"
          style={{
            fontSize: px2vw(16),
            width: px2vw(589),
            marginBottom: px2vw(64),
          }}
          className="text-center text-gray">
          {vars.text.services.body}
        </Typography>
      </div>

      <div
        className="flex flex-col items-center justify-center"
        style={{ width }}>
        <div
          className="flex items-center justify-center"
          style={{ marginBottom: px2vw(64) }}>
          <img
            src="images/s1.png"
            style={{
              width: px2vw(540),
              height: px2vw(367),
            }}
          />
          <div style={{ width: px2vw(32) }} />
          <Service
            title={vars.text.service.first.title}
            body={vars.text.service.first.body}
          />
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginBottom: px2vw(64) }}>
          <Service
            title={vars.text.service.second.title}
            body={vars.text.service.second.body}
          />

          <div style={{ width: px2vw(32) }} />
          <img
            src="images/s2.png"
            style={{
              width: px2vw(540),
              height: px2vw(367),
            }}
          />
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginBottom: px2vw(64) }}>
          <img
            src="images/s3.png"
            style={{
              width: px2vw(540),
              height: px2vw(367),
            }}
          />
          <div style={{ width: px2vw(32) }} />
          <Service
            title={vars.text.service.third.title}
            body={vars.text.service.third.body}
          />
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginBottom: px2vw(64) }}>
          <Service
            title={vars.text.service.fourth.title}
            body={vars.text.service.fourth.body}
          />

          <div style={{ width: px2vw(32) }} />
          <img
            src="images/s4.png"
            style={{
              width: px2vw(540),
              height: px2vw(367),
            }}
          />
        </div>
      </div>
    </div>
  </div>
)
// Компонент страницы: Конец

// Экспорт страницы: Начало
export default ServicesPage
// Экспорт страницы: Конец
