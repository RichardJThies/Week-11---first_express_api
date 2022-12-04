<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <h2>{{helloMessage}}</h2><!--displays msg from server-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data(){
    return {
      helloMessage: ''//receives msg from server?
    }
  },
  props: {
    msg: String
  },
  mounted(){//vue function. called as the component is being dispayed on screen
    this.$hello_api.getHelloMessage().then(resp => {//API call. ".getHelloMessage()" returns a promise
      this.helloMessage = resp.message
    })
  }//good place for initial setup/configuration, fetching data, other tasks than need to happen as the app is being loaded
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
