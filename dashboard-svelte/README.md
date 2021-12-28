
# Dashboard in Svelte

This is the project in [Svelte](https://svelte.dev) apps. 

## Get started

```bash
cd dashboard-svelte
npm install
npm run dev
```

## Overall impressions
Not backed by a Google/Facebook/Amazon/Microsoft but it is headed by a camera-friendly, well-spoken, charismatic developer named Rich Harris. Very rare and very powerful combination.

The framework has some really cool bells and whistles that other frameworks don't have, like animations built in. But it lacks basic features that should probably have been prioritized.

It seems not-quite-ready but has a passionate community so I expect it to grow up quickly. There are lots of changes being made in a short amount of time. This is both good and bad. You can expect deprecations but the shortcomings can be upgraded.

Svelte uses [Rollup](https://rollupjs.org) for bundling instead of webpack.

Svelte, like Vue and unlike React and Angular, does not allow private components, aka. two components in one file. Note that even though you **can** do this in Angular, you still need to register the component in the module.

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. 
It does respond to live changes. Edit a component file in `src` and save it to see your changes.

Compile errors show on the command line only. The browser never changes because it can't show what hasn't compiled. So you get no indication that there's a problem. Bottom line: Keep an eye on the command line compiler, not on the browser.

## Architecture
It's not as much a framework as it is a compiler. We don't create a bunch of executable JavaScript and put the entire app in the browser to run. Instead, each request runs the compiler on the server, generates a page and sends it to the client.

Harris claims that this is faster. With latency being the bottleneck, I don't see how that's possible -- after the initial load, obviously.

## Svelte vs SvelteKit
Umm... Svelte is for generating components (?) and SvelteKit is for generating sites (?).

SvelteKit is built on top of Svelte. The components you write are done with Svelte syntax. The pages, routing, etc. are done using SvelteKit idioms and tools.

SvelteKit has *adapters* for different kinds of servers, from Node to AWS to Netlify.

Angular and Ember are platforms - You build whole sites with them. (Heavy)
Vue and React are frameworks/libraries - You build components with them but you're left to stitch them together as sites on your own. Next and Gatsby and Remix help with this.

## Routing
The official way to have multiple *pages* is by using SvelteKit. But there are a few libraries that help to simulate this in a lightweight way. We chose [svelte-routing](https://github.com/EmilTholin/svelte-routing) because it is declarative and looks like react-router.

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
## Styles
Svelte is pre-compiled, so each component shares one copy of the <style> and therefore cannot have variables in the styles. Any variation in the styles (like the background-color in our RandomColorWidget) must be done as a `style=` attribute.

## Using TypeScript
This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```
It immediately had configuration issues. the tsconfig.json file is extending a ruleset that doesn't exist. 
```json
"extends": "@tsconfig/svelte/tsconfig.json",
```
The fix according to [this](https://github.com/sveltejs/template/issues/261) is to remove that line. "It'll be fixed someday", they say. Not too encouraging.

Another example: There are red squiglies in places where there aren't problems because Svelte isn't true JavaScript. This creates "warning blindness".

## Documentation
The official [site](http://svelte.dev) has dated and unclear information. Also discouraging. 

It's fairly clear that no one is being paid a salary to maintain documentation; the quality is low, IMHO. There's literally nothing there on using TypeScript. For example, what, exactly is the proper type for a Svelte component?

## Hey! There's a REPL!
So you can share code with other devs: https://svelte.dev/repl