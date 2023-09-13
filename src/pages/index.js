import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import SignupForm from '@site/src/components/signup-form'
import CodeBlock from '@theme/CodeBlock'
import Translate, { translate } from '@docusaurus/Translate'

const features = [
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label1.title'
          description='features label1 title'>
          From idea to app in minutes
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-bolt.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label1.content'
          description='features label1 content'>
          An internal tool or a dashboard for your team, weekend project, data
          entry form, kiosk app or high-fidelity prototype - Flet is an ideal
          framework to quickly hack a great-looking interactive apps to serve a
          group of users.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label2.title'
          description='features label2 title'>
          Simple architecture
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-house.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label2.content'
          description='features label2 content'>
          No more complex architecture with JavaScript frontend, REST API
          backend, database, cache, etc. With Flet you just write a monolith
          stateful app in Python only and get multi-user, realtime Single-Page
          Application (SPA).
        </Translate>
      </>
    ),
  },
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label3.title'
          description='features label3 title'>
          Batteries included
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-battery.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label3.content'
          description='features label3 content'>
          To start developing with Flet, you just need your favorite IDE or text
          editor. No SDKs, no thousands of dependencies, no complex tooling -
          Flet has built-in web server with assets hosting and desktop clients.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label4.title'
          description='features label4 title'>
          Powered by Flutter
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-flutter.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label4.content1'
          description='features label4 content1'>
          Flet UI is built with
        </Translate>{' '}
        <a href='https://flutter.dev'>Flutter</a>
        <Translate
          id='indexPage.features.label4.content2'
          description='features label4 content2'>
          , so your app looks professional and can be delivered to any platform.
          Flet simplifies Flutter model by combining smaller "widgets" into
          ready-to-use "controls" with imperative programming model.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label5.title'
          description='features label5 title'>
          Speaks your language
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-language.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label5.content1'
          description='features label5 content1'>
          Flet is language-agnostic, so anyone on your team could develop Flet
          apps in their favorite language.
        </Translate>{' '}
        <a href='/docs/guides/python/getting-started'>Python</a>{' '}
        <Translate
          id='indexPage.features.label5.content2'
          description='features label5 content2'>
          is already supported, Go, C# and others are
        </Translate>
        <a href='/roadmap'>
          {' '}
          <Translate
            id='indexPage.features.label5.content3'
            description='features label5 content3'>
            coming next.
          </Translate>
        </a>
      </>
    ),
  },
  {
    title: (
      <>
        <Translate
          id='indexPage.features.label6.title'
          description='features label6 title'>
          Deliver to any device
        </Translate>
      </>
    ),
    imageUrl: 'img/pages/home/feature-mobile.svg',
    description: (
      <>
        <Translate
          id='indexPage.features.label6.content1'
          description='features label6 content1'>
          Deploy Flet app as a web app and view it in a browser. Package it as a
          standalone desktop app for Windows, macOS and Linux. Install it on
          mobile as
        </Translate>{' '}
        <a href='https://web.dev/what-are-pwas/'>PWA</a>{' '}
        <Translate
          id='indexPage.features.label6.content2'
          description='features label6 content2'>
          or view via Flet app for iOS and Android.
        </Translate>
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={translate({
        id: 'indexPage.title.heroTitle',
        message: 'The fastest way to build Flutter apps in Python',
        description: 'the title heroTitle description',
      })}
      description={translate({
        id: 'indexPage.title.description',
        message:
          'Build internal web apps quickly in the language you already know.',
        description: 'the description heroSubTitle description',
      })}>
      <main>
        <div className='container margin-bottom--lg'>
          <div className={clsx('flet-hero', styles.heroBanner)}>
            <div className='row'>
              <div className='col  col--6'>
                {/* <h2>It's amazing how little code you need to get amazing results!</h2> */}
                <img
                  src='img/pages/home/flet-home.png'
                  style={{ width: '100%' }}></img>
              </div>
              <div className='col col--6'>
                <h1 className='hero__title'>
                  <Translate
                    id='indexPage.heroTitle'
                    description='the heroTitle description'>
                    The fastest way to build Flutter apps in Python
                  </Translate>
                </h1>
                <p className='hero__subtitle'>
                  <Translate
                    id='indexPage.heroSubTitle'
                    description='the heroSubTitle description'>
                    Flet enables developers to easily build realtime web, mobile
                    and desktop apps in Python. No frontend experience required.
                  </Translate>
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={styles.indexCtasGetStartedButton}
                    to={useBaseUrl('docs/')}>
                    <Translate
                      id='indexPage.button.getStarted'
                      description='the getStarted button description'>
                      Get Started
                    </Translate>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container text--center'>
          <h2>
            <Translate
              id='indexPage.features.title'
              description='the features title description'>
              Main features
            </Translate>
          </h2>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className='container'>
                <div className='row'>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
        <SignupForm />
      </main>
    </Layout>
  )
}

export default Home
