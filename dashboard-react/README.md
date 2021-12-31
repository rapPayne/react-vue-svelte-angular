![React](../screenshots/reactLogo.jpg)
## Dashboard in React

## How to run
```bash
$ npm install
$ npm run start
```
Then open a browser and hit http://localhost:3000

## Overview of the framework

## Brief impressions vs the other three
React doesn't have directives in the HTML. Instead it relies on JSX to handle flow control, using Array.prototype.map() for iteration and logical operators for conditionals. This is less obvious, less clean, and presents a considerable learning curve. Before you push back, think for a second ... didn't it take you a while to understand why you can't use `if` or `for` or `while` in JSX? The defense rests, your honor.

We don't use ids in React's JSX because they're not encapsulated like they are in the other three. When the other three have ids on a piece of HTML that piece is not visible to other parts of the page. That's not true with React. 

It is the only one of the three frameworks that doesn't give us a shortcut to two-way binding. The others at least pretend to support two-way binding. React forces us to jump through some pretty tough hoops to get data from a textbox and back into state. You have to imperatively bind to a state variable - imperatively! and then rerender the component with the new value.

Lifecycle is much tougher with React. Whereas all three of the others support events like `mounted` or `OnInit`, React relies on the `useEffect()` hook which is hugely powerful but cryptic as heck!

Largest community support. Largest library selection.

`npx create-react-app --use-npm --template cra-template-typescript dashboard-react`