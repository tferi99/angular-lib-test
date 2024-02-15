# multirepo-client3
###### 'npm link' + tsconfig paths to local node_modules

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
This project demonstrates how you can consume a library from independent project (**_monorepo-client1-and-lib_**).

### Pre-requisite
- Build library in **_monorepo-client1-and-lib_** project.
- call `npm run link` always after you called `npm install` in this project

### Usage
Library referenced via **_tsconfig.json_** 'paths' entries that points to a soflink created into local **_node_modules_** from the library with `nm link <lib-name>`

Start: `ng serve`

> **NOTE**: If you build the library with watch then library changes are propagated automatically
> and rebuild of application also triggered. 

> <font color="red">**!!!!! WARNING !!!!!**</font>
> `npm run link` should be called always after `npm install` has been called because it deletes all dependencies that not contained by **_package.json_**.
 

