# TourOfHeroes
Go to --> [README_personal.md](./README_personal.md) <-- to see personal documentation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Tour Of Heroes (personal documentation)

## **Angular**

### **Notes:**

##### Component:
- ng generate component heroes
  - creates  `selector`, `templateUrl`, and `styleUrls` for you.
    - selector:     top-layer CSS
    - templateUrl:  html layout
    - styleUrls:    private styling
- import Component and OnInit from @angular/core
- @Component is the declaration for a new component
- OnInit is really similar to React's componentDidMount

##### nGFor and loops
- *ngFor directives / ngForOf iterable / first, last, even, odd, index, count
  - Example:
    ```
    <li *ngFor="let user of users; index as i; first as isFirst">
      {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
    </li>
    ```
	
## Helpful hints:
- Learn about Angular --> [file-structure](https://angular.io/guide/file-structure) <--
- Learn about Angular --> [CLI](https://angular.io/cli) <--


## **Angular & React Similarities:**
TypeScript (.ts or .tsx file) can be involved which I already know how to write for the most part.