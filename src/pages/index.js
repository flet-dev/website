import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SignupForm from '@site/src/components/signup-form'
import CodeBlock from '@theme/CodeBlock';
import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: <><Translate>From idea to app in minutes</Translate></>,
    imageUrl: 'img/pages/home/feature-bolt.svg',
    description: (
      <><Translate id="homepage.card_1">{'An internal tool or a dashboard for your team, weekend project, data entry form, kiosk app or high-fidelity prototype - Flet is an ideal framework to quickly hack a great-looking interactive apps to serve a group of users.'}</Translate>
      </>
    ),
  },
  {
    title: <><Translate>Simple architecture</Translate></>,
    imageUrl: 'img/pages/home/feature-house.svg',
    description: (
      <>
        <Translate id="homepage.card_2">{'No more complex architecture with JavaScript frontend, REST API backend, database, cache, etc. With Flet you just write a monolith stateful app in Python only and get multi-user, realtime Single-Page Application (SPA).'}</Translate>
      </>
    ),
  },
  {
    title: <><Translate>Batteries included</Translate></>,
    imageUrl: 'img/pages/home/feature-battery.svg',
    description: (
      <>
        <Translate id="homepage.card_3">{'To start developing with Flet, you just need your favorite IDE or text editor. No SDKs, no thousands of dependencies, no complex tooling - Flet has built-in web server with assets hosting and desktop clients.'}</Translate>
      </>
    ),
  },
  {
    title: <><Translate>Powered by Flutter</Translate></>,
    imageUrl: 'img/pages/home/feature-flutter.svg',
    description: (
      <>
        <Translate id="homepage.card_4"
        values={{
          linkflutter: (
            <Link to="https://flutter.dev">
              <Translate
                id="homepage.homepage.card_4.linkFlutter"
              >
                Flutter
              </Translate>
            </Link>
          ),
        }}>
          {'Flet UI is built with {linkflutter}, so your app looks professional and can be delivered to any platform. Flet simplifies Flutter model by combining smaller "widgets" into ready-to-use "controls" with imperative programming model.'}</Translate>
        
      </>
    ),
  },
  {
    title: <><Translate>Speaks your language</Translate></>,
    imageUrl: 'img/pages/home/feature-language.svg',
    description: (
      <>
        <Translate id="homepage.card_5"
        values={{
          linkPython: (
            <Link to="/docs/getting-started/python">
              <Translate
                id="homepage.homepage.card_5.linkPython"
              >
                Python
              </Translate>
            </Link>
          ),
          linkroadmap: (
            <Link to="/docs/roadmap">
              <Translate
                id="homepage.homepage.card_5.linkroadmap"
              >
              coming next
              </Translate>
            </Link>
          ),
        }}>
          {'Flet is language-agnostic, so anyone on your team could develop Flet apps in their favorite language. {linkPython} is already supported, Go, C# and others are {linkroadmap}'}</Translate>
        
      </>
    ),
  },
  {
    title: <><Translate>Deliver to any device</Translate></>,
    imageUrl: 'img/pages/home/feature-mobile.svg',
    description: (
      <>
                <Translate id="homepage.card_6"
        values={{
          linkPWA: (
            <Link to="https://web.dev/what-are-pwas/">
              <Translate
                id="homepage.homepage.card_6.linkPWA"
              >
                PWA
              </Translate>
            </Link>
          ),
        }}>
          {'Deploy Flet app as a web app and view it in a browser. Package it as a standalone desktop app for Windows, macOS and Linux. Install it on mobile as {linkPWA} or view via Flet app for iOS and Android.'}</Translate>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  
  return (
    <Layout
      title={`${translate({ message:siteConfig.customFields.heroTitle })}`}
      description={`${translate({ message:siteConfig.tagline })}`}>
      <main>
        <div className="container margin-bottom--lg">
          <div className={clsx('flet-hero', styles.heroBanner)}>
            <div className="row">
              <div className="col  col--6">
                {/* <h2>It's amazing how little code you need to get amazing results!</h2> */}
                <img src="img/pages/home/flet-home.png" style={{ width: '100%' }}></img>
              </div>
              
              <div className="col col--6">
                <h1 className="hero__title">
                <Translate id="homepage.heroTitle">
                {siteConfig.customFields.heroTitle}
                </Translate></h1>
                <p className="hero__subtitle">
                <Translate id="homepage.heroSubTitle">
                {siteConfig.customFields.heroSubTitle}
                </Translate>
                  </p>
                <div className={styles.buttons}>
                  <Link
                    className={styles.indexCtasGetStartedButton}
                    to={useBaseUrl('docs/')}>
                    <Translate>Get Started</Translate>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text--center">
          <h2><Translate>Main features</Translate></h2>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
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
  );
}

export default Home;