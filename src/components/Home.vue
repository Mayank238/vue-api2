<template>
  <div>
<div v-if="info && info.length">
	<div class="container card space" v-for="infoq in info">
    <router-link tag="div" :to="{name: 'Comment', params: {id: infoq.id, title:infoq.title, body: infoq.body }}" class="text-center"><b><a>{{ infoq.title}}</a></b></router-link>
    <router-view/>
    <div class="card-body">
      <p>{{infoq.body}}</p>
    </div>
      <p class="author" >@Ethan Hunt</p>

  </div>
  <div class="space"></div>

</div>

</div>

</template>
<style>
	.author{
		padding-left: 1000px
	}
  .space{
    margin-top: 20px;
  }
</style>
<script>
import axios from 'axios'
export default{
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
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => (this.comment = response.data))

  }

}
</script>
