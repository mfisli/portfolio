---
title: Ooma Enterprise
publishDate: 2024-09-01 00:00:00
order: 1
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

See the project here: <a href="https://www.ooma.ca/enterprise-communications/mobility/" target="_blank">Ooma Enterprise</a>

While working at Ooma, we had a large project. The goal was to offer an application that unifies the communications for a business. This would include not only calls and text messages, but faxes, voice mails, call center features, and more. Our team was assigned to expand the existing app to work on iOS devices and deploy it to the Apple App Store.

Although the current product functioned on desktop as a web app, it wasn't mobile friendly and was not able to receive or take calls on iPhones and iPads. To get around this we took a hybrid app approach. The core of the app was written with Ember and then wrapped using Apache Cordova so that it would work in an iOS native environment. I updated the code base to work with iOS's API so that we could have critical functions like placing and accepting calls, holding calls, and transferring them to others.

## Mentorship is Friendship

The Ember framework was new to some of our front end software engineers and this was a bit of an issue. To make sure that everyone had at least a basic understanding of this framework, I composed and led an educational presentation. The presentation was great and I especially enjoyed the Q and A section where a lot of curious minds engaged with probing questions on specific methods, such as state management. This effort proved valuable as some of the engineers were able to develop with more confidence and use me as a resource.

## Objectively Difficult

One particular difficulty of this hybrid project was working with iOS's time sensitive requirements. You have a very short window to receive a call and start the ringing process on the physical phone. If you don't start ringing immediately, iOS will silently stop your app! The current app wasn't quick enough because the JavaScript that managed the call state had too many layers between the Ember framework and the core iOS phone API.

I had to dig into Objective C code to solve the problem, which isn't a language I'm familiar with. I gave it a shot, reached my time box, but I did not make much progress. I knew it was time to look for experts on the subject within the company. There are times when solving a problem stops being cost effective and you have to reach out for help. Luckily, I was able to pair with an Objective C developer and we fixed the timing issue together!

I was also responsible for publishing to the app store. Meeting Apple's standards was challenging and the layouts for iPad were a little tricky, but we overcame these issues. We released a successful app that contributed to an overall unified communications service.

