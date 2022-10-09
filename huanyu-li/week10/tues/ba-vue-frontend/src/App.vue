<template>
  <div id="app">
    <header>
      <h1>Burning Airlines</h1>
      <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link :to="{name:'Search'}">Flight Search</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
