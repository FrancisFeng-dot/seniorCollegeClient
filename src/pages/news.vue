<template>
	<div>
		<ActNav></ActNav>
		<keep-alive>
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
	import ActNav from '@/components/ActNav'
  	import {mapActions} from 'vuex'

	export default {
		components:{
			ActNav
		},
		props:[],
		data(){
			return {

			}
		},
		computed:{

		},
		methods:{

		},
	    beforeCreate: function() {
	        console.log(1);
	    },
	    created: function() {
	        console.log(2);
			this.$store.dispatch('reqnavtitle','新闻资讯');
	    },
	    beforeMount: function() {
	        console.log(3);
	    },
	    mounted: function() {
	        console.log(4);
	    },
	    beforeUpdate: function() {
	        console.log(5);
	    },
	    updated: function() {
	        console.log(6);
	    },
	    beforeDestroy: function() {
	        console.log(7);
	    },
	    destroyed: function() {
	        console.log(8);
	    },
		watch: {
		    '$route' (to, from) {
				console.log(to);
				console.log(from);
		    }
		},
	    beforeRouteEnter(to,from,next){
	    	console.log('RouterEnter');
	    	next();
	    },
	    beforeRouteUpdate(to,from,next){
	    	console.log('RouteUpdate');
	    	next();
	    },
	    beforeRouteLeave(to,from,next){
	    	console.log('RouteLeave');
	    	next();
	    }
	}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">

</style>