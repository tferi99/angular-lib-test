# MultirepoClient2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Usage
This is a consumer of library built in **_monorepo-client1-and-lib_** project.

Library referenced via **_tsconfig.json_** 'paths' entry that point to 'dist' of the library directly.

Pre-requisite: build the library 

Start: `ng serve`

> **NOTE**: If you build the library with watch then library changes are propagated autimatically
> and rebuild of application also triggered. 