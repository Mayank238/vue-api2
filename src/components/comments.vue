<template>
<div v-if="comment &&  comment.length && user && user.length">
	<router-link align="center" tag="h2" to="/"><a>home</a></router-link>
	 <div class="container card">
    <div class="card-body text-center" ><b>{{$route.params.title}}</b></div>
    <div class="card-body">{{$route.params.body}}</div>
      <router-link tag="p" class="author" :to="{name: 'user', params:{}}"><a>@{{user[0].name}}</a></router-link>
      <div class="card-body">
      <p v-for="com in comment">
      	<ul><li>{{com.body}}</li></ul></p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {

data(){
     return{
      info: null,
      comment: null,
      user: null
     }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => (this.info = response.data))
      .catch((err)=>{this.info = err})
  },
  mounted(){
  	//console.log(this.comment.postId)
    axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.$route.params.id)
      .then((response) => (this.comment = response.data))

      axios.get('https://jsonplaceholder.typicode.com/users?id='+this.$route.params.id)
      .then((response) => (this.user = response.data))
  }
}
</script>
<style>
 .author{
		padding-left: 1000px
	}
</style>
