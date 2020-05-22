<template>
	<div class="artstyle">
		<div id="articlecont">
			<h1 class="articletitle">{{articlecont.title}}</h1>
			<div class="setarticle">
				<div>
					<span>
						发布时间：{{articlecont.createtime|ca_timestr('year')}}
					</span>
					<span>
						发布作者：{{articlecont.author}}
					</span>
				</div>
				<div class="choicesize">
					<span>字号</span>
				    <el-radio-group v-model="radio4" size="mini" @change="changeartsize">
						<el-radio-button label="大"></el-radio-button>
						<el-radio-button label="中"></el-radio-button>
						<el-radio-button label="小"></el-radio-button>
				    </el-radio-group>
				</div>
			</div>
			<article class="contentsize" :style="{fontSize:articlesize+'px!important'}" v-html="articlecont.content"></article>
		</div>
		<div class="download" @click="downword" @mouseenter="changeimg('icon_downloadff')" @mouseleave="changeimg('icon_download7a')">
			<img :src="downloadimgUrl" alt="">
			<span>下载</span>
		</div>
		<div class="print" @click="printweb" @mouseenter="changeimg('icon_printff')" @mouseleave="changeimg('icon_print7a')">
			<img :src="printimgUrl" alt="">
			<span>打印</span>
		</div>
	</div>
</template>

<script>
  	import {mapGetters} from 'vuex'
  	import Api from '@/api/newsApi';
  	import saveAs from 'file-saver';
  	import "@/assets/downloadword/jquery.wordexport";
	export default {
		data(){
			return {
				radio4:'大',
				articlesize:20,
				downloadimgUrl:require('@/assets/icon_download7a.png'),
				printimgUrl:require('@/assets/icon_print7a.png'),
				articlecont:{}
			}
		},
		props:['articletitle'],
	    computed: {
	    	...mapGetters('News',['contlist'])
	    },
	    beforeCreate: function() {
	        console.log(31);
	    },
	    created: function() {
	        console.log(32);
			this.showarticle();
	    },
	    beforeMount: function() {
	        console.log(33);
	    },
	    mounted: function() {
	        console.log(34);
	    },
	    beforeUpdate: function() {
	        console.log(35);
	    },
	    updated: function() {
	        console.log(36);
	    },
	    beforeDestroy: function() {
	        console.log(37);
	    },
	    destroyed: function() {
	        console.log(38);
	    },
		methods:{
			showarticle:function(){
				let vm = this;
				this.contlist.forEach(function(item,index){
					if(item.id==vm.articletitle){
						vm.$set(vm,'articlecont',item);
					}
				});
			},
			changeartsize:function(){
				let vm = this;
				vm.$set(vm,'articlesize',vm.radio4=='大'?20:(vm.radio4=='中'?16:(vm.radio4=='小'?14:20)));
			},
			downword:function(){
				$('#articlecont').wordExport(this.articlecont.title);
			},
			printweb:function(){  
				var printHtml = document.getElementById('articlecont').innerHTML;
				var wind = window.open("",'newwindow', 'height=300, width=700, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');
				wind.document.body.innerHTML = printHtml;
				wind.print();
			},
			changeimg:function(img){
				img.indexOf('download')>1?this.$set(this,'downloadimgUrl',require('@/assets/'+ img +'.png')):this.$set(this,'printimgUrl',require('@/assets/'+ img +'.png'))
			}
		},
		watch: {
		    '$route' (to, from) {
				console.log(to);
				console.log(from);
				to.params.articletitle != from.params.articletitle?this.showarticle(to.params.articletitle):'';
		    }
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

  
  	$pd-lf:padding-left;

  	.artstyle{
	  	@extend %mgto;
	  	width:1200px;
	  	background:#ffffff;
	  	margin-bottom:40px;
	  	position:relative;
	  	@extend .box-border;
	  	padding:80px;
		&:nth-child(1){
			width:100%;
	  		@include displayflex(flex-start,center,column,nowrap);
		}
  	}

	%down_print{
		width:70px;height:70px;
		background:#ffffff;
		position:absolute;
		@include font-style('PingFangSC-Regular',14px,#000000,400);
		&>img{
			width:26px;height:26px;
		}
		border-radius:4px;
		@include displayflex(center,center,column,nowrap);
		&>span{
			margin-top:6px;
		}
		&:hover{
			background:#C52E0F!important;
			color:#FFFFFF!important;
			cursor: pointer;
		}
	}

	.download{
		top:240px;right:-90px;
		@extend %down_print;
		@media screen and (max-width: 1400px) {
	      right:20px;
	    }
	}
	.print{
		top:330px;right:-90px;
		@extend %down_print;
		@media screen and (max-width: 1400px) {
	      right:20px;
	    }
	}

	.articletitle{
		@include font-style('PingFangSC-Medium',30px,#3A3A3A,500);
		width:1040px;
		text-align: center;
	}

	.setarticle{
		width:100%;
		@include displayflex(space-between,center,row,nowrap);
		@include font-style('PingFangSC-Regular',14px,#7A7A7A,400);
		border-bottom:1px dashed #DBDBDB;
		margin-bottom:50px;
		&>div{
			margin:40px 30px;
			&:nth-child(1){
				&>span:nth-child(1){
					margin-right:40px;
				}
			}
		}
	}

	.contentsize{
		@include font-style('PingFangSC-Regular',20px,#3A3A3A,400);
	}
</style>
<style lang="scss">
  @mixin font-style($family,$size,$color,$weight){
  	font-family: $family;
		font-size:$size;
		color:$color;
		font-weight:$weight;
  }
.el-radio-group{
	&>label{
		&>span{
			padding: 7px 7px!important;
		    border-radius: 2px!important;
		    margin-left: 6px;
		    background: #F4F4F4;
		    border: 0!important;
		    box-shadow: none!important;
			@include font-style('PingFangSC-Regular',18px!important,#3A3A3A,400);
			&:hover{
				color:#3A3A3A;
			}
		}
		&>input:checked+span{
			background: #C52E0F!important;
		}
	}
}
</style>