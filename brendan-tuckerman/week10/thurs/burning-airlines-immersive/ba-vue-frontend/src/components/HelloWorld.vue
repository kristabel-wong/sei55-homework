<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ anotherMessage }}</h2>
    <h2>Essential Links</h2>

    <h2 title="this will appear on hover">Hover on me</h2>
    <h2 v-bind:title="anotherMessage">Hover on me (I'm bound)</h2> 

    <!-- v-model can act in place of a click handler. This is in place of set state -->
    <input type ="text" v-model="anotherMessage"/> 

    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () { //data is the equivalent of state in React
    //data () is shorthand for data: function(){}
    // It is a function, not just a an object. It has to be so that each
    // component gets a unique version of each one.
    //That is, it returns a unique version of this, not send the smae object.
    return {
      msg: 'Welcome to Your Vue.js App',
      anotherMessage: 'Just horsing around with state'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
