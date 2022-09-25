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
    title: <>从想法到APP只要几分钟</>,
    imageUrl: 'img/pages/home/feature-bolt.svg',
    description: (
      <>
        一个您团队的内部工具或数据大屏、业余项目、数据收集表、布告板应用或全真原型——Flet都是快速码出一个服务众多用户的美观可交互应用的理想框架。
      </>
    ),
  },
  {
    title: <>简单的架构</>,
    imageUrl: 'img/pages/home/feature-house.svg',
    description: (
      <>
        没有复杂的JavaScript前端架构、REST API后端、数据库、缓存等。在Flet的帮助下你只需要用Python写一个有状态的一体应用，且它能做到多用户、实时单页等(SPA)。
      </>
    ),
  },
  {
    title: <>自备动力</>,
    imageUrl: 'img/pages/home/feature-battery.svg',
    description: (
      <>
        要开始基于Flet的开发，您仅需您惯用的IDE或文本编辑器即可。无需若干SDK，无需成百上千个依赖，无需复杂的工具——Flet有内建的可托管资源的Web服务器与桌面客户端。
      </>
    ),
  },
  {
    title: <>基于Flutter</>,
    imageUrl: 'img/pages/home/feature-flutter.svg',
    description: (
      <>
        Flet UI基于<a href="https://flutter.dev">Flutter</a>构建，因此您的应用会看起来更专业并能分发至各种平台。Flet通过将较小的“widgets”组合成“controls”，用命令式编程模型简化了Flutter模型。
      </>
    ),
  },
  {
    title: <>用你熟悉的语言</>,
    imageUrl: 'img/pages/home/feature-language.svg',
    description: (
      <>
        Flet是无语言障碍的，因此您团队中任何人都可以用他们熟悉的语言来开发Flet应用。目前已支持<a href="/docs/guides/python/getting-started">Python</a>，Go、C#及其他语言的支持<a href="/docs/roadmap">即将推出</a>。
      </>
    ),
  },
  {
    title: <>在各类设备上分发</>,
    imageUrl: 'img/pages/home/feature-mobile.svg',
    description: (
      <>
        像Web应用那样部署Flet应用并在浏览器里体验它。或将其打包为在Windows、macOS和Linux上独立的桌面端应用。在移动设备上安装为<a href="https://web.dev/what-are-pwas/">渐进式应用</a>或通过适用于iOS和Android的Flet应用来体验。
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
                    马上开始
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text--center">
          <h2>主要特性</h2>
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