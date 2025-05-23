---
sidebar_position: 4
displayed_sidebar: pageSidebar
---

# Amazon AWS Meeting Bots Configuration

### Prerequisites

Before you begin, ensure the following tools are installed on your system:

- [Amazon AWS Account](https://signin.aws.amazon.com/signup?request_type=register)

## Deployment of Meeting Bots using AWS CodePipeline and ECS (Fargate)

### 1 Introduction
This document outlines the process for deploying Google Meeting Bots using AWS CodePipeline and Amazon ECS (Fargate). We will leverage CodePipeline for continuous integration (CI), CodeBuild for building and pushing Docker images, and ECS on Fargate for running the bots. This setup allows for automated deployments and scalable infrastructure.

### 2 Architecture Overview
The deployment architecture consists of the following components:
- **Source Repository:** Contains the bot's source code and `buildspec.yml`.
- **AWS CodePipeline:** Orchestrates the CI process, triggering CodeBuild on code commits.
- **AWS CodeBuild:** Builds the Docker image and pushes it to Amazon ECR.
- **Amazon ECR:** Stores the Docker images.
- **Amazon ECS (Fargate):** Runs the bot containers.
- **AWS SDK:** Used to dynamically create and manage ECS tasks.

### 3 Prerequisites
- An AWS account with appropriate permissions.
- A source code repository (e.g., GitHub, CodeCommit).
- Basic understanding of Docker and AWS services (CodePipeline, CodeBuild, ECR, ECS).
- ECS Cluster. [Create ECS Cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-cluster-console-v2.html)

### 4 Code Repository Setup
### 4.1 Repository Structure:
- Ensure your repository contains the bot's source code.
- Place the `buildspec.yml` file in the root directory of the repository.

### 4.2 `buildspec.yml` Configuration:
Modify the following variables to match your setup:
- `REPOSITORY_NAME`
- `ECR_REPO`

### 5 AWS CodePipeline Setup
### 5.1 Create a New Pipeline:
1. In the AWS CodePipeline console, create a new pipeline.
2. **Source Stage:**
   - Select your source provider (e.g., GitHub, CodeCommit).
   - Connect to your repository and branch.
3. **Build Stage:**
   - Select AWS CodeBuild as the build provider.
   - Create a new CodeBuild project or use an existing one.

### 5.2 CodeBuild Project Configuration:
- Select the source repository and branch.
- Choose "Use a buildspec file" and specify the path to `buildspec.yml`.
- Select a suitable environment (e.g., Amazon Linux 2, Docker).
- Give CodeBuild the correct ECR permissions.

### 5.3 Review and Create:
- Review your pipeline configuration and create the pipeline.

> **Note:** Skip the Deploy Stage. This pipeline will only build the image. Deploying will be done with the AWS SDK.

### 6 Create Amazon ECS Task Definition Using the AWS Management Console
Follow these steps to create an ECS task definition:

1. **Task Definition Name:** Enter `cuemeet-meeting-bot-google`.
2. **Task Role:** Leave blank or select a suitable task role if your bot needs access to other AWS services.
3. **Network Mode:** Select `awsvpc`.
4. **Task Execution Role:** Create a new one with the necessary permissions.
5. **Task Size:** Set the task size as needed.
6. **Add Container:**
   - Click "Add container."
   - **Container Name:** Enter `cuemeet-google-bot`.
   - **Image:** `<your_account_id>.dkr.ecr.<your_region>.amazonaws.com/<your_repository_name>:latest`
   - **Environment variables:**
     - Click "Add environment variable."
     - Add `ENVIRONMENT_NAME`
     - Add `DEBUG`
     - Add `HIGHLIGHT_PROJECT_ID`

### 6.1 Sample ECS Task Definition
```bash
{
    "taskDefinitionArn": "arn:aws:ecs:us-east-2:************:task-definition/cuemeet-meeting-bot-google-staging:**",
    "containerDefinitions": [
        {
            "name": "cuemeet-google-bot",
            "image": "************.dkr.ecr.us-east-2.amazonaws.com/cuemeet-google-bot:latest",
            "cpu": 0,
            "portMappings": [],
            "essential": true,
            "environment": [
                {
                    "name": "ENVIRONMENT_NAME",
                    "value": "DEV"
                },
                {
                    "name": "DEBUG",
                    "value": "False"
                },
                {
                    "name": "HIGHLIGHT_PROJECT_ID",
                    "value": "************"
                }
            ],
            "environmentFiles": [],
            "mountPoints": [],
            "volumesFrom": [],
            "ulimits": [],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cuemeet-meeting-bot-google-staging",
                    "mode": "non-blocking",
                    "awslogs-create-group": "true",
                    "max-buffer-size": "25m",
                    "awslogs-region": "us-east-2",
                    "awslogs-stream-prefix": "ecs"
                },
                "secretOptions": []
            },
            "systemControls": []
        }
    ],
    "family": "cuemeet-meeting-bot-google-staging",
    "taskRoleArn": "arn:aws:iam::************:role/ecsTaskExecutionRole",
    "executionRoleArn": "arn:aws:iam::************:role/ecsTaskExecutionRole",
    "networkMode": "awsvpc",
    "revision": 11,
    "volumes": [],
    "status": "ACTIVE",
    "requiresAttributes": [
        {
            "name": "com.amazonaws.ecs.capability.logging-driver.awslogs"
        },
        {
            "name": "ecs.capability.execution-role-awslogs"
        },
        {
            "name": "com.amazonaws.ecs.capability.ecr-auth"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.19"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.28"
        },
        {
            "name": "com.amazonaws.ecs.capability.task-iam-role"
        },
        {
            "name": "ecs.capability.execution-role-ecr-pull"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"
        },
        {
            "name": "ecs.capability.task-eni"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.29"
        }
    ],
    "placementConstraints": [],
    "compatibilities": [
        "EC2",
        "FARGATE"
    ],
    "requiresCompatibilities": [
        "FARGATE"
    ],
    "cpu": "1024",
    "memory": "2048",
    "runtimePlatform": {
        "cpuArchitecture": "X86_64",
        "operatingSystemFamily": "LINUX"
    },
    "registeredAt": "",
    "enableFaultInjection": false,
    "tags": []
}
```
Note: Each of the bot requires it's own task definition


### 7 Deployment Process
1. **Code Commit:** Commit your code changes to the source repository.
2. **CodePipeline Trigger:** CodePipeline automatically triggers the build process.
3. **CodeBuild Build and Push:** CodeBuild builds the Docker image and pushes it to ECR.
4. **ECS Task Creation:** Use the AWS SDK to run a new ECS task, with the correct environment variables.

### 8 S3 Event Notification to [SNS with DLQ](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html)
### 8.1 Create S3 Bucket 
- Depending on your specific requirements, create an S3 bucket set to either private or public. Then, configure the appropriate CORS settings and access controls for bot integration.

### 8.2 Create SNS Topic:
- In SNS, create a standard topic.
- (Optional) Add subscriptions.

### 8.3 Create SQS DLQ:
- In SQS, create a standard queue to act as your DLQ.

### 8.4 Configure SNS DLQ:
- In your SNS Topic's attributes, set the "Redrive policy (dead-letter queue)" to your SQS DLQ.

### 8.5 Configure S3 Event:
1. In the S3 bucket's "Properties," add an event notification.
2. Choose event type (e.g., Object Created).
3. Set destination to your SNS topic.

### 8.6 Grant Permissions:
- In the SNS topic's "Access policy," add a policy allowing S3 to `SNS:Publish` to the topic, scoped to your S3 bucket.
- Ensure the SNS topic has permission to add messages to the DLQ.

### 8.7 Test (Success & Failure):
1. Upload an object to S3.
2. Verify notification delivery via SNS.
3. **Simulate Failure:** If your SNS subscribers fail to process the message, verify the message is sent to the DLQ.

### 9 Monitoring and Logging
- Use Amazon CloudWatch to monitor ECS task logs and metrics.
- Implement application logging to track bot behavior.

### 10 Security Considerations
- Use IAM roles with least privilege for CodeBuild and ECS tasks.
- Securely store environment variables using AWS Secrets Manager or Parameter Store.
- Ensure that the ECS task security groups allow only the needed traffic.
