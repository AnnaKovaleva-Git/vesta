import Link from 'next/link'
import { Slogan } from '@components/Slogan'
import { Typography } from '@components/Typography'
import { px2vw } from '@functions/px2vw'
import Logo1 from '@config/logo/partners/1.svg'
import Logo2 from '@config/logo/partners/2.svg'
import Logo3 from '@config/logo/partners/3.svg'
import Logo4 from '@config/logo/partners/4.svg'
import Logo5 from '@config/logo/partners/5.svg'
import Logo6 from '@config/logo/partners/6.svg'
import S1 from '@config/logo/slogan/first.svg'
import S2 from '@config/logo/slogan/second.svg'
import S3 from '@config/logo/slogan/third.svg'
import { vars } from '@config/vars'

const width = px2vw(1100)

const Home = () => (
  <main className="flex min-h-screen w-full flex-col items-center">
    {/*   Первый блок: Начало   */}
    <div
      style={{
        width,
        marginTop: px2vw(96),
        marginBottom: px2vw(96),
      }}
      className="flex items-start justify-between">
      {/*   Первая колонка: Начало   */}
      <div
        className="flex flex-col"
        style={{
          width: px2vw(540),
        }}>
        <Typography
          typography="H1"
          style={{
            marginBottom: px2vw(24),
            fontSize: px2vw(38),
          }}
          className=" whitespace-pre-line text-white">
          {vars.text.main.title}
        </Typography>
        <Typography
          typography="Body"
          className="text-gray"
          style={{
            width: px2vw(500),
            fontSize: px2vw(18),
            marginBottom: px2vw(24),
          }}>
          {vars.text.main.body}
        </Typography>

        <Link href="/services">
          <Typography
            typography="Body"
            className="text-secondary-active"
            style={{
              fontSize: px2vw(14),
              fontWeight: 600,
            }}>
            Подробнее ➜
          </Typography>
        </Link>
      </div>
      {/*   Первая колонка: Конец   */}

      {/*   Вторая колонка: Начало   */}
      <div>
        <img
          src="images/MainPage.png"
          alt=""
          style={{
            width: px2vw(440),
            height: px2vw(350),
          }}
        />
      </div>
      {/*   Вторая колонка: Конец   */}
    </div>
    {/*   Первый блок: Конец   */}

    {/*   Наши партнеры: Начало   */}
    <div
      className="flex w-full items-center justify-center border-b-stroke bg-stroke"
      style={{
        paddingTop: px2vw(72),
        paddingBottom: px2vw(72),
      }}>
      <div
        className="flex items-center justify-center gap-4 overflow-y-hidden"
        style={{
          width,
          minHeight: px2vw(32),
        }}>
        <Logo1 style={{ height: px2vw(24) }} />
        <Logo2 style={{ height: px2vw(24) }} />
        <Logo3 style={{ height: px2vw(24) }} />
        <Logo4 style={{ height: px2vw(24) }} />
        <Logo5 style={{ height: px2vw(24) }} />
        <Logo6 style={{ height: px2vw(24) }} />
      </div>
    </div>
    {/*   Наши партнеры: Конец   */}

    {/*   Слоганы: Начало   */}
    <div className="flex w-full items-start justify-center overflow-y-hidden bg-stroke">
      <Slogan
        key="s1"
        title={vars.text.slogan.first.title}
        body={vars.text.slogan.first.body}
        SVG={<S1 style={{ width: px2vw(38) }} />}
      />

      <Slogan
        key="s2"
        title={vars.text.slogan.second.title}
        body={vars.text.slogan.second.body}
        SVG={<S2 style={{ width: px2vw(38) }} />}
      />

      <Slogan
        key="s3"
        title={vars.text.slogan.third.title}
        body={vars.text.slogan.third.body}
        SVG={<S3 style={{ width: px2vw(38) }} />}
      />
    </div>
    {/*   Слоганы: Конец   */}

    {/*   Направления: Начало   */}
    <div
      className="flex w-full flex-col items-center bg-stroke"
      style={{
        paddingTop: px2vw(96),
        paddingBottom: px2vw(96),
      }}>
      <div
        style={{
          width,
        }}
      />
      <Typography
        typography="H3"
        style={{
          fontSize: px2vw(32),
          marginBottom: px2vw(24),
        }}
        className="text-background">
        {vars.text.directions.title}
      </Typography>

      <Typography
        typography="Body"
        style={{
          fontSize: px2vw(16),
          width: px2vw(589),
          marginBottom: px2vw(64),
        }}
        className="text-center text-gray">
        {vars.text.directions.body}
      </Typography>

      <div className="flex">
        {/*  Левая: Начало */}
        <div className="flex flex-col" style={{ marginRight: px2vw(24) }}>
          <img
            src="images/m1.png"
            alt=""
            style={{
              width: px2vw(538),
              height: px2vw(583),
            }}
          />

          <Typography
            typography="H3"
            className="text-background"
            style={{
              fontSize: px2vw(18),
              marginBottom: px2vw(46),
              marginTop: px2vw(12),
              fontWeight: 700,
            }}>
            {vars.text.directions.t1}
          </Typography>

          <img
            src="images/m3.png"
            alt=""
            style={{
              width: px2vw(538),
              height: px2vw(367),
            }}
          />

          <Typography
            typography="H3"
            className="text-background"
            style={{
              fontSize: px2vw(18),
              marginTop: px2vw(12),
              fontWeight: 700,
            }}>
            {vars.text.directions.t3}
          </Typography>
        </div>
        {/*  Левая: Конец */}

        {/*  Правая: Начало */}
        <div className="flex flex-col">
          <img
            src="images/m2.png"
            alt=""
            style={{
              width: px2vw(538),
              height: px2vw(367),
            }}
          />

          <Typography
            typography="H3"
            className="text-background"
            style={{
              fontSize: px2vw(18),
              marginBottom: px2vw(46),
              marginTop: px2vw(12),
              fontWeight: 700,
            }}>
            {vars.text.directions.t2}
          </Typography>

          <img
            src="images/m4.png"
            alt=""
            style={{
              width: px2vw(538),
              height: px2vw(583),
            }}
          />
          <Typography
            typography="H3"
            className="text-background"
            style={{
              fontSize: px2vw(18),
              marginBottom: px2vw(46),
              marginTop: px2vw(12),
              fontWeight: 700,
            }}>
            {vars.text.directions.t4}
          </Typography>
        </div>
        {/*  Правая: Конец */}
      </div>
    </div>
    {/*   Направления: Конец   */}
  </main>
)

export default Home
