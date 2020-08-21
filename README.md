# Project Title:

## Goalify

The idea behind the app is to design your life by writing goals. I developed an app that encouraged users to create the life they wanted rather than letting life dictate their journey for them. The front-end is built on React & Redux, utilizing a Rails back-end API.

This project was completed as part of Flatiron School's Software Engineering course.

### Installing

Clone front-end and back-end repositories to chosen directory.

```
git clone git@github.com:marshaannon-goalify-backend.git
git clone git@github.com:marshaannon-goalify-frontend.git
```

### Within goalify-backend, perform the following:

Run:

```
bundle install
```

If you haven't already, you will need to Create a Postgres database.

Perform migrations by running:
```
rails db:create
rails db:migrate
rails db:seed
```
Start server:
```
rails s
```
### goalify-frontend

Start server:
```
yarn start or npm start
```

Navigate to http://localhost:3001/ in browser.

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Pull Request Process

1.Ensure any install or build dependencies are removed before the end of the layer when doing a build.

2.Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.

3.Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.

4.You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Versioning:

For the versions available, see the tags on this repository.

Authors: Marsha Annon - initial work

### License: 

This project is licensed under the MIT License - see the LICENSE.md file for details
