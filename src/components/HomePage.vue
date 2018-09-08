<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h3>
      <router-link class="in internal-link"
                   to="/portfolio">Portfolio</router-link>
    </h3>
    <h3>
      <a class="in"
         target="_blank"
         href="../../static/Resume_5.pdf">Resume</a>
    </h3>
    <h3>
      <router-link class="in internal-link"
                   to="/contact-me">Contact Me</router-link>
    </h3>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      pages: [
        ['Portfolio', '/portfolio'],
        ['Resume', '../../static/Resume_5.pdf'],
        ['Contact Me', '/contact-me']
      ]
    }
  }
}
</script>

<style>

</style>
