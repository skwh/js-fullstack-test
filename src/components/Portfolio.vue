<template>
  <main>
    <h1>Portfolio</h1>
    <project-list-item v-for="project in projectNames" :key="project[1]" :projectId="project[1]">{{ project[0] }}</project-list-item>
    <h4><router-link v-bind:to="'/'"><< Back</router-link></h4>
  </main>
</template>

<script>
import ProjectListItem from './ProjectListItem'

export default {
  name: 'Portfolio',
  components: {
    ProjectListItem
  },
  data() {
    return {
      projectNames: [
        ['Groupme Electron App', 1],
        ['Royal Banner Website', 2],
        ['Hello LA!', 3],
      ]
    }
  }
}
</script>

<style>

</style>
