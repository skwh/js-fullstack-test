<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: "slide-left",
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
}
</script>

<style>

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: scale(0.95);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: scale(1.05);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #222;
  font-size: 16px;
  font-variant-ligatures: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

div#app {
  color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

main {
  transition: all 0.35s cubic-bezier(.55,0,.1,1);
  max-width: 65vw;
  padding: 10vh 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Space Mono", monospace;
}

p, span {
	font-family: "Open Sans", sans-serif;
}

h1 {
  font-size: 5em;
}

h1, h3 {
  margin: 0;
}

h3 {
  text-indent: 0.75em;
  font-size: 1.35em;
}

h4 {
  font-size: 1.25em;
  margin: 0.5em;
}

h4>a:hover {
  color: #AAA;
}

h3>a:hover {
  color: rgb(66, 134, 244);
}

h3>a {
  transition: color 0.3s;
}

h3>a::after, h4>a::before {
  font-size: 0.75em;
  transition: margin 0.2s;
}

h3>a.in::after {
  content: "  >>";
}

h4>a.out::before {
  content: "<< ";
}

h4>a.out:hover::before {
  margin-right: 5px;
}

h3>a.in:hover::after {
  margin-left: 5px;
}

code {
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  display: block;
  padding: 1em;
  text-align: center;
}

/* @media only screen and (max-width: 320px) {
  main {
    width: 90%;
  }
}
@media only screen and (max-width:425px) {
  main {
    width: 85%;
  }
}
@media only screen and (max-width:768px) {
  main {
    width: 70%;
  }
}
@media only screen and (max-width:1440px) {
  main {
    width: 60%;
  }
} */
</style>
