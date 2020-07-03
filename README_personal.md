# Tour Of Heroes (personal documentation)
Go back to [HOME PAGE](https://github.com/littleh322/Tour-Of-Heroes) for regular documenation.

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