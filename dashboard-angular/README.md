# Dashboard in Angular

Angular is bloated and heavy and frustrating. Just like Java and C# and Dart. No wonder it needs TypeScript.

You write a ton of complex code to get the simplest things accomplished. Example: rxjs and TypeScript.

This is why Angular is declining in popularity. It is the poster child for the vi effect.

# Dynamic components
This was much simpler in Svelte, Vue, and React. In Angular, it was tough because we needed to use a ViewChild decorator with a custom directive. Yeesh!

Disappointed that we can't have truly private/local components. DashboardWidget and RandomColorWidget are only known to DashboardComponent so they can be private. But because every component must be registered to a module (AppModule in this case), I had to export them.
