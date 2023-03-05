# Project Planning


## Initial 

Before work on the application started, our team created a new git repository to hold the source code for the project, along with a Kanban board and Gantt chart for the weeks up to the final submission. Tools were researched and chosen to develop the project with. Our team also decided on changes to make to our existing workflow and collaboration techniques, and are listed below in the following chapters.

## Team Breakdown

Our team consists of 5 people. Once the project development period was planned, tasks were distributed to members of the team based on their strengths, and the areas of value each team member could bring to the project.

1 team member was responsible for keeping task management up to date, and any tasks related to the React library used on the frontend.

2 team members were responsible for the frontend styling and obtaining user feedback.

1 team member had experience with the subject topic, performed reviews of the code and data that related to the game, worked on the frontend and backend, and obtaining user feedback.

1 team member worked on the backend, API, and damage calculations.

The distribution of tasks based on each team member's experiences and strengths saved time during the project's development, as some tasks could be completed based on prior experience and knowledge, without gathering it beforehand.


## Project Management Tools

Our team used multiple tools to ease the project's development.

**Git**

Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.^[1]

Git has been the most valuable tool for our team. It was used to contribute to the same source code, apply version control to our project, and ensure files shared between contributors were kept in sync. Git follows a distributed workflow, whereby every developer can both contribute code to other repositories and maintain a public repository on which others can base their work and which they can contribute to.^[2] This provided multiple benefits to our team, such as having read access to everyone else's repository or branches, and write access to the master. 

Any changes that required review from another team member, such as edits to another contributor's work, was either commit to a different branch than the master branch, or submitted as a PR to the master branch. This allowed time for others to review the change before it was merged.

All other changes were commited to the master branch. Our team found this simple workflow effective as the state of the application's release version was not necessary. After the application's release, our team planned to consider workflows such as GitFlow or master/develop/hotfix branches to develop the application.

The application's source code existed inside a single repository as the codebase was small, and provided better integration with Github's Project Management features. Because the code was not separated into different repositories, all the issues our team created on Github to track the project's development were in the same place. Also, edits to backend and frontend of the codebase could be contained within a single commit, and all tasks carried out on the project could be tracked under a single log / history.

**Slack**

Slack is an instant messaging program. Users can communicate with voice calls, video calls, text messaging, media, and files in private chats or as part of communities called workspaces.^[3]

Slack provided tools and options for our team to communicate effectively, For example, if a team member wanted to reach out, the other team member had the option to be alerted immediately (if they did not mute notifications) in their Desktop client. This improved time between responses.

**Zoom - Jitsi**

Zoom is a proprietary videotelephony software program.^[4] Jitsi is a collection of free and open-source multiplatform voice (VoIP), video conferencing and instant messaging applications for the web.^[5]

Team meetings were scheduled every week for the frontend and backend development. Some team members made 1 or 2 meetings every week depending on the tasks assigned for thoses weeks.



**Github Project Management Features - Kanban**

Our team utilised Github's Kanban board alongside their other project management features to track the progression of the application's development. It was chosen against alternatives like Jira as the team was most familiar with it, and required no additional setup to integrate with Github and Git. 

By planning our user centered development cycles using the Kanban board, our team was able to visualise the application's progression more easily.

The Github Platform provided our team an interface for presenting our ideas and the ability for other team member's to access them.

As new tasks were realised, a new Issue under the Github repository was created with an explanation of the requiirements to complete the task. Every issue was assigned an Assignee (the team member responsible to complete the task), and a Milestone (the deadline for the task). All the issues created were added to the Github Kanban board.

Further discussion of the task to complete was done either in the issue itself, or linked to from Slack, and discussed there.

![Github Kanban Board - Half way through MVP Development](assets/planning-research/wk15-kanban.png){width=60% height=60%}

![Github Kanban Board - Final week of MVP Development](assets/planning-research/wk18-kanban.png){ width=60% height=60%}


Over the period of development, our team used Github for more technical discussions related to the project as it provided features that Slack did not, such as linking to datasets, referencing commits. Keeping written communication organised and structured was more important in this case.


**Gantt Chart**

A Gantt chart for weeks 10-20 was created using [teamgantt](https://www.teamgantt.com/h2) to aid the development of the project. This provided a high level overview for the complete duration of the development period, as opposed to the Kanban board, which focused on specific tasks and milestones over a period of development.

Our team utilised the same techniques as before, and can be found in the midterm submission sections [Iterations], [Buffers], [Workload].

The colors of the Gantt chart denote the type of task:

- Purple regions show MVP development.

- Blue regions show tasks that supported MVP development. 

- Green/Yellow/Red show our expected workload in that week.

- Red regions in the top section show the buffer given to some tasks incase they ran behind schedule.

### Planned Gantt Projections

This Gantt Chart, created in Week 10, shows the time given to complete each part of the project.

We planned an expected workload by working back from the submission deadline. A week's buffer was added before the submission deadline to allow enough room to complete tasks running late, 2 iterations of user feedback after the MVP was finished. 2 weeks was added to the start for project setup and data gathering, with the remaining time allocated to MVP development.

![gantt-agile-expected](assets/planning-research/gantt-agile-expected-2.png){ width=100% height=100%}


### Gantt Chart - Actual

This is the Gantt Chart at Week 20, showing the actual time allocation to tasks and adjustments made throughout the application's development.

![gantt-agile-actual](assets/planning-research/gantt-agile-actual-2.png){ width=100% height=100%}

As shown by the Gantt chart, our team did not start MVP development until 3 weeks after the planned date. This was due to issues realised during the preparation of data for our application explained in the [Data Scraping - Challenges] of the Evaluation section.

To compensate for lost time, our team planned to:

- allocate more time per week to develop the MVP during the final stages of its development. 

- delay unit tests and the second iteration of user feedback until after the final submission.

- start work on the frontend with a test dataset. A buffer was not given for the data gathering stage because our team wanted to start frontend MVP development with a more complete dataset. For the backend, starting the work at a required time was less important, as most of the word had been done beforehand.




[^1] - [Wikipedia - Git](https://en.wikipedia.org/wiki/Git)
[^2] - [Wikipedia - Slack](https://en.wikipedia.org/wiki/Slack_(software))
[^3] - [Wikipedia - Zoom](https://en.wikipedia.org/wiki/Zoom_(software))

[^4] - [Wikipedia - Jitsi](https://en.wikipedia.org/wiki/Jitsi)
