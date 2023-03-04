## Deployment

As our application development cycle involved obtaining user feedback, our team considered different ways to get our application to our users to test it. 

Our team researched how the application could be delivered to our users without them having to download the source code, as this would reduce the amount of users willing to test and give feedback on our application. Ideally, the process of updating the deployment should be fully automated, requiring no manualy intervention from our team.



### Railway

[Railway](https://railway.app/) is a deployment provider,

Railway is "the cloud that takes the complexity out of shipping software". It is 

Railway was chosen as a deployment provider because it is:
- very easy to setup. The setup process consisted of pointing the .... to a github repo.
- had usage based pricing. The traffic to the app was exceptionally low, and the deployment was free.
- open source.
- fully automated, requiring no manual intervention. Once Railway has been given permission to read the contents of a GitHub repo, Railway will read the current state of the repo, build, deploy the application, and provide a URL for the application to send to our users/testers. This deployment process happens anytime the repository receives new commits.


When commits were pushed to the remote repository on github, the github Continuous Integration would deploy our application, and provide a link for the 

Railway is a deployment provider, with features similar to Heroku.

