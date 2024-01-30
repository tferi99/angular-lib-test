# MultirepoClient3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Usage
This is a consumer of library built in **_monorepo-client1-and-lib_** project.

Library referenced via **_tsconfig.json_** 'paths' entry that points to soflink created into local **_node_modules_** from the library with `nm link`

Start: `ng serve`

> **NOTE**: If you build the library with watch then library changes are propagated autimatically
> and rebuild of application also triggered. 
