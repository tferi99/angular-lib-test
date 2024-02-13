# MultirepoClient4
###### tsconfig paths relative from external project to library sources

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.
This project demonstrates how you can consume a library from independent project (**_monorepo-client1-and-lib_**).

### Pre-requisite
Build library in **_monorepo-client1-and-lib_** project.

### Usage
Library referenced via relative **_tsconfig.json_** 'paths' entries that point to 'src' of the external library project.

Start: `ng serve`

> **NOTE**: If you build the library with watch then library changes are propagated autimatically
> and rebuild of application also triggered.

### Other scenarios
- Try to change version number of _rxjs_ in **_package.json_** (for example to 7.5.7), to demonstrate NPM library version hell.

