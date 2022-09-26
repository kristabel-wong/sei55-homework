<template>
  <div id="app">
    <header>
      <h1>B U R N I N G AIRLINES TOO</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Routes</router-link>
          </li>
          <li>
            <router-link to="Search">Search</router-link>
          </li>
          <li>
            <router-link to="/">All Flights</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <hr>
    
    <router-view/> 
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


  

  li{
    text-decoration: none;
    display: inline;
  }

</style>
