
 
<template> 
  <div id="app">
    <header> 
    <h1> BURRRNING AIRLINESSS</h1>
    <nav> 
      <router-link to="/"> Home </router-link>
      |
      <router-link to="Search"> FlightSearch </router-link>
      
    </nav>
    </header>
    <hr/>

    <router-view/> 
    
  </div>
</template>

<script>
  
  // 'SINGLE_FILE COMPONENT' view wth happened to seperation of concerns?

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
