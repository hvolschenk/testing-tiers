# testing-tiers

The tiers of testing using React, Eslint, Jest and Nightwatch

## Tier one

The lowest tier of testing comprises of _linting_ and _unit testing_. In our
examples we have built tests for the `/src/urls.js` file, testing all methods
inside with [Jest](https://facebook.github.io/jest/). All linting is run through
[Eslint](https://eslint.org/).

### Linting

Linting is run through running `npm run lint` from the command-line. All npm
scripts are located inside the `package.json` file.

### Unit testing

Unit testing is run through running `npm run test:scripts` from the
command-line. All npm scripts are located inside the `package.json` file.

## Tier two

The second tier of testing is Automation or end-to-end testing. We are using
[Puppeteer](https://github.com/GoogleChrome/puppeteer) and Jest in unisan. In
our example we build an e2e test inside `/e2e/home.test.js`. These also run
together with unit tests with `npm run test:scripts` from the command-line.
