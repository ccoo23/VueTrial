<template>
  <div>
    <H1 class="header">{{title}}</H1>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require('axios')
// axios.defaults.baseURL = 'http://10.72.0.83:8088'
export default {
  data () {
    return {
      title: 'MY TODOLIST',
    };
  },
  created () {
    axios.get('http://localhost:8088/user/userinfo', {withCredentials:true})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
};
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>
