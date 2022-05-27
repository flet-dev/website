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

const features = [
  {
    title: <>From idea to app in minutes</>,
    imageUrl: 'img/home-languages.svg',
    description: (
      <>
        An internal tool or a dashboard for your team, weekend project, data entry form, kiosk app or high-fidelity prototype
        - Flet is an ideal framework to quickly hack a great-looking interactive apps to serve a group of users.
      </>
    ),
  },
  {
    title: <>Easy to learn</>,
    imageUrl: 'img/home-no-html.svg',
    description: (
      <>
        This is another feature we would like to tell you about.
      </>
    ),
  },
  {
    title: <>Batteries included</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        This is another feature we would like to tell you about.
      </>
    ),
  },
  {
    title: <>Powered by Flutter</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        Flet UI is built with <a href="https://flutter.dev">Flutter</a>, so your app looks professional and could be delivered to any platform.
        Flet simplifies Flutter model by combining smaller "widgets" to ready-to-eat "controls" with imperative programming model.
      </>
    ),
  },
  {
    title: <>Speaks your language</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        Flet is language-agnostic, so anyone on your team could develop Flet apps in their favorite language. <a href="/docs/getting-started/python">Python</a> is already supported, Go, C# and others are <a href="/docs/roadmap">coming next</a>.
      </>
    ),
  },
  {
    title: <>Deliver to any device</>,
    imageUrl: 'img/home-zero-deploy.svg',
    description: (
      <>
        Deploy Flet app as a web and view it in the browser. Package it as a standalone desktop app for Windows, macOS and Linux.
        Install it on mobile as <a href="https://web.dev/what-are-pwas/">PWA</a> or view via Flet app for iOS and Android.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
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
      title={`${siteConfig.customFields.heroTitle}`}
      description={`${siteConfig.tagline}`}>
      <main>
        <div className="container margin-bottom--lg">
          <div className={clsx('flet-hero', styles.heroBanner)}>
            <div className="row">
              <div className="col  col--6">
                {/* <h2>It's amazing how little code you need to get amazing results!</h2> */}
                <img src="img/pages/home/flet-home.png" style={{ width: '100%' }}></img>
              </div>
              <div className="col col--6">
                <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
                <p className="hero__subtitle">{siteConfig.customFields.heroSubTitle}</p>
                <div className={styles.buttons}>
                  <Link
                    className={styles.indexCtasGetStartedButton}
                    to={useBaseUrl('docs/')}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text--center">
          <h2>Main features</h2>
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