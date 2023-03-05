## Deployment

As our application development cycle involved obtaining user feedback, our team considered different ways to get our application to our users to test it. 

Our team researched how the application could be delivered to our users without them having to download the source code, as this would reduce the amount of users willing to test and give feedback on our application. Ideally, the process of updating the deployment should be fully automated, requiring no manualy intervention from our team.

### Railway

[Railway](https://railway.app/) is a deployment platform that allows our team to provision infrastructure, develop with that infrastructure locally, and then deploy it to the cloud. Railway can be set to reference a github repository, and it will move the source code of the repository into a docker container to deploy it. A public facing URL is generated that allows access to the application when visited. The URLs can also be revoked easily. This provided a way to control access to our application as we did not want our application permanently public facing during the testing and development periods.

Railway also handles the updates of the application automatically as it integrates with Github Continuous Integration. When commits are pushed to the remote repository, the Github CI Railway plugin would re-deploy our application again. This ensured our testers received the application's latest changes.

Railway offers a consumption-based pricing model for your projects. You don't get charged for resources you don't use, instead, Railway charges by the minute for each vCPU and memory resource your service uses.[^14] Railway provides 5$ in credits every month on their free plan. As the traffic to our application was very low, there was no cost to use their services for testing.


[^13] [Railway - Getting Started](https://docs.railway.app/getting-started)
[^14] [Railway - Pricing](https://docs.railway.app/reference/pricing)
