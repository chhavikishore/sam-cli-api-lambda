# category_service

To use the AWS SAM CLI, you need the following tools:

* AWS CLI
* AWS SAM CLI - [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
* Node.js 10
* Docker (required only if we run or test the API locally ) - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community).

## Deploy the sample application on AWS

```
aws configure --profile provideProfileName
```
The above command will ask you secret key, access key, region and output format.


To build and deploy your application for the first time, run the following in your shell:

Use the same **provideProfileName** as configured in above `aws configure ` command 

```bash
sam build
sam deploy --guided --profile provideProfileName
```
After this you would get an url as in console like `https://zdfqbh03u7.execute-api.us-east-2.amazonaws.com/Prod`. 

Use POSTMAN App or curl command to fetch category  :  ` curl https://zdfqbh03u7.execute-api.us-east-2.amazonaws.com/Prod/categories/BALANCES`


## Use the AWS SAM CLI to build and test locally

Build your application by using the `sam build` command.

```bash
my-application$ sam build
```

The AWS SAM CLI can also emulate your application's API. Use the `sam local start-api` command to run the API locally on port 3000.

```bash
my-application$ sam local start-api
```

Access you app like : `curl http://localhost:3000/categories/BALANCES`