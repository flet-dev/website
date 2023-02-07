---
title: Gallery
sidebar_label: Gallery
slug: gallery
---

import Card from '@site/src/components/card';

export const GalleryCard = ({title, liveUrl, sourcesUrl, description, imageUrl}) => (
    <div className="margin-bottom--lg">
      <Card>
        <a className="gallery-live-link" href={liveUrl}>
          <img src={"/img/gallery/" + imageUrl} className="screenshot-100"/>
          <h2>{title}</h2>
          <div className="gallery-description">{description}</div>
        </a>
        <a className="gallery-github-link" href={sourcesUrl}>Source code</a>
      </Card>
    </div>
);

<div className="margin-top--lg">
  <section className="gallery-grid">
    <GalleryCard
      title="To-Do"
      imageUrl="todo.png"
      description="A classic To-Do app inspired by TodoMVC project."
      liveUrl="https://flet-todo.pages.dev"
      sourcesUrl="#"
      />
    <GalleryCard
      title="Icons browser"
      imageUrl="icons-browser.png"
      description="Quickly search through icons collection to use in your app."
      liveUrl="https://flet-icons-browser.pages.dev"
      sourcesUrl="#"
      />
    <GalleryCard
      title="Calc"
      imageUrl="calc.png"
      liveUrl="https://flet-calc.pages.dev"
      sourcesUrl="#"
      />
    <GalleryCard
      title="Solitaire"
      imageUrl="solitaire.png"
      liveUrl="https://flet-solitaire.pages.dev"
      sourcesUrl="#"
      />
    <GalleryCard
      title="Trolli"
      imageUrl="trolli.png"
      liveUrl="https://flet-boards.pages.dev"
      sourcesUrl="#" 
      />
  </section>
</div>