# react-vue-svelte-angular
Same app written in React vs Vue vs Svelte vs Angular

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

With these requirements, we'll experience routing/navigation, consuming API data, encapsulation, realistic styling and layout with CSS.


## React
`npx create-react-app --use-npm --template cra-template-typescript dashboard-react`

## Svelte
https://joshcollinsworth.com/blog/introducing-svelte-comparing-with-react-vue
and

## Angular
Disappointed that we can't have truly private/local components. DashboardWidget and RandomColorWidget are only known to DashboardComponent so they can be private. But because every component must be registered to a module (AppModule in this case), I had to export them.
