Freddie's Plan to :100: %

I thought Id write out a workflow regarding how we can effectively collaborate on the project we are going to create.

## Feature driven implementation workflow

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

3 - Track the issue using [Github Project kanban boards](https://github.com/users/fhill2/projects/1/views/1).

### Shared Documentation Workflow

Shared Documentation is anything included in the final report not related to a feature of the project.

This includes:
- **Requirements**
- **links to shared resources**
- **Project weekly timeline** 
- **Report writings so far** - Pablos league of legends initial proposal


For this content, we can either:
- create an issue for it, write the content under the issue.  
- add it to the wiki and then optionally decide to open a corresponding issue for it, if we want to track it under a deadline or milestone.

## Workflow Benefits 
 
- :blue_heart:  the content for the report is in 1 location.

- we can all view and edit the content whenever we want without tracking who has the "master" copy. (however we should not edit each others content unless agreed beforehand imo :yum:)

- :green_heart: Each of us can see what each other is working on, without waiting until they are available to ask them. We can learn from each others work.
- When it comes to submitting the midterm/final, we can easily see any content we might have missed by going through all Issues, wiki pages.
- the content for the report is in the same format. We do not deal with any formatting issues by combining different formats, trying to copy paste between .doc, google docs. We copy paste plain text :) 

___

## Wiki vs Issues vs Source Code revision

Here is a summary of the key differences between the project management features of github: 

### Source Code revision
If we add our documentation to the source tree under revision control, we have to commit and push to the repo. 

I think this is unecessary / overkill for creating and gathering the documentation for the report and is why I proposed a different solution to manage this content. 

### Wiki
The wiki lets us edit / add to the same section of data collaboratively, but doesnt have any project management features.

It could be useful to store the shared content for the report, as we might not need to track a deadline for it, include it in a milestone etc..


### Issues - Project kanban board - milestones
Issues lets us use all the task specific management features, and we can use the Projects tab to track / organise them.

We label each issue front-end, back-end, report etc.. 

We use milestones to group tasks based on deadlines. For example, this is what needs to be done before testing, midterm/final submission etc.


___
#### Some other workflows worth looking into

docs-as-code approach: the opposite of the workflow above. We commit all changes to the report and any other documentation to a separate repo as if we are commiting source code files.

We can use a tool to convert our markdown formatted report -> pdf for the final submission (if the submission requires pdf)

