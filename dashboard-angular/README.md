# Dashboard in Angular

## How to run
```bash
$ npm install
$ npm run serve
```
The open a browser and hit http://localhost:4200


## Overview of the framework
Angular, from Googe is the oldest and therefore most stable framework. It deserves major props for defining this space, creating the category singlehandledly.

## Brief impressions vs the other three
Angular is bloated and heavy and frustrating. Just like Java and C# and Dart. No wonder it needs TypeScript. You write a ton of complex code to get the simplest things accomplished. Example: rxjs and TypeScript.

Speaking of which, you're forced into using TypeScript. You may want to do this anyway but if you don't, it sucks -- you have no choice. Sure, their documentations says you can use vanilla JavaScript, but that's just not practical. Zero documentation. Zero examples. Zero community support. 

Angular is (IMHO) the toughest of the four to learn with React a close second. Its architecture and semantics require tons of study rather than just referencing. This is why Angular is declining in popularity. 

Components are split into three files, one each for CSS, HTML, and TypeScript, forcing the dev to switch between files to get it to work together. Yes, you can combine them into the `*.ts` file but then you lose intellisense and linting. That's a non-starter.

Also when you create a new component, you have to register it in a module like `app.module.ts`. Not a big deal, but it's another non-obvious step, hidden from noobs, and a likely place for bugs to appear. It doesn't have to be like this.

# Dynamic components
This was much simpler in Svelte, Vue, and React. In Angular, it was tough because we needed to use a ViewChild decorator with a custom directive. Yeesh!
