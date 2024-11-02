---
title: Solar System
publishDate: 2024-09-01 00:00:00
order: 10
img: /assets/solar-system.jpg
img_alt: Planets orbiting the sun
description: |
  Using React and ThreeJS I created our solar system in 3D that runs in the browser
tags:
  - Design
  - Development
  - Content Management System
type: personal
---

## More Details Coming Soon ...

See the project live here: <a href="https://mfisli.github.io/solar-system/" target="_blank">Solar System</a>

See the code here: <a href="https://github.com/mfisli/solar-system" target="_blank">GitHub</a>

The main motivation came up during a conversation with a friend. They said "what's the first planet from the sun? Is it Venus? What was the planet that was demoted? Was it the blue one - Uranus?" I politely corrected him that Mercury was the first and Uranus is still very much a major body in the solar system, unlike Pluto.

This got me to pull up images of the solar system to better refresh both of our knowledge. Another thing that came up was the relative distance between the planets and their size in relation to the sun. Many of these images showed the planets having a roughly similar size and fairly close to one another. While this is easy to comprehend, it is not a good model for how vast and big things really are.

Feeling inspired, I learned how to use <a href="https://threejs.org/" target="_blank">ThreeJS</a> with React and rendered some simple spheres with textures orbiting around the sun. However, it was difficult to introduce dynamic values, like changing the scale and distance during runtime. I also wanted the user to be able to click on a planet and have the camera orbit. Attaching these listeners was clunky too.

A good solution was to introduce <a href="https://r3f.docs.pmnd.rs/getting-started/introduction" target="_blank">React Three Fiber</a> so that ThreeJS objects could be represented as components using JSX within React. To further ease and quicken development time I also used the library <a href=" https://drei.docs.pmnd.rs/getting-started/introduction" target="_blank">Drei</a>, which offers helpers and abstractions for React Three Fiber. 

After about a week, the end result is a 3D representation of our solar system. It runs in the browser with a menu that allows the changing of size and distances. This way we can get a better feel for why our Earth is often called a "pale blue dot".
