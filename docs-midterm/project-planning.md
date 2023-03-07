# Project Planning

## Timeline - History - Reflection

### Week 5-8

The first two weeks were allocated to review different project management approaches and decide on a plan to adhere to up to the completion of the development of the project.

Our team's decisions were to:

- assign a team member to create and manage the documentation repo, and to look into tools such as pandoc to convert the markdown to html or pdf for the submission.

- plan out the project management process of the code for when the development starts.

- not use any full featured activity tracking tools such as Jira, , and use Github project management features instead, so our team did not have to learn new software, or implement other software with git version control / github.

- stop using any vendor specific files (google docx, docx, pdf) by the time we start collaborating on the report, using only markdown going forward as it has better compatability with other software such as version control and code editors and is not dependant on a single software such as Word (vendor lock in).

- store the documentation files for the midterm / final submission and the app on the wiki page of a git repository hosted on github, as this did not require commiting to the repository for every edit to the documentation.

- store the source code files in a separate repository hosted on github.

- meet on zoom once a week, and discuss the project in Slack during the time between meetings. Discussions and work carried out during meetings will be documented in a weekly [Meeting Agenda] report. (included in the Appendix).

- write an Introduction, Proposal, and produce a minimal functional prototype for the chosen project idea as soon as possible, so other team members could learn more about the project topic / field.

- create a questionnaire to obtain user feedback, and get it in front of participants as early as possible, as our decisions going forward would be dependant on this data. The prototype would also be included with the questionnaire, and our team could get early stage feedback on it too.

### Week 8

At the start of this stage of the project, our team highlighted some positive and negative aspects of the current project management process.

❌ the prototype was not included with the questionnaire, however we did get reliable data for the questionnaire.

✅ a weekly meeting with all team members was enough to keep up with the planning and management of the work for each week.

✅ By partnering markdown with Github Wiki, we did not have to track which team member had the most recent version of a document, and could edit the same content during the same time.

:warning: The process of writing markdown took some time getting used to, Because of this, some vendor specific files were still being used.

❌ Github wiki enabled our team to edit or add to the same section of data collaboratively, but did not provide any tools to collaborate after or before the team member's edits were done.

To provide pre and post edit collaboration tools, our team planned to implement a simplified version of the [Manubot contribution workflow](https://greenelab.github.io/meta-review/) to collaborate on the report. This contribution workflow is centred around using GitHub’s Pull Request review interface to allow any team member to comment on any other member's changes, globally or at specific lines, by asking questions or requesting modifications. A Pull Request is opened for every change.

![**Figure 1:** Showing the original Manubot contribution workflow](assets/project-planning/manubot-review.svg){ width=60% height=60% }

In addition to this, we would collaborate using a [shared repository model](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#shared-repository-model). Forks were not used to initiate pull requests, and our team collaborated in a single shared repository. All Pull Requests were from branches within the same repository.

![**Figure 2:** Test Pull Request showing Discussions](assets/project-planning/pr-1.png){ width=70% height=70% }

![**Figure 3:** Test Pull Request showing Files Changed / Diff View](assets/project-planning/pr-2.png){ width=70% height=70% }

❌ Github wiki did not integrate well with current documentation tooling.

pandoc needed all the markdown as input to create the documentation / report, so it made sense that these resources were in the repo alongside the tooling.

❌ Github Wiki Web Markdown Viewer / Github Flavoured Markdown did not provide all the formatting features our team needed.

By switching from Github Flavoured Markdown to Pandoc Markdown Extended Syntax, and using [pandoc](https://pandoc.org/) to generate an HTML version of our written material, the report benefitted from:

- automatic generation of table of contents, footnotes lists, and numbered headings
- styling any written material with CSS
- preprocessing of multiple files into

The output HTML from pandoc was converted to a PDF using [prince](https://www.princexml.com/)

![**Figure 4:** Code to automate the generation of the HTML and PDF versions of the markdown files](assets/project-planning/doc-build.png){ width=55% height=55% }

Due to the use of Pandoc Extended Markdown Syntax, the Github Web Markdown Viewer rendering GFM flavored markdown did not show a true representation of our work we were collaborating on. Therefore, it did not make sense to keep using this viewer.

In preparation to implement the newly revised workflow, all the markdown content on the wiki was moved into the repo so it could be tracked as version control (docs-as-code approach), and we could perform PRs on the content. After this, all files related to the project were now under version control.

#### Week 8 - Going Forward

Over the next two weeks, our team decided to split the written report into sections and assign a team member to write the content for it.

We set a soft deadline for the start of Week 10, for each assigned team member's section of the report to be completed, around 3 weeks before the midterm submission deadline. This gives time for reflection and review on our written material as a team before the submission.

We set a deadline of 25 December for the midterm submission.

### Week 9 - Submission

At week 9, our team was collaboratively editing and reviewing the documentation for the report / submission. Again, we reflected by highlighting positive and negative aspects of the project management process.

✅ Our team found Github's review interface effective for collaborative edits and reviews to the documentation, as it allowed any team member to edit any part of the documentation, but did not allow unrestricted editing to it. It provided the missing features to our workflow.

✅ While preparing, we found the collaboration easier as all the content related to the midterm submission was in one place. and we could see any content we might have missed by going through the git repo. The content for the report was also all in the same format, and we did not deal with any formatting issues when copy pasting / converting between different files types.

## Github Project Management features for App Development

During the second half of the module, our team plan to use Github's project management features to manage the development of the app, so we do not have to learn any other project management tools.

Below is an outline explaining how we will use Github's project management features to manage our project.

- Github Issues provide an interface for collaborative code reviews and discussion of the task.

- Tasks each team member are required to fullfil can be shown by assigning an assignee to the Issue.

- Tasks can be grouped for better organisation, by labelling Issues: frontend, backend, documentation.

- Github Projects provide an interface to manage the project at a high level, showing the upcoming deadlines and milestones. This UI interface is similar to a Kanban board.

![**Figure 5:** Github Projects View - Kanban board layout](assets/project-planning/kanban.png){ width=100% height=100% }

- linking low level goals to high level goals, by using Github Milestones feature. Every issue can be assigning to a Milestone, indicating what needs to be completed before the next milestone begins. This is integrated with Github Projects view / Kanban board feature.



## Gantt Chart { style="page-break-before:always;"}


Our team used a Gantt Chart provided by [teamgantt.com](https://teamgantt.com) to track the project's progress.

![**Figure 6:** Our Team's Gantt Chart](assets/project-planning/gantt.png){width=100% height=100%}

### Iterations

The iterations for sections shown in the Gantt Chart defines a period where we received feedback from surveys, market research, or our focus group and developed and refined the feedback into the project.

By including these iteration cycles into the Gantt chart, we could show the project's progression more clearly.

### Buffers

The Gantt Chart shows buffers that define a period of time after our scheduled work. If we did not finish the work by the buffer end date, the work we planned in the future would have to be adjusted to compensate.

This was important when scheduling the time designated for obtainining responses for our surveys, as our team could only estimate how long it would take for us to gain feedback from them that satisified our needs to improve and iterate on aspects of the project. If we did not gather satisfactory feedback by the buffer end date, we planned to accept the responses as they are, as spending more time gathering responses would affect other deadlines we set in the future.


Most work was completed on schedule in the time alloted in the Gantt Chart. Some tasks ran into the task's alloted buffer zones, and there were only a few times the Gantt chart was adjusted. 

### High Risk Areas / Workload

Our team planned for weeks where the project demanded more resources, and noted these periods in the Gantt Chart. These planned work areas ensured all members of our team spent more of our resources at the same time, and managed our team's planned work expectations.

This section of the Gantt chart was adjusted throughout the project's development. 

After our second user feedback iteration, a second high risk area was identified after our surveys / questionnaires ran behind and the Gantt Chart was edited to show this.


### Summary - Reflection

Our Gantt chart was not edited heavily since the first draft, and there were no large setbacks that affected our planned delivery or submission dates.

Iterations, Buffers, and High Risk Areas used through week 5 - 10 have been efficient strategies for planning our project and will be used to schedule and plan the work for the project in the future.



