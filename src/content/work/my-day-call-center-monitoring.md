---
title: My Day Call Center Monitoring
publishDate: 2024-09-01 00:00:00
order: 2
img: /assets/myday.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  Using an Angular Front End and an Erlang Kazoo backend we designed and built an app for monitoring the events in a call center
tags:
  - Design
  - Development
  - VoIP
---

## How Many Calls Did You Have Today?

A call center can be a wash of data and people managing them have a lot of points to track. How many calls were taken by an agent, a team, the center as a whole? How are the queues handing calls? Are there too many calls waiting? Do I need more agents to take calls?

To answer these questions we designed and built and application called MyDay using an Angular front end that streamed data from an Erlang based Kazoo VOIP back end. I implemented the UI for big important numbers, like calls taken, the status of queues, and an event feed that showed items like calls, breaks, and meetings. The purpose was to simplify the data for a specific agent so that they could get the info they needed at a glace.

This application was so successful that it was expanded to a Manager View. The purpose of this feature was to add features that a manager of a call center would be concerned about, such as how many calls in total were waiting and how were they distributed per queue. They could also look at the assignment of agents to queues. If a particular queue had a lower call volumne while another queue was overwhelmed then they could take action and distribute their agents effecively. This feature improved the performance of call centers and reduced wait times because manager could get data in real time.