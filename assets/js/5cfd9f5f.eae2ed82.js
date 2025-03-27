"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[449],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},44568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"aws-setup","title":"Amazon AWS Meeting Bots Configuration","description":"Prerequisites","source":"@site/docs/aws-setup.md","sourceDirName":".","slug":"/aws-setup","permalink":"/cuemeet-documentation/docs/aws-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/aws-setup.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"displayed_sidebar":"pageSidebar"},"sidebar":"pageSidebar","previous":{"title":"Local Setup","permalink":"/cuemeet-documentation/docs/local-setup"},"next":{"title":"Authorization","permalink":"/cuemeet-documentation/docs/bot/api-info"}}');var t=i(74848),r=i(28453);const o={sidebar_position:4,displayed_sidebar:"pageSidebar"},l="Amazon AWS Meeting Bots Configuration",c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deployment of Meeting Bots using AWS CodePipeline and ECS (Fargate)",id:"deployment-of-meeting-bots-using-aws-codepipeline-and-ecs-fargate",level:2},{value:"1 Introduction",id:"1-introduction",level:3},{value:"2 Architecture Overview",id:"2-architecture-overview",level:3},{value:"3 Prerequisites",id:"3-prerequisites",level:3},{value:"4 Code Repository Setup",id:"4-code-repository-setup",level:3},{value:"4.1 Repository Structure:",id:"41-repository-structure",level:3},{value:"4.2 <code>buildspec.yml</code> Configuration:",id:"42-buildspecyml-configuration",level:3},{value:"5 AWS CodePipeline Setup",id:"5-aws-codepipeline-setup",level:3},{value:"5.1 Create a New Pipeline:",id:"51-create-a-new-pipeline",level:3},{value:"5.2 CodeBuild Project Configuration:",id:"52-codebuild-project-configuration",level:3},{value:"5.3 Review and Create:",id:"53-review-and-create",level:3},{value:"6 Create Amazon ECS Task Definition Using the AWS Management Console",id:"6-create-amazon-ecs-task-definition-using-the-aws-management-console",level:3},{value:"7 Deployment Process",id:"7-deployment-process",level:3},{value:"8 S3 Event Notification to SNS with DLQ",id:"8-s3-event-notification-to-sns-with-dlq",level:3},{value:"8.1 Create S3 Bucket",id:"81-create-s3-bucket",level:3},{value:"8.2 Create SNS Topic:",id:"82-create-sns-topic",level:3},{value:"8.3 Create SQS DLQ:",id:"83-create-sqs-dlq",level:3},{value:"8.4 Configure SNS DLQ:",id:"84-configure-sns-dlq",level:3},{value:"8.5 Configure S3 Event:",id:"85-configure-s3-event",level:3},{value:"8.6 Grant Permissions:",id:"86-grant-permissions",level:3},{value:"8.7 Test (Success &amp; Failure):",id:"87-test-success--failure",level:3},{value:"9 Monitoring and Logging",id:"9-monitoring-and-logging",level:3},{value:"10 Security Considerations",id:"10-security-considerations",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"amazon-aws-meeting-bots-configuration",children:"Amazon AWS Meeting Bots Configuration"})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure the following tools are installed on your system:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://signin.aws.amazon.com/signup?request_type=register",children:"Amazon AWS"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deployment-of-meeting-bots-using-aws-codepipeline-and-ecs-fargate",children:"Deployment of Meeting Bots using AWS CodePipeline and ECS (Fargate)"}),"\n",(0,t.jsx)(n.h3,{id:"1-introduction",children:"1 Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This document outlines the process for deploying Google Meeting Bots using AWS CodePipeline and Amazon ECS (Fargate). We will leverage CodePipeline for continuous integration (CI), CodeBuild for building and pushing Docker images, and ECS on Fargate for running the bots. This setup allows for automated deployments and scalable infrastructure."}),"\n",(0,t.jsx)(n.h3,{id:"2-architecture-overview",children:"2 Architecture Overview"}),"\n",(0,t.jsx)(n.p,{children:"The deployment architecture consists of the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Source Repository:"})," Contains the bot's source code and ",(0,t.jsx)(n.code,{children:"buildspec.yml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS CodePipeline:"})," Orchestrates the CI process, triggering CodeBuild on code commits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS CodeBuild:"})," Builds the Docker image and pushes it to Amazon ECR."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Amazon ECR:"})," Stores the Docker images."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Amazon ECS (Fargate):"})," Runs the bot containers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS SDK:"})," Used to dynamically create and manage ECS tasks."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-prerequisites",children:"3 Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An AWS account with appropriate permissions."}),"\n",(0,t.jsx)(n.li,{children:"A source code repository (e.g., GitHub, CodeCommit)."}),"\n",(0,t.jsx)(n.li,{children:"Basic understanding of Docker and AWS services (CodePipeline, CodeBuild, ECR, ECS)."}),"\n",(0,t.jsxs)(n.li,{children:["ECS Cluster. ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-cluster-console-v2.html",children:"Create ECS Cluster"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-code-repository-setup",children:"4 Code Repository Setup"}),"\n",(0,t.jsx)(n.h3,{id:"41-repository-structure",children:"4.1 Repository Structure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure your repository contains the bot's source code."}),"\n",(0,t.jsxs)(n.li,{children:["Place the ",(0,t.jsx)(n.code,{children:"buildspec.yml"})," file in the root directory of the repository."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"42-buildspecyml-configuration",children:["4.2 ",(0,t.jsx)(n.code,{children:"buildspec.yml"})," Configuration:"]}),"\n",(0,t.jsx)(n.p,{children:"Modify the following variables to match your setup:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"REPOSITORY_NAME"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ECR_REPO"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-aws-codepipeline-setup",children:"5 AWS CodePipeline Setup"}),"\n",(0,t.jsx)(n.h3,{id:"51-create-a-new-pipeline",children:"5.1 Create a New Pipeline:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In the AWS CodePipeline console, create a new pipeline."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Source Stage:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select your source provider (e.g., GitHub, CodeCommit)."}),"\n",(0,t.jsx)(n.li,{children:"Connect to your repository and branch."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Build Stage:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select AWS CodeBuild as the build provider."}),"\n",(0,t.jsx)(n.li,{children:"Create a new CodeBuild project or use an existing one."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"52-codebuild-project-configuration",children:"5.2 CodeBuild Project Configuration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the source repository and branch."}),"\n",(0,t.jsxs)(n.li,{children:['Choose "Use a buildspec file" and specify the path to ',(0,t.jsx)(n.code,{children:"buildspec.yml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Select a suitable environment (e.g., Amazon Linux 2, Docker)."}),"\n",(0,t.jsx)(n.li,{children:"Give CodeBuild the correct ECR permissions."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"53-review-and-create",children:"5.3 Review and Create:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Review your pipeline configuration and create the pipeline."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Skip the Deploy Stage. This pipeline will only build the image. Deploying will be done with the AWS SDK."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-create-amazon-ecs-task-definition-using-the-aws-management-console",children:"6 Create Amazon ECS Task Definition Using the AWS Management Console"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to create an ECS task definition:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Task Definition Name:"})," Enter ",(0,t.jsx)(n.code,{children:"cuecard-meeting-bot-google"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Task Role:"})," Leave blank or select a suitable task role if your bot needs access to other AWS services."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Network Mode:"})," Select ",(0,t.jsx)(n.code,{children:"awsvpc"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Task Execution Role:"})," Create a new one with the necessary permissions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Task Size:"})," Set the task size as needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Add Container:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Click "Add container."'}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name:"})," Enter ",(0,t.jsx)(n.code,{children:"cuecard-google-bot"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Image:"})," ",(0,t.jsx)(n.code,{children:"<your_account_id>.dkr.ecr.<your_region>.amazonaws.com/<your_repository_name>:latest"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Environment variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Click "Add environment variable."'}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"ENVIRONMENT_NAME"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"DEBUG"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"HIGHLIGHT_PROJECT_ID"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"7-deployment-process",children:"7 Deployment Process"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Code Commit:"})," Commit your code changes to the source repository."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CodePipeline Trigger:"})," CodePipeline automatically triggers the build process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CodeBuild Build and Push:"})," CodeBuild builds the Docker image and pushes it to ECR."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ECS Task Creation:"})," Use the AWS SDK to run a new ECS task, with the correct environment variables."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"8-s3-event-notification-to-sns-with-dlq",children:["8 S3 Event Notification to ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html",children:"SNS with DLQ"})]}),"\n",(0,t.jsx)(n.h3,{id:"81-create-s3-bucket",children:"8.1 Create S3 Bucket"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Depending on your specific requirements, create an S3 bucket set to either private or public. Then, configure the appropriate CORS settings and access controls for bot integration."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"82-create-sns-topic",children:"8.2 Create SNS Topic:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In SNS, create a standard topic."}),"\n",(0,t.jsx)(n.li,{children:"(Optional) Add subscriptions."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"83-create-sqs-dlq",children:"8.3 Create SQS DLQ:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In SQS, create a standard queue to act as your DLQ."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"84-configure-sns-dlq",children:"8.4 Configure SNS DLQ:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'In your SNS Topic\'s attributes, set the "Redrive policy (dead-letter queue)" to your SQS DLQ.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"85-configure-s3-event",children:"8.5 Configure S3 Event:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'In the S3 bucket\'s "Properties," add an event notification.'}),"\n",(0,t.jsx)(n.li,{children:"Choose event type (e.g., Object Created)."}),"\n",(0,t.jsx)(n.li,{children:"Set destination to your SNS topic."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"86-grant-permissions",children:"8.6 Grant Permissions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['In the SNS topic\'s "Access policy," add a policy allowing S3 to ',(0,t.jsx)(n.code,{children:"SNS:Publish"})," to the topic, scoped to your S3 bucket."]}),"\n",(0,t.jsx)(n.li,{children:"Ensure the SNS topic has permission to add messages to the DLQ."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"87-test-success--failure",children:"8.7 Test (Success & Failure):"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Upload an object to S3."}),"\n",(0,t.jsx)(n.li,{children:"Verify notification delivery via SNS."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simulate Failure:"})," If your SNS subscribers fail to process the message, verify the message is sent to the DLQ."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"9-monitoring-and-logging",children:"9 Monitoring and Logging"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use Amazon CloudWatch to monitor ECS task logs and metrics."}),"\n",(0,t.jsx)(n.li,{children:"Implement application logging to track bot behavior."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"10-security-considerations",children:"10 Security Considerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use IAM roles with least privilege for CodeBuild and ECS tasks."}),"\n",(0,t.jsx)(n.li,{children:"Securely store environment variables using AWS Secrets Manager or Parameter Store."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the ECS task security groups allow only the needed traffic."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);