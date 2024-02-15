# multirepo-client2
###### tsconfig paths relative from external project 

This project demonstrates how you can consume a library from independent project (**_monorepo-client1-and-lib_**).

### Pre-requisite
Build library in **_monorepo-client1-and-lib_** project.

### Usage
Library referenced via relative **_tsconfig.json_** 'paths' entries that point to 'dist' of the external library project.

Start: `ng serve`

> **NOTE**: If you build the library with watch then library changes are propagated autimatically
> and rebuild of application also triggered. 

### Other scenarios
- Try to change version number of _rxjs_ in **_package.json_** to demonstrate NPM library version hell.

