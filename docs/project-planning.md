# Project Planning

TODO:

gannt chart:
show deadlines and assigning different team members
show questionaire timeline -
show collaboration part

add markdown image embedded

check week, dates

add to meeting agenda: discuss the project management process of the project.

add all project planning from meeting agenda

get an image with caption of the Pull Request process

## Timeline - History - Reflection

### **Week 4-6**:

The first two weeks were allocated to review different project management approaches and decide on a plan to adhere to up to the completion of the development of the project.

Our team's decisions were to:

- assign a team member to create and manage the documentation repo, and to look into tools such as pandoc to convert the markdown to html or pdf for the submission.

- plan out the project management process of the code for when the development starts.

- not use any full featured activity tracking tools such as Jira, , and use Github project management features instead, so our team did not have to learn new software.

- stop using any vendor specific files (google docx, docx, pdf) by the time we start collaborating on the report, using only markdown going forward as it has better compatability with other software such as version control and code editors and is not dependant on a single software such as Word (vendor lock in).

- store the documentation files for the midterm / final submission and the app on the wiki page of a git repository hosted on github, as this did not require commiting to the repository for every edit to the documentation.

- store the source code files in a separate repository hosted on github.

- meet on zoom once a week, and discuss the project in Slack during the time between meetings.

### **Week 6-8**:

At the start of this stage of the project, our team highlighted some positive and negative aspects of the current project management process.

[GREEN] - a weekly meeting with all team members was enough to keep up with the planning and management of the work for each week.

[GREEN] - By partnering markdown with other software, we could collaborate in a decentralised manner.

The approach had these benefits:

- a team member could edit without keeping track of which member has the "master" copy, and each team member could see the most recent changes to parts of the documentation that others were working on, without waiting until they were available to share it.

- we can all view and edit the content whenever we want without tracking who has the "master" copy. (however we should not edit each others content unless agreed beforehand imo :yum:)

- :green_heart: Each of us can see what each other is working on, without waiting until they are available to ask them. We can learn from each others work.

[AMBER] - The process of writing markdown took some time getting used to, Because of this, some vendor specific files were still being used.

[RED] - Github wiki enabled our team to edit or add to the same section of data collaboratively, but did not provide any tools to collaborate after or before the team member's edits were done.

To provide pre and post edit collaboration tools, our team planned to implement a simplified version of the [Manubot contribution workflow](https://greenelab.github.io/meta-review/) to collaborate on the report. This contribution workflow is centred around using GitHub’s Pull Request review interface to allow any team member to comment on any other member's changes, globally or at specific lines, by asking questions or requesting modifications. A Pull Request is opened for every change.

In addition to this, we would collaborate using a [shared repository model](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#shared-repository-model). Forks were not used to initiate pull requests, and our team collaborated in a single shared repository.

[RED] - Github wiki did not integrate well with current documentation tooling

pandoc needed all the markdown as input to create the documentation / report, so it made sense that these resources were in the repo alongside the tooling.

[RED] - Github Wiki Web Markdown Viewer / Github Flavoured Markdown did not provide all the formatting features our team needed.

By switching from Github Flavoured Markdown to Pandoc Markdown Extended Syntax, and using pandoc to generate an HTML version of our written material, the report benefitted from:

- automatic generation of table of contents, footnotes lists, and numbered headings
- styling any written material with CSS
- preprocessing of multiple files into

Due to the use of Pandoc Extended Markdown Syntax, the Github Web Markdown Viewer rendering GFM flavored markdown did not show a true representation of our work we were collaborating on. Therefore, it did not make sense to keep using this viewer.

In preparation to implement the newly revised workflow, all the markdown content on the wiki was moved into the repo so it could be tracked as version control (docs-as-code approach), and we could perform PRs on the content. After this, all files related to the project were now under version control.

### Week 8-10 (midterm deadline):

During this time, our team was collaboratively editing and reviewing the documentation for the report / submission.

The review interface added the missing features to our workflow we were missing

Our found Github's review interface effective for collaborative edits and reviews to the documentation, as it allowed any team member to edit any part of the documentation, but did not allow unrestricted editing to it.

While preparing, we found the collaboration easier as all the content related to the midterm submission was in one place. and we could see any content we might have missed by going through the git repo. The content for the report was also all in the same format, and we did not deal with any formatting issues when copy pasting / converting between different files types.

## Future Plans for App Development

Here are our team's plans to ,and how our views changed over the course of the first part of the module.

### Week 4-6:

Our team decided to use only github project management features to manage the development of the app, so we did not have to learn any other project management tools.

Issues lets us use all the task specific management features, and we can use the Projects tab to track / organise them.

We label each issue front-end, back-end, report etc..

We use milestones to group tasks based on deadlines. For example, this is what needs to be done before testing, midterm/final submission etc.

we use issue labels (tags) to link low level goals to high level goals (For example an issue named "Create Frontend Mockup" to "Midterm"), if this this has to be done before the midterm.
we can assign ourselves or each other to a task by adding them as an assignee to the issue.
we use markdown syntax in github issues to make our task / goal specifications presentable, so they can be added to the report showing how we have managed the project.
We can write the report in markdown and store it in the repo. In plain text, so it can be tracked by version control. (no .docx etc)
This means adding incrementally to the report is easier, all written material is in the same format, and all of us can edit it.
Some benefits to this management approach:
we dont have to learn a new software such as content management system, jira.
edits to source files can be tracked within our management notes for that task. in jira, this would have to be implemented with a jira "github" plugin, more setup..
keeps everything in 1 place in the repo, and keeps things simple.
we can link to PRs, parts of the source code easier.

talk about collaborative editing with pull requests after the initial report content is put together

1 - We create issues for every task we need to complete.

For example:

- Get league of legends item data available in the app.
- implement total damage calculations
- create UI for the app

2 - We choose / assign one of us to the task by using the assignee field on the issue
The assignee to the task is responsible for:

- the implementation of the task
- documenting the implementation of the task, so we can include it in the report.

Any documentation can be written into the issue, or into a wiki page and linked to the issue.

For example, a TODO list for the feature, brainstorm, journal / progress of the feature being implemented.

### Issues - Project kanban board - milestones

Issues lets us use all the task specific management features, and we can use the Projects tab to track / organise them.

We label each issue front-end, back-end, report etc..

We use milestones to group tasks based on deadlines. For example, this is what needs to be done before testing, midterm/final submission etc.

### Milestones - Deadlines - Gantt Chart

[^1]: Manubot contribution workflow
