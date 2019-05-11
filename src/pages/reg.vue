<template>
  <div class="reg">
    <div class="regist_header clearfix">
			<div class="wrap margin">
		        <a href="http://www.yhd.com"  class="logo"><img src="https://passport.yhd.com/front-passport/passport/images/loginlogo.jpg" height="55" alt="1号店" /></a>
		        <div class="regist_header_right clearfix">
		        	<!--<a href="#" class="english_edition" id="edition" style="display:none">English</a>-->
		            <div class="help_wrap">
		                <a class="hd_menu" href="#"><s class="help_ico"></s>帮助中心</a>
		               
		            </div>
		            <span class="fr">您好，欢迎光临1号店！<router-link :to="'login'" class="blue_link">注册</router-link>
                 <!--<a href="#" class="blue_link">请注册</a>--></span>
		        </div>
		    </div>
		  </div>
    <div class="margin mar" >
      
			<div id="input">
				用户名：<input type="text" id="txt" placeholder="用户名"/><span></span><br><br>
				手机号：<input type="text" id="num"  placeholder="手机号"/><span></span><br><br>
				验证码：<input type="text" id="yzm"  placeholder="验证码"/><span></span><br><br>
				设置密码：<input type="text" id="pas"  placeholder="设置密码"/><span></span><br><br>
				验证密码：<input type="password" id="word"  placeholder="验证密码"/><br>
				<input type="submit" id="sub" value="提交"/>
				<div id="car"></div>
			</div>
				
		</div>
  </div>
</template>


<style scoped>
  .margin{width:1070px;margin:0 auto;}
.wrap {height:100px;line-height: 100px;}
.wrap a{float:left;}
.wrap .clearfix{float:right;}
.wrap .clearfix .fr{float:left;}
.wrap .clearfix .fr a{float:none;}
.wrap .clearfix .help_wrap{float:right;margin:0 20px}

#sub{width:100px;height:50px;background:#9ff;}
#car{font-size: 30px;color:red;}

</style>