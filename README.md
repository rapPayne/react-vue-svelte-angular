# React vs Angular vs Vue vs Svelte
The same web app written in React, Vue, Svelte, and Angular

## What is this?
You're looking at a repository holding four versions of the same **exact** web application written using different frameworks.

It's a dashboard app. It uses a bunch of placeholders with random colors to keep the app simple but we created one widget with a five-day weather forecast. With this we'll be able to show how React, Svelte, Angular, and Vue handle:
- Responsive web design
- Consuming an API service using Ajax
- Complex layouts using flexbox and gridview
- Client-side routing in a SPA
- Several generations of components
- Passing props
- Maintaining component state
- Dynamically creating components

## Rules
To compare the frameworks apples-to-apples, they'll be uniform:
- Use TypeScript
- Use npm
- No CSS preprocessors (like Sass, Less, Stylus, Tailwind, etc.)
- No CSS frameworks (like Bootstrap, Material Design Lite, etc.)
- No testing so we can keep things simple.

## Dashboard app description
We're building a site whose main feature is a dashboard. 
- The site will have X "pages" and a navbar across the top. The dashboard is just one of those pages.
- Start with 25 widgets but it should flex given any number
- Responsive with one widget across on a phone. Like two across on an iPad portrait or three-ish when landscape. The widgets will be between ... ummm ... 350 and 500 pixels wide with a 16:9 aspect ratio.
- One widget will be built out. It will consume data from a CORS API hosted somewhere. The others can be placeholders for a proof-of-concept.

Here are the projects
## [Angular](./dashboard-angular)
![Screengrab with Angular](screenshots/angular.png)

## [React](./dashboard-react)
![Screengrab with React](screenshots/react.png)

## [Vue](./dashboard-vue)
![Screengrab with Vue](screenshots/vue.png)

## [Svelte](./dashboard-svelte)
![Screengrab with Svelte](screenshots/svelte.png)
