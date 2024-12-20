---
title: License Server
publishDate: 2024-09-01 00:00:00
order: 3
img: /assets/license-server.jpg
img_alt: Input form with many fields
description: |
  Using React, TypeScript, and Bootstrap, we designed and built an admin portal to manage 900+ game server licenses.
tags:
  - Design
  - Development
  - Automated Testing
type: professional
---

## 900 Servers and 15,000 Players

See the project live here: <a href="https://license.offworldindustries.com/" target="_blank">License Server</a>

Offworld Industries game studio developed the premier first-person tactical shooter, Squad. This game has a healthy player count and a very active community. One key part of its success is the ability of community members to host a dedicated game server and have it be available to other players within the game itself. The numbers vary, but on average there are about 15 thousand players distributed over 900 game servers. These servers could originate from all round the world, including Germany, the United States, and China.

### However ...

However, there was a problem. Since these servers were run by the community and not by Offworld Industries staff, how could we ensure that players who join these servers have a good experience? The hosts and owners of the servers need to be held to a standard or else a player might buy the game, have a less-than-ideal experience, and refund their purchase. A toxic game server can be a difficult thing for a community manager to deal with, especially if the administrators of the server are not cooperating.

In order to solve this problem, the Licenser Server Program was created. Before a community run server could be listed in-game, a license key was required. To get a license the server owner would need to apply and this process would include several steps, such as setting expectations for conduct, computer hardware profile to ensure the game will run smoothly, and more. One important step was to get a sense of the applicant's own style and if they were willing and able to uphold community standards. If approved, the applicant would receive a license key and when installed on their server it would be listed for other players to join.

It was not enough to vet and offer license keys once. The community manager also needed to ensure that the hosts kept up with their license agreement and community standards. One important metric was server health. A healthy server would offer a stable and smooth game, while an unhealthy server would not offer an enjoyable experience and might lead to bad reviews for the overall game. Another factor was the nature of the server's specific player base and they reflected community standards, such as hostile or abusive behavior. A feature was required to revoke a license so that a server could be delisted from the game.

A web application was developed to meet these needs several years ago. Although it was adequate at the time, the app was difficult to use by the community team and server owners. One specific complaint was that the app was not mobile friendly and had long-standing unresolved bugs. The app was also using deprecated tools that needed a remedy or else the entire app might stop working.

### Build It Better!

This is where our team came into the project. First we gathered the scope and requirement. I did this by meeting with stakeholders across many departments, such as marketing, community, engineering, and IT teams. To ensure progress I lead weekly meetings and produced the core documentation, such as meeting notes, road maps and user guides.

Once the goal and limitations were established, we moved on to the design stage. Here, I drafted wireframes of the front end UI and presented them with stakeholders. The purpose of this stage was to solidify the user's flow through the app. We established the pages and interactions without worrying about fine details, such as colors and exact sizing of components. To keep the project on track and gather feedback quickly, we limited the revisions to about two rounds. Wireframes at this stage were extremely valuable as they revealed misconceptions about the app between teams and pointed out some tweaks that the back end API required to meet the UI's requirements.

The main sections included a multi-step form, a license list and detail page, and management pages for games and server providers. The current app has a very long form that seems overwhelming. To remedy this, we used the method of progressive disclosure by breaking down the form into smaller manageable steps. This way the user was able to complete a complex task by only being shown the form input fields for a specific step. We also hid entire steps which were not applicable to the user, such as skipping a large hardware profile step if the user already had a vetted server provider.

The community manager that had the role of an admin could see a table of licenses and their status, with a detailed search feature. The table would allow sorting and filtering on important data, such the IP of the server. Clicking on an individual server would provide more details on a new page, such as fine points of the health status. The admin could manage licenses, such as approving new applications or revoking existing licenses.

Having the wireframes signed off, we moved on to the high resolution design stage. This stage was focused on the final UI that the user would see. Here we spent time on colors, margins, padding, and the nitty gritty of the components and overall layout. Like the wireframe stage, we loosely limited the revisions to two rounds to keep things on track. To speed things along, I reached for Bootstrap, which is a design system that had all of the common components already built. This way, we could focus on the main goal we were trying to achieve instead of designing common things like buttons or modals from scratch. I created a "dummy" app using this component library with placeholder data and working links. This way the stakeholders could interact with a website instead of just reviewing images.

### Front End Development

Now it was time to move on to the development of the app. In order to implement the design, I had to establish the technical stack for the Front End. For components we used React with TypeScript, for state management we used Redux Toolkit, and for testing with Jest. There was a big emphasis on stability since the previous License Server app was buggy. To meet this requirement, I used a method called Test Driven Development. In this approach we write small and focused tests first and then write the code that passes the tests. These tests would be applied to small units of the app, such as a button making an API call or a state change being observed by a subscribing component. Using Jest and the React Testing Library, I contributed over a 1000 tests! These included unit, integration, and end-to-end tests that would automatically run on each code review, build, and deployment.

After each feature of the app was completed, it was deployed to a staging server. This way the main user, which was the community manager, could do a short review to give early feedback. For example, we completed the feature that allowed an admin to create, read, update, and delete games that a server could host. This feature could be tested very early on by the end user instead of waiting for the entire app to be feature complete. The overall development process had very few issues since we invested in automated tests to catch obvious issues and focused on early user reviews to get feedback on progress.

### Final Touches and Release

The next step was to get approval from the stakeholders and the QA team. The app was deeply tested by the community team, with input from the marketing and engineering teams. A "last call" meeting was used to gather the last minute requests before we passed the project off to the QA team. Small and reasonable requests were implemented and larger and more complex requests were tagged as a post release feature.

To make things go smoothly for the QA team, I created a document that outlined the critical path of the app as an applicant and how to administer applications as an admin. This was very much appreciated by the QA team since they had few follow up questions on what and how to test. Fortunately we had a very good QA team and they came up with tricky edge cases for us to resolve before release.

The release of the new License Server was a success! Users that applied to get licenses were happy to have a much cleaner and error free experience. Likewise the community members could get information about licenses quickly and change the status of a license with confidence. The new License Server application processing time was greatly reduced and it continues to be the key tool for managing hundreds of game servers that thousands of players enjoy.

