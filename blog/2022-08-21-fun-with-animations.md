---
slug: fun-with-animations
title: Fun with animations
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

Despite Flet release debuting animations support was released some time ago, we've just finished documenting its new features! We all know if the feature is not documented it just doesn't exist! 😉

Flutter offers [multiple approaches](https://docs.flutter.dev/development/ui/animations) for creating animations such "implicit", "explicit", "tween", "stagered", "pre-canned" animations as well as displaying animation scenes prepared in Rive and Lottie editors.

So, we are starting with "implicit" animations which allows you to animate a control property by setting a target value; whenever that target value changes, the control animates the property from the old value to the new one.

<a href="https://flet-animation.herokuapp.com/"><img src="/img/blog/animations/flet-animation-demo.gif" className="screenshot-100" /></a>

<div style={{fontSize: "1.1rem", textAlign: "center", padding: "1rem" }}>
<a href="https://flet-animation.herokuapp.com/">Check out the live demo!</a>
</div>

[Explore demo sources](https://github.com/flet-dev/flet-heroku-app). It's hosted on Heroku, by the way, so you can use it as a starting point for your own deployments.

Implicit animations can be enabled for the following control properties:

* [Opacity](/docs/guides/python/animations#opacity-animation)
* [Rotation](/docs/guides/python/animations#rotation-animation) (new in this release)
* [Scale](/docs/guides/python/animations#scale-animation) (new in this release)
* [Offset](/docs/guides/python/animations#offset-animation) (new in this release)
* [Position](/docs/guides/python/animations#position-animation)

Additionally, all `Container` control properties [can be now animated](/docs/guides/python/animations#animated-container) and there is a new [`AnimatedSwitcher`](/docs/controls/animatedswitcher) control for animated transition between old a new content.

<img src="/img/docs/controls/animated-switcher/animated-switcher.gif" className="screenshot-20" />

[Give Flet a try](/docs/guides/python/getting-started) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!