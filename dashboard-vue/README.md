
# dashboard-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Overview
Uses a virtual DOM like React. 

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
