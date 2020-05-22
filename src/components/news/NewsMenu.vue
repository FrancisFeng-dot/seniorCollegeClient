<template>
<div class="newsframe">
	<div>
		<div class="navlefttitle">
			新闻资讯
		</div>
		<ul class="newslist">
			<router-link tag="li" :to="{path:`${index}`}" v-for="(item,index) in newsmenu" :key="item" active-class="_activeli">{{item}}</router-link>
		</ul>
	</div>
	<div class="newscontent">
		<div>
			<nav><span>{{contenttitle}}</span></nav>
			<ul>
				<router-link tag="li" :to="{path:`/news/${menu}/${item.id}`}" v-for="(item,index,key) in contentlist" :key="item.id">
					<span>{{item.title}}</span>
					<span>{{item.createtime|timestr('year')}}</span>
				</router-link>
			</ul>
		</div>
		<el-pagination background layout="prev, pager, next" :total="total">
		</el-pagination>
	</div>
</div>
</template>

<script>
  	import {mapActions} from 'vuex'
  	import Api from '@/api/newsApi';
	export default {
		data(){
			return {
				contentlist:[],
				contenttitle:'',
				total:100,
				newsmenu:[]
			}
		},
		props:['menu'],
		computed: {

	    },
		methods:{
			...mapActions('News',['reqcontlist']),
			showlist:function(title){
				Api.getNewsrightlist(title).then((data)=>{
	        		this.contentlist = data.data.list;
	        		let num = data.data.total_num/data.data.limit;
	        		this.total = (data.data.total_num%data.data.limit)>0?Math.floor(num)+1:Math.floor(num);
					this.contenttitle = title;
					this.reqcontlist(data.data.list);
				}).catch(function(error){
					console.log(error);
				});
			}
		},
		watch: {
		    '$route' (to, from) {
				console.log(to);
				console.log(from);
				(to.params.menu == from.params.menu) || to.name=='NewsPage'?'':this.showlist(this.newsmenu[to.params.menu]);
		    }
		},
	    beforeCreate: function() {
	        console.log(21);
	    },
	    created: function() {
	        console.log(22);
			Api.getNewsleftlist().then((data)=>{
				this.newsmenu = data.data;
				this.showlist(data.data[this.menu]);
			}).catch(function(error){
				console.log(error);
			});
	    },
	    beforeMount: function() {
	        console.log(23);
	    },
	    mounted: function() {
	        console.log(24);
	    },
	    beforeUpdate: function() {
	        console.log(25);
	    },
	    updated: function() {
	        console.log(26);
	    },
	    beforeDestroy: function() {
	        console.log(27);
	    },
	    destroyed: function() {
	        console.log(28);
	    }
	}
</script>
<style lang="scss" scoped>
  %mgto{
    margin:0 auto;
  }
  %ulst{
  	margin:0;
  	padding:0;
  	list-style: none;
  }

	._activeli{
		color:#ffffff!important;background:#C52E0F;cursor:pointer;
	}


  @mixin displayflex($row,$column,$direction,$wrap){
    display: flex;
    @if $direction == column {
      flex-direction:column;
    }@else{
      flex-direction:row;
    }
    @if $wrap == wrap {
      flex-wrap:wrap;
    }@else{
      flex-wrap:nowrap;
    }
    justify-content:$row;
    align-items:$column;
  }
  .box-border{
	box-sizing:border-box;
  }
  @mixin font-style($family,$size,$color,$weight){
  	font-family: $family;
		font-size:$size;
		color:$color;
		font-weight:$weight;
  }

  .newsframe{
  	@extend %mgto;
  	width:1200px;
  	@include displayflex(space-between,flex-start,row,nowrap);
		&>div:nth-child(1){
  		width:250px;
  		height:820px;
  	}
  }

  $pd-lf:padding-left;
	.navlefttitle{
		background:url('../../assets/newsnav_img1.png');
		background-size:100% 100%;
		width:100%;height:80px;
		@include font-style('PingFangSC-Semibold',24px,#ffffff,600);
		@include displayflex(flex-start,center,row,nowrap);
		padding-left:31px;
		box-sizing: border-box;
	}
	.newslist{
		@extend %ulst;
		margin-top:10px;
		border-bottom:4px solid #C52E0F;
		padding-bottom:10px;
		width: 100%;
    	background: #ffffff;
		&>li{
			width:100%;
			height:53px;
			@extend .box-border;
			#{$pd-lf}:31px;
			@include displayflex(flex-start,center,row,nowrap);
			@include font-style('PingFangSC-Semibold',18px,#3A3A3A,600);
			border-bottom:1px solid #DBDBDB;
			&:hover{
				@extend ._activeli
			}
		}
	}
	.newscontent{
		width:934px;
  		height:820px;
  		background:#ffffff;
  		margin-left:17px;
  		margin-bottom:40px;
		@include displayflex(space-between,center,column,nowrap);
		@extend .box-border;
		padding:0 40px;
		&>div:nth-child(1){
			width:100%;
			height:100%;
			@include displayflex(flex-start,center,column,nowrap);
			&>nav{
				width:100%;
				height:73px;
				@include font-style('PingFangSC-Semibold',20px,#C52E0F,600);
				border-bottom:2px solid #DBDBDB;
				@include displayflex(flex-end,flex-start,column,nowrap);
				&>span{
					padding-bottom:15px;
					border-bottom:2px solid #C52E0F;
					margin-bottom: -2px;
				}
			}
			&>ul{
				@extend %ulst;
				width:100%;
				@include displayflex(flex-start,center,column,nowrap);
				&>li{
					width:100%;
					height:53px;
					@include displayflex(space-between,center,row,nowrap);
					border-bottom:2px dashed #DBDBDB;
					&>span{
						&:nth-child(1){
							@include font-style('PingFangSC-Regular',16px,#3A3A3A,400);
							&:hover{
								cursor:pointer;
								color:#C52E0F!important;
							}
						}
						&:nth-child(2){
							@include font-style('PingFangSC-Regular',14px,#7A7A7A,400);
						}
					}
				}
			}
		}

		&>div:nth-child(2){
			margin-bottom:51px;
		}
	}
</style>
<style lang="scss">
  @mixin font-style($family,$size,$color,$weight){
  	font-family: $family;
		font-size:$size;
		color:$color;
		font-weight:$weight;
  }
  .el-pagination {
	&>.el-pager{
		&>li{
			@include font-style('PingFangSC-Regular',14px,#3A3A3A,400);
			&:hover{
				background: #C52E0F !important;
				color: #fff !important;
			}
		}
		&>.active{
			background: #C52E0F !important;
			color: #fff;
		}
	}
}
</style>