---
title: Gallery
slug: gallery
---

import Card from '@site/src/components/card';

export const GalleryCard = ({title, liveUrl, sourcesUrl, description, imageUrl}) => (
    <Card>
      <a className="gallery-live-link" href={liveUrl}>
        <img src={"/img/gallery/" + imageUrl} className="screenshot-100"/>
        <h2>{title}</h2>
        <div className="gallery-description">{description}</div>
      </a>
      <div className="gallery-footer">
        <a className="gallery-github-link" href={sourcesUrl} title="View source code"></a>
      </div>
    </Card>
);

# Gallery

<div className="margin-top--lg">
  <section className="gallery-grid">
    <GalleryCard
      title="Controls gallery"
      imageUrl="controls-gallery.png"
      description="Interactive showcase app for Flet controls with code samples."
      liveUrl="https://flet-controls-gallery.fly.dev/"
      sourcesUrl="https://github.com/flet-dev/examples/tree/main/python/apps/controls-gallery"
      />
    <GalleryCard
      title="To-Do"
      imageUrl="todo.png"
      description="A classic To-Do app inspired by TodoMVC project."
      liveUrl="https://gallery.flet.dev/todo/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py"
      />
    <GalleryCard
      title="Icons browser"
      imageUrl="icons-browser.png"
      description="Quickly search through icons collection to use in your app."
      liveUrl="https://gallery.flet.dev/icons-browser/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py"
      />
    <GalleryCard
      title="Calculator"
      imageUrl="calc.png"
      description="A simple calculator app."
      liveUrl="https://gallery.flet.dev/calculator/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc.py"
      />
    <GalleryCard
      title="Solitaire"
      imageUrl="solitaire.png"
      description="Learn how to handle gestures and position controls on a page."
      liveUrl="https://gallery.flet.dev/solitaire/"
      sourcesUrl="https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-final-part1"
      />
    <GalleryCard
      title="Chat"
      imageUrl="chat.gif"
      description="Multi-user realtime chat."
      liveUrl="https://flet-chat.fly.dev"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/tutorials/chat/chat.py" 
      />
    <GalleryCard
      title="Flet animation"
      imageUrl="flet-animation.png"
      description="Implicit animations in Flet."
      liveUrl="https://gallery.flet.dev/flet-animation/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/flet-animation/main.py" 
      />
    <GalleryCard
      title="Counter"
      imageUrl="counter.png"
      description="Counter with button click event handlers."
      liveUrl="https://gallery.flet.dev/counter/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/counter/counter.py" 
      />
    <GalleryCard
      title="Routing"
      imageUrl="routing.gif"
      description="URL routing between views."
      liveUrl="https://gallery.flet.dev/simple-routing/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/routing-navigation/home-store.py" 
      />
    <GalleryCard
      title="Hello, world!"
      imageUrl="hello-world.png"
      description="All examples start with that!"
      liveUrl="https://gallery.flet.dev/hello-world/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/hello-world/hello.py" 
      />
    <GalleryCard
      title="Greeter"
      imageUrl="greeter.png"
      description="Interactive form in Flet."
      liveUrl="https://gallery.flet.dev/greeter/"
      sourcesUrl="https://github.com/flet-dev/examples/blob/main/python/apps/greeter/greeter.py" 
      />
  </section>
</div>