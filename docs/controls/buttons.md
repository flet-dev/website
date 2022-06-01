---
title: Buttons
sidebar_label: Buttons
slug: buttons
---

import Card from '@site/src/components/card';

export const ImageCard = ({title, href, imageUrl}) => (
    <div class="col col--4 margin-bottom--lg">
      <Card href={href}>
        <img src={"/img/docs/controls/button/" + imageUrl}/>
        <h2>{title}</h2>
      </Card>
    </div>
);

<div class="margin-top--lg">
  <section class="row">
    <ImageCard title="Elevated" href="elevatedbutton" imageUrl="elevated-button.png" />
    <ImageCard title="Filled" href="filledbutton" imageUrl="filled-button.png" />
    <ImageCard title="Filled Tonal" href="filledtonalbutton" imageUrl="filled-tonal-button.png" />
    <ImageCard title="Outlined" href="outlinedbutton" imageUrl="outlined-button.png" />
    <ImageCard title="Text Button" href="textbutton" imageUrl="text-button.png" />
    <ImageCard title="Icon Button" href="iconbutton" imageUrl="icon-button.png" />
    <ImageCard title="Floating Action" href="floatingactionbutton" imageUrl="floating-action-button.png" />
    <ImageCard title="Popup Menu" href="popupmenubutton" imageUrl="popup-menu.gif" />
  </section>
</div>