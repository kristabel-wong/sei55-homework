<template>
  <div id="app">
    
    <header>
      <h1>BURRRNINGGGG AIRRRLINESS</h1>
        <nav>
          <router-link to="/">Home</router-link>
          |
          <router-link to="Search">Flight Search</router-link>
        </nav>
    </header>
    <hr/>
    <router-view/>
  </div>
</template>

<script>

// 'SINGLE-FILE COMPONENT'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
