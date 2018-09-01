<template>
  <h3 class="project-list-item">
      <router-link v-bind:to="'/portfolio/' + this.projectId">
        <slot></slot>
      </router-link>
  </h3>
</template>
<script>
export default {
  name: 'ProjectListItem',
  props: ['projectId']
}
</script>
<style scoped>

</style>
