<template>
	<div>
		<router-link align="center" tag="h2" to="/"><a>home</a></router-link>
		<div class="container card">
			<div class="card-body text-center" v-if="user && user.length">
				<p>@{{user[0].username}}</p>
				<p>{{user[0].name}}</p>
				<p>{{user[0].email}}</p>
				<p>{{user[0].address.street}},{{user[0].address.suite}},{{user[0].address.city}}
				,{{user[0].address.zipcode}}</p>
				<p>{{user[0].phone}}</p>
				<p>{{user[0].website}}</p>
				<p>{{user[0].company.name}}</p>

			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
 import axios from 'axios'
	export default{
		 data(){
     return{
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

      axios.get('https://jsonplaceholder.typicode.com/users?id='+ this.$route.params.id)
      .then((response) => (this.user = response.data))
  }


	}
</script>
