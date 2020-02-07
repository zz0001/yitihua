<template>
	<div class="chat">
		<tk-header>
			chat聊天组件
		</tk-header>
		<div>
		</div>
		<div class="container" style="left:0;right:0;overflow:scroll;position:fixed;top:50px;bottom:120px;">
			<div style="padding-bottom:100px;">
				<tk-chat-bubble :data="item" :key=index v-for="item,index of d">
				</tk-chat-bubble>
			</div>
		</div>
		<div class="foot">
			<div class="input">
				<input style="padding-left:20px;" v-model="msg" type="text" id="name" value="">
			</div>
			<tk-button style="margin-top:10px;" @click="send">发送</tk-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				ws:null,
				uid:'',
				msg:'',
				d:[]
			}
		},
		created(){},
		methods:{
			send(){
				this.ws.send(JSON.stringify({
					uid:this.uid,
					type:'message',
					msg:this.msg
				}));
				var obj={
					uid:this.uid,
					type:'message',
					msg:this.msg,
					isMe:true
				}
				this.d.push(obj)
				this.msg='';
			},
			transformData(obj){
				return JSON.stringify(obj)
			}
		},
		beforeDestroy(){
			console.log(this.d)
			localStorage.setItem('d',JSON.stringify(this.d));
		},
		mounted(){
			var a=localStorage.getItem('d');
			if(a){
				this.d=JSON.parse(a)
			}
			var uid=localStorage.getItem('uid')||new Date().getTime();
			this.uid=uid;
			var baseURL=this.baseURL.replace('http','ws')
			this.ws=new WebSocket(baseURL);
			var that=this;
			this.ws.onopen = function(e) {
				var obj={
					uid:that.uid,
					type:'connect'
				}
				that.ws.send(that.transformData(obj))
			}
			//收到消息处理
			this.ws.onmessage = function(e) {
				var options=JSON.parse(e.data);
				var type=options.type;
				console.log(type);
				switch(type){
					case 'message':
						that.d.push(options);
						break;
				}
			}
			this.ws.onclose = function(evt) {
				console.log("Connection closed");
			}
			this.ws.onerror = function(evt) {  
			    console.log("WebSocketError!");  
			}; 
		}
		
	}
</script>

<style lang=less>
	.foot {
		position: fixed;
		bottom: 0;
		height: 120px;
		width: 100%;
		.input {
			input {
				width: 100%;
				font-size: 20px;
				height: 50px;
				border: 1px solid #ddd;
			}
		}
		.button {
			line-height: 70px;
			height: 100px;
			background: #0000FF;
			color: #fff;
			text-align: center;
		}
	}
.container::-webkit-scrollbar {
     display: none;
  }
</style>