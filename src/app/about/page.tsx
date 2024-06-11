import { NextPage } from 'next'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'
import { vars } from '@config/vars'

const width = px2vw(1100)

const AboutPage: NextPage = () => (
  <div className="flex min-h-screen w-full flex-col items-center">
    {/*   Первый блок: Начало   */}
    <div
      className="flex w-full justify-center bg-white"
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
          {vars.text.about.title}
        </Typography>

        <Typography
          typography="Body"
          style={{
            fontSize: px2vw(16),
            width: px2vw(589),
            marginBottom: px2vw(64),
          }}
          className="text-center text-gray">
          {vars.text.about.body}
        </Typography>

        <img
          src="images/AboutMain.png"
          style={{
            width,
            height: px2vw(523),
          }}
        />

        <div
          className="flex w-full items-start justify-between"
          style={{ marginTop: px2vw(32) }}>
          <Typography
            typography="H3"
            style={{
              fontSize: px2vw(24),
              width: px2vw(480),
            }}
            className="text-background">
            {vars.text.aboutBlock.title}
          </Typography>
          <Typography
            typography="Body"
            style={{
              fontSize: px2vw(16),
              width: px2vw(539),
            }}
            className="whitespace-pre-line text-gray">
            {vars.text.aboutBlock.body}
          </Typography>
        </div>
      </div>
    </div>
    {/*    */}
    <div
      className="flex w-full justify-center bg-stroke"
      style={{
        paddingTop: px2vw(32),
        paddingBottom: px2vw(32),
      }}>
      <div className="flex items-center justify-between" style={{ width }}>
        <img
          src="images/aLast.png"
          style={{
            width: px2vw(483),
            height: px2vw(626),
          }}
        />
        <div className="flex flex-col">
          <Typography
            typography="H3"
            style={{
              fontSize: px2vw(32),
              width: px2vw(258),
              fontWeight: 700,
            }}
            className="whitespace-pre-line text-background ">
            {vars.text.aboutFooter.title}
          </Typography>
          <Typography
            typography="Body"
            style={{
              fontSize: px2vw(16),
              width: px2vw(539),

              marginTop: px2vw(24),
            }}
            className="whitespace-pre-line text-gray">
            {vars.text.aboutFooter.body}
          </Typography>
        </div>
      </div>
    </div>
  </div>
)
// Компонент страницы: Конец

// Экспорт страницы: Начало
export default AboutPage
// Экспорт страницы: Конец
