import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Comment from '@/components/comments'
import user from '@/components/user.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/comment/:id',
      name: 'Comment',
      component: Comment
    },
    {
    	path: '/user/:id',
    	name: 'user',
    	component: user
    }
  ]
})
