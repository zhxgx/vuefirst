<template>
  <div class="home">
   <div id="top">
			<div class="margin">
				<a href="#" class="s">
					<i></i>
					<span>发货地址：</span>
					<em>上海</em>
				</a>
				<div class="top-l2">
					<i></i>
					<span>网警提示</span>
				</div>
				
				<div class="top-r">
					<span>早上好，请<router-link :to="'reg'">登录</router-link></span>
					<!-- <a href="login.vue">注册</a> -->
          <router-link :to="'login'">注册</router-link>
					<p>
						<i class="a"></i>
						<span>会员俱乐部</span>
					</p>
					<p>
						<i class="c"> </i>
						<span>我的订单</span>
					</p>
				</div>
			</div>
		</div>

    <div id="header">
			<div class="margin clear">
				<a href="#" class="logo1"><img src="//img.yihaodianimg.com/front-homepage/global/images/logo/logo_new@2x.png"></a>
				<a href="#" class="logo2"><img src="//img30.360buyimg.com/img/jfs/t28237/269/997297430/10022/b24f8009/5c05314cNf894bdef.jpg"></a>
				
				<div class="header-c">
					<div>
						<input type="text" id="txt" value="西瓜霜" />
						<input type="button" id="btn" />
					</div>
					<div class="header-c-nav">
						<ul>
							<li>于都</li>
							<li>人格</li>
							<li>鳄鱼发</li>
							<li>梵蒂冈</li>
							<li>他就会</li>
						</ul>
					</div>
				</div>
				
					 <router-link :to="'user'" id="car">我的购物车</router-link>
					<!-- <a id="car" href="car.html">我的购物车</a>					
					<a id="car" href="list.html">去购物</a> -->
					<router-link :to="'detail'" id="car">去购物</router-link>
			</div>
		</div>
		
		<div id="nav">
			<div class="margin clear">
				<ul>
					<li id="dj">
						<a href="#" >全部目录</a>
						<div class="nav-w">
							<div class="nav-w-e">
								<span>诶若独特</span>
								<div class="ie">
									eriugreu
								</div>
							</div>
						</div>
					</li>
					<li><a href="#">ie</a></li>
					<li><a href="#">但法国人</a></li>
					<li><a href="#">发的</a></li>
					<li><a href="#">复旦复</a></li>
					<li><a href="#">发的</a></li>
				</ul>
				
			</div>
			
		</div>



  </div>
</template>


<style scoped>

.home{background: red;}
.home .margin{width:1070px;margin:0 auto;}

.home #top{height: 30px;border-bottom: 1px solid #e5e5e5;background-color: #f4f4f4;line-height:30px;}
.home #top a.s{float:left;}
.home #top a:hover{color:red;}
.home #top a i{display:inline-block;height:15px;width:11px;background:#eaa789;}
.home #top .top-l2{float:left;margin-left:10px;pading-right:10px;}
.home #top .top-l2 span:hover{color:red;cursor:pointer;}
.home #top .top-l2 i{display:inline-block;height:12px;width:15px;background:#eddcde;}
.home #top .top-r{float:right;padding-left:30px}
.home #top .top-r>span{float:left;margin-right:20px;}
.home #top .top-r span a{color:red;}
.home #top .top-r>a{margin-right:20px;float:left;}
.home #top .top-r p{float:left;margin-right:20px;}

#top .top-r p i.a{display:inline-block;height:15px;width:15px;background:#e5e5e5;}
#top .top-r p i.c{display:inline-block;height:14px;width:13px;background:#fe4457;}


#header{height:142px;}
#header a{float:left;}
#header a.logo1 img{height:140px;width:140px;}
#header a.logo2 img{height:90px;width:160px;margin-top:36px}
#header .header-c{float:left;overflow:hidden;margin:50px 0 0 80px;}
#header .header-c input{border:0;border:1px solid #666666;background:none;height:40px;float:left;overflow:hidden;}
#header .header-c #txt{padding:0 20px;width:260px;box-sizing:border-box;border-radius: 20px 0 0 20px;border-right:0;}
#header .header-c #btn{padding:10px 20px;border-left:0;width:20px;background:#499;border-radius: 0px 20px 20px 0px;}
#header .header-c .header-c-nav ul li {float:left;margin-right:10px;}

#header #car{width:120px;height:40px;color:red;border:1px solid #666666;margin:50px 0 0 40px;border-radius: 20px;line-height:40px;text-align:center;
background:#59f;}


#nav{position:relative;}
#nav ul li{float:left;padding:10px;}
#nav ul li:nth-child(1){background:red;}
#nav ul li:nth-child(1) a{color:#fff;}

#nav .nav-w{position:absolute;top:35px;z-index: 10;}
#nav .nav-w .nav-w-e{width:70px;height:20px;background:#666666;display:none;}
#nav .nav-w .ie{display:none; font-size:20px;color:#00BFFF;}
#nav .nav-w .nav-w-e:hover .ie{display:block;}

</style>

