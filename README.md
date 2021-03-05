
# WeJaFoo Public

    An Angular microfrontend starter that serves unguarded public content via a micro-cms GraphQL datasource.

Default port: 4400

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2

----

## PREREQUISITES

One of the following should be cloned or linked to a destination on your local path:

- [bin-zsh](https://github.com/Micro-cosm/micro-public.git) - deployment utility
- [bin-go](https://github.com/Micro-cosm/bin-go.git) - deployment utility
- [micro-realm](https://github.com/Micro-cosm/micro-realm.git) - Firebase Hosting configs
- [Docker Desktop](https://docs.docker.com/desktop/) (or equivalent) - should include Docker Engine, Docker CLI client, Docker Compose

----

## DEPLOYMENT
### Local Docker server
Run `pu.sh --local` for a local Docker server. Navigate to `http://localhost:4400/`
### Remote GCP server
Run `pu.sh --remote=<_ALIAS_>` for a local Docker server. Navigate to `http://<_FIREBASE HOST_>/public/`

----

## DEVELOPMENT
### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag
 for a production build.

### Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:4400/` The app will automatically reload if you change
any of the source files.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/an
gular-cli/blob/master/README.md).
