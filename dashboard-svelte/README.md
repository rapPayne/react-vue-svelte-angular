![Svelte](../screenshots/svelteLogo.jpg)
# Dashboard in Svelte

## How to run
```bash
$ npm install
$ npm run dev
```
Then open a browser and hit http://localhost:5000

## How it was created initially
```bash
npx degit sveltejs/template dashboard-svelte
node scripts/setupTypeScript.js
```

The TypeScript set up immediately had configuration issues. the tsconfig.json file is extending a ruleset that doesn't exist. 
```json
"extends": "@tsconfig/svelte/tsconfig.json",
```
The fix according to [this](https://github.com/sveltejs/template/issues/261) is to remove that line. "It'll be fixed someday", they say. Not too encouraging.

## Hey! There's a REPL!
So you can share code with other devs: https://svelte.dev/repl