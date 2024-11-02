---
title: My Day Call Center Monitoring
publishDate: 2024-09-01 00:00:00
order: 2
img: /assets/myday.jpg
img_alt: Dashboard with charts and numbers
description: |
  Using an Angular Front End and an Erlang Kazoo backend we designed and built an app for monitoring the events in a call center
tags:
  - Design
  - Development
  - VoIP
type: professional
---

## How Many Calls Did You Have Today?

See the project here: <a href="https://support.oomaenterprise.com/support/solutions/articles/48001235814-the-oe-desktop-app-myday-overview" target="_blank">MyDay</a>

A call center can be a wash of data and people managing them have a lot of points to track. How many calls were taken by an agent, a team, the center as a whole? How are the queues handling calls? Are there too many calls waiting? Do I need to redistribute agents to reduce the pressure on queues?

To answer these questions we designed and built an application called MyDay using an Angular front end that streamed data from an Erlang based Kazoo VOIP back end. I implemented the UI for key data, like calls taken, the status of queues, and an event feed that showed items like calls, breaks, and meetings. The purpose was to simplify the data for a specific agent so that they could get the info they needed at a glance.

This application was so successful that it was expanded to a Manager View. The purpose of this feature was to display analytics that a manager of a call center would be concerned about, such as how many calls in total were waiting and how they were distributed per queue. They could also look at the assignment of agents to queues. If a particular queue had a lower call volume while another queue was overwhelmed then they could take action and distribute their agents effectively. This feature improved the performance of call centers and reduced wait times because managers could get simplified data displayed in real time.
