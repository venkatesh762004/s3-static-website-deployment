# AWS S3 Static Website Deployment with GitHub Actions and CloudFront

## Project Overview

This project demonstrates an automated static website deployment using **Amazon S3, Amazon CloudFront, GitHub Actions, and AWS IAM OIDC authentication**.

Whenever code is pushed to the `main` branch, GitHub Actions authenticates with AWS and automatically deploys the website files to the S3 bucket.

CloudFront delivers the website securely over HTTPS.

## Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   v
AWS OIDC Authentication
   |
   v
Amazon S3 Bucket
   |
   v
CloudFront + OAC
   |
   v
Website Visitors (HTTPS)
```

## AWS Services Used

- **Amazon S3:** Stores static website files.
- **Amazon CloudFront:** Delivers website content globally over HTTPS.
- **AWS IAM:** Manages deployment permissions.
- **AWS OIDC:** Enables secure GitHub Actions authentication without storing long-lived AWS access keys.
- **GitHub Actions:** Automates website deployment.

## Technologies

- HTML
- CSS
- JavaScript
- AWS
- Git and GitHub
- YAML
- GitHub Actions

## Repository Structure

```text
s3-static-website-deployment/
│
├── index.html
├── style.css
├── script.js
│
└── .github/
    └── workflows/
        └── deploy.yml
```

## Deployment Workflow

1. Developer pushes changes to the GitHub `main` branch.
2. GitHub Actions starts the deployment workflow.
3. AWS credentials are configured using OIDC.
4. The workflow synchronizes website files with the S3 bucket.
5. CloudFront serves the updated website.
6. Cache invalidation can be triggered to refresh cached content.

## AWS Configuration

| Configuration | Value |
|---|---|
| AWS Region | `us-east-1` |
| S3 Bucket | `venkatesh-portfolio-website-2026` |
| Authentication | GitHub OIDC |
| Deployment | GitHub Actions |
| CDN | Amazon CloudFront |
| Origin Security | Origin Access Control (OAC) |

## Key Learning Outcomes

- Practiced AWS S3 bucket configuration.
- Implemented automated deployments using GitHub Actions.
- Practiced IAM role-based authentication with OIDC.
- Configured CloudFront distribution.
- Practiced secure S3 origin access using OAC.
- Understood CDN caching and cache invalidation.

## Live Website

**CloudFront URL:** Add your actual CloudFront HTTPS domain here.

## Repository

[View GitHub Repository](https://github.com/venkatesh762004/s3-static-website-deployment)

## Author

**Venkatesh**

Cloud & DevOps Engineering Learner

GitHub: [venkatesh762004](https://github.com/venkatesh762004)
