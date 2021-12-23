<script lang="ts">
	import Dashboard from "./components/Dashboard.svelte";
	import { links, Router, Route } from "svelte-routing";
	import About from "./components/About.svelte";
	import Contact from "./components/Contact.svelte";
	import NotFound from "./components/NotFound.svelte";
</script>

<Router>
	<div>
		<header>
			<nav id="headerNav" use:links>
				<a href="/" class="navLink">Home</a>
				<a href="/about" class="navLink">About Us</a>
				<a href="/contact" class="navLink">Contact Us</a>
			</nav>
		</header>
		<main id="mainWrapper">
			<Route path="/"><Dashboard /></Route>
			<Route path="/about"><About /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route><NotFound /></Route>
		</main>
	</div>
</Router>

<style>
	#mainWrapper {
		padding-top: 50px;
	}
	#headerNav {
		background-color: darkblue;
		padding: 10px;
		text-align: left;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.navLink {
		color: white;
		font-size: 1.5em;
		padding: 0px 50px 0px 0px;
		text-decoration: none;
	}
</style>
