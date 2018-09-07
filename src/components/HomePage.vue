<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h3 v-for="page in pages">
      <router-link class="internal-link"
                   v-bind:to="page[1]">{{ page[0] }}
                 </router-link>
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
