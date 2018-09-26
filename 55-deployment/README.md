# QA for Deployed Applications

## Overview

- What is Deployment?
- Deploying the blogger app to heroku
- Quality Assurance
- Visibility
- Firefighting
- Benchmarking and Performance
- Heroku tips and tricks
- Common Questions

## Deployment

So far, frontend and backend code has run only on our computer.

Goals:
- run our app on other computers
- run the 'production' version of our app
- point a URL to our app

Deployment is the process of setting up an application to serve our application on another computer, usually available at some URL.

### System Diagramming

What are the parts of our system now?

- developer machines
- github
- Continuous Integration (CI) servers
- app servers (possibly multiple!)

### Deploying Blogger
Strategy:
- push backend to heroku
- push frontend to heroku
- make changes to both to work on heroku

### Deployments: What's different between local and prod?
- Environment variables
  `ENV['SECRET_KEY_BASE']`
- secrets
- which database we access
- asset storage (CDN vs local)
- where blobs get saved (local machine vs. S3)
- where logs and debug info get logged
- running on different hardware (different OS)
  - different versions of dependencies might be installed
- differences within your application
  - throttling usage / performance differences
  - 'feature flags' turn on and off features

## Quality Assurance
We need to make sure that users don't experience bugs

Strategies:
- Automated testing (rspec, jest)
  - run these locally
  - run before the app is deployed
- Manual QA
  - as feature developer, click all your buttons
  - often, use a 'staging' environment for manual testing
  - 'feature flags' let you turn on a feature for a subset of users

### QA for your projects
Employers will look at your projects. You need to make sure that what they see makes sense and works. Bugs in deployed projects can cost you an offer!

How can you prevent that?
- Test your app!
  - use bad inputs
  - don't follow the 'happy path'
- Get others to test your app!
- Features that don't make sense to a user are not features
  - they're bugs!

What else can you do?
- Link to the Github!
  - Important to write a _great_ README.md
  - Nice to include a .gif of the app in action
- Describe the project without deploying it

## Visibility and Error Reporting

How do developers see errors in production apps?

- User reports
- Manual testing
- Manually reading / parsing log files
- Use some error reporting tool
  - Set up Rollbar or Sentry
  - Go look at the dashboard

How do developers find out when something is wrong?
- User reports
- Manual testing
- Set up an alerting system
- new 500 error, more than 100 in a minute
- _pages_ the engineer _on call_
- PagerDuty

## Debugging in Prod: Firefighting
How do I debug errors in my production app?

1. Remain Calm
2. Where in the system is the error happening?
3. Get visibility into the system
  - visibility is how we debug!
  - getting a stack trace of the error is often 90% of solving the issue
4. Form and test hypothesis about the error
  - I think the error happens whenever X happens
  - Check
  - Yes! It happens!
  - Check that it _doesn't_ happen in other circumstances
  - You've found the bug!
5. Fix the bug
  - Add a failing test case 'proving' the bug
  - Change the code
  - Test case turns green
  - Deploy the fix


Often, if a bug is introduced right when new code is deployed, instead of trying to fix the bug and deploy the fix, you should 'roll back' to a known working version.
- Usually faster
- Usually safer

### Data issues
- remove the bad data
- make code changes
  - prevent bad data from getting in
  - be resilient to (handle) bad data in the application

## CI Deploy pipeline
**What is a CI pipeline?**
- System to automatically do a sequence of steps when there is new code to deploy
- Triggered by e.g. push to github `master` branch
- Steps:
  - run tests
    - fails -> let the developer know
    - passes -> continue to deploy
  - turn on new app servers
  - run migrations
  - switch handling of requests to new servers
  - turn off old servers

## Benchmarking and Performance
How do we know when our app is slow? How do we find the slow parts of the application?

- where in the system is our slowness?
  - 'APM' - Application Performance Monitoring
  - tell me which routes are slow
  - tell me what about them is slow (app code, database, something else)

How do we fix slowness?
- Locate the issue!
- Benchmarking - run code lots of times, see how fast different versions are
- Deploy faster code
- Watch the graph on the monitoring tool

## Heroku Tips and Tricks

```
heroku help
heroku run rails c
heroku run bash
heroku logs
heroku logs -t -n 50
heroku releases
heroku rollback [version]
```

## Common Questions

**What are 'worker's?**
- another 'box' (machine) that is responsible for some app task
- like sending out daily emails, updating something in the database, etc.

**What is puma?**
- App scaling: vertical, horizontal
- manages threads on a single machine
- run more 'threads' on a machine
- So that one computer can handle more requests
- This is 'vertical' scaling - bigger computer

**Secrets management**
- Often through env variables
- Heroku has a UI panel to put things
- Don't expose your secrets!

**How do we run migrations in production?**
- sometimes manual, a la `heroku run bash`
- often part of the CI pipeline
- some migrations are 'safe', e.g. add a column - won't break your code
- multi-part deploys for 'unsafe' migrations, e.g. dropping a column
  - 1. remove all references to the old column in code
  - 2. drop the column
  - 'unsafe' includes a _lot_ of schema changes
- modifying production database without losing the data
  - backups
  - production data debugging

**How do we handle storage for user-uploaded files?**
- S3 Simple Storage Service
- Microsoft, Google
- different from static asset storage
  - CDN

**what does a devops role look like?**
- In charge of things like the deployment process
- thinking about the actual machines the apps are running on
- debugging network and system issues

**how do admin roles work?**
- two kinds of 'admin'
- users on the machines that run the apps
  - handled by the OS, part of the deploy process
  - often no login, only able to access via ssh keys
- 'users' within the application
  - some column indicates 'role'
  - conditional logic to determine access / capabilities of different roles

**What is nginx? (vs. puma vs. other options)**
- usually used as a load balancer
- handles different routes by directing requests to different applications
