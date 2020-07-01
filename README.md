# Tour-Of-Heroes

##Angular

**Notes:**
- ng generate component heroes
- import Component and OnInit from @angular/core
- @Component is the declaration for a new component
- OnInit is really similar to React's componentDidMount
- *ngFor directives / ngForOf iterable / first, last, even, odd, index, count
**Example:**
```
<li *ngFor="let user of users; index as i; first as isFirst">
  {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```


##Similarities with React
TypeScript is involved which I already know how to write for the most part.
