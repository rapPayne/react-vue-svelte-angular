<template>
  <div>
    <header>
      <nav id="headerNav">
        <!-- <a href="/" class="navLink">Home</a>
				<a href="/about" class="navLink">About Us</a>
				<a href="/contact" class="navLink">Contact Us</a> -->

        <router-link to="/" class="navLink">Home</router-link> |
        <router-link to="/about" class="navLink">About Us</router-link>
        <router-link to="/contact" class="navLink">Contact Us</router-link>
      </nav>
    </header>
    <main id="mainWrapper">
      <router-view />
      <!-- <Route path="/"><Dashboard /></Route>
			<Route path="/about"><About /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route><NotFound /></Route> -->
    </main>
  </div>

  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
</template>

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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
