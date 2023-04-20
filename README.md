# basic-serverless-lambda

## Tech Stack:

- AWS
- NodeJs
- Serverless
- GitHub Actions

## Prerequisites:

#### Add a github folder and create config file

1. root > .github > .workflows
2. .workflows > main.yml

#### Install Serverless Framework

```shell
npm i -g serverless
```

#### Create a template

```shell
serverless create --template aws-nodejs
```

## Set up connection

### AWS

### Create an IAM User and attach policies

- IAMUserFullAccess,
- LambdaFullAccess

> Make sure to save your access key and secret access key.

### Create Secrets in GitHub Settings

Assign the user's key-pair value secrets from AWS IAM User (post-creation).

### Configure Actions

Copy this code below and paste it inside the main.yml file

```yml
name: Deploy Lambda Action Fun

on:
  push:
    branches:
      - master

jobs:
  deploy:
    name: deploy
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x]
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: serverless deploy
        uses: serverless/github-action@v3.1
        with:
          args: deploy
        env:
          SERVERLESS_ACCESS_KEY: ${{ secrets.SERVERLESS_ACCESS_KEY }}
          # or if using AWS credentials directly
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_KEY }}
```

> once this is pushed to master, github actions will automatically detect these access key and secret key. Then, run serverless deoloy behind the scenes for us. And that will deploy our lambda function to the AWS cloud.
