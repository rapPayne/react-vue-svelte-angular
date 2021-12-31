![Vue](../screenshots/vueLogo.jpg)
# Dashboard in Vue

## How to run
```bash
$ npm install
$ npm run serve
```
Then open a browser and hit http://localhost:8080


## Overview of the framework

## Brief impressions vs the other three
This and Vue keep the entire component in a single file with three sections
1. `<script>` with JavaScript for behaviour
2. `<template>` with HTML for structure
3. `<style>` with CSS for styling and layout.

Whereas React asks you to bring "HTML" into your JavaScript and Angular asks you to bring JavaScript into your HTML, Vue keeps them blissfully separate and yet leaves them in a single file. Easy to find. Easy to maintain.

Uses a virtual DOM like React. 

Their CLI has a GUI interface which is incredibly slick and sets the standard for ease of use.

Very, very simple project. Minimalist. But it allows pluggable modules using the middleware pattern so it is highly extensible.
```JavaScript
Vue.use(SomePluggableModule)
Vue.use(AnotherPluggableModule)
Vue.use(YetAThirdPluggableModule)
```

It uses a combination of minimal JavaScript in the HTML and directives. So it fits between React (with zero directives and 100% JS-in-HTML) and Angular (100% directives and zero JS-in-HTML). But while that seems complex, I'd say it's the best of both worlds and thus easier to learn.


Runs client-side like Angular and React. Uses directives like everybody else but they're Vue directives. Double-curly braces for interpolations like Angular.

Created by Evan You as a personal project in 2013. It grew little by little through the community. 1.0.0 released in October 2015.

Vue 3 released in July(?) 2020. It supports TypeScript.

There are (too) many ways to create a new Vue app.
- CLI
- Vite - private, 3rd party. Meh.
- CDN - For components only. No SPA. Not robust.
- VuePress - JAMStack solution.
- PetiteVue - lightweight, stripped down. Again, not robust.

I used
```bash
$ npx @vue/cli create --default dashboard-vue
$ npx @vue/cli add typescript
$ npx @vue/cli add router
```
I said
Use classes: No
Took defaults for everything else

I said 
Use history mode? Y
To run:
`npm run serve`

## Components
Vue has components (duh), and props like React. It supports one-way binding, not two-way. Again, just like React and Angular.

You pass props down using the v-bind directive. Note that there's also a shortcut for it using the `:` character. Props are immutable like in React.

How to send data back up. Complex, like React and Angular. In the host you'll use `v-model="foo"` which passes the value down and listens for changes to it. In the inner, you'll `this.$emit('update:modelValue', someVal)` which sends it up to the host component.

Looping
`<foo v-for="thing in things" :key="thing.id"></foo>`
Just like in React, you need a key.

## Lifecycle events
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdated
- updated
- beforeUnmount
- Unmounted

## Router
Very different from the others. Vue-router is not declarative, it is imperative. You write it in JavaScript/TypeScript then add it as an argument to the instantiation of the app itself.

Much easier to learn than React or Angular.