---
title: Ooma Enterprise
publishDate: 2024-09-01 00:00:00
img: /assets/oe.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  Using an Ember Front End and an Erlang Kazoo backend we designed and built a unified communications app for business phones
tags:
  - Development
  - Mentorship
  - VoIP
---

## Unified Communications

While working at Ooma, we had a large project to offer an application that unifies the communications for a business. This would include not only calls and text messages, but faxes, voice mails, call center features, and more. Our team was assigned to expand the existing app to work on iOS devices and deploy it to the Apple App Store.

Although the current product functioned on desktop as a web app, it wasn't mobile friendly and was not able to recieve or take calls on iPhones and iPads. To get around this we took a hybrid app approach. The core of the app was written with Ember and then wrapped using Apache Cordova so that it would work in an iOS native enviroment. I updated app to interact with iOS's API so that we could have critical functions like placing and accepting calls, holding calls, and transfering them others.

## Objectively Difficult

One particular difficultly was working with iOS's time sensitive requirements. You have a very short window to recieve a call and start the ringing process on the phyical phone. If you don't start ringing immidiately, iOS will silently stop your app! The current app wasn't quick enough because the JavaScript that managed the call state had too many layers between the Ember framework and the core iOS phone API. I had to dig into Objective C code to solve the problem, which isn't a language I'm familiar with. I give it a shot and ultimately had to search for help with experites within the company, which was definately the right call to make. There are times when solving a problem stops being cost effective and you have to reach out for help. Luckily, I was able to pair with an Objective C developer and we fixed the timing issue together!

I was also responsible for publishing to the app store. Meeting Apple's standards was challeneging and the layouts for iPad was a little tricky, but we overcame these issues. We released a successful app that contributed to an overall unified communications service.

