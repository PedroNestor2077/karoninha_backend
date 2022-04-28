# Planner Notifications

This project handles user notifications, which includes push notifications.

It is a [Typescript](https://www.typescriptlang.org/) [Express](https://expressjs.com/) project.

## Development

### Environment

- The NodeJS version to be used is specified at `.nvmrc` file in the project root. [More about NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/) should be used instead of NPM

#### Using Prettier

- Install plugin `Prettier - Code Formatter`

  `ext install esbenp.prettier-vscode`

- Configure vscode

  Preferences>Open settings (JSON)

  `editor.formatOnSave` to `true`

  `editor.defaultFormatter` to `esbenp.prettier-vscode`

To manually run the fix procedure run `yarn lint:fix`

To just run the linter run `yarn lint`

### Contributing guidelines

- Must use Typescript instead of Javascript
- Must have related tests
- Abbreviations should be avoided (better explained [here](https://developers.google.com/style/abbreviations#long-and-short-versions))
- This repository uses [git flow](https://nvie.com/posts/a-successful-git-branching-model/) as branching model
  - New feature branches should start with `feature/*my-branch-name*` and should be created off the `develop` branch.
- Avoid redundant comments ([chapter 4 of Clean Code, by Robert C. Martin](https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf))
- [Yarn](https://yarnpkg.com/) should be used instead of NPM
- All new code must be buildable in [Jenkins](https://jenkins.meuvista.com/job/planner-notifications-delivery/)

### Deployment

Deployment is done using [Jenkins](https://jenkins.meuvista.com/), specifically the job `planner-notifications-delivery`, which will build a new docker image version, publish it to our private repository (ECR) and then deploy it to one of our environments.

### Testing

All requests made to `https://api.qa.meuvista.com/notifications/*` will be routed to our QA environment. Similarly, any request made to `https://api.meuvista.com/notifications/*` will be routed to our production environment.

`curl https://api.qa.meuvista.com/notifications/ping`
