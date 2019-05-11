<template>
  <div class="login">
      <div class="regist_header clearfix">
        <div class="wrap margin">
              <a href="http://www.yhd.com"  class="logo"><img src="https://passport.yhd.com/front-passport/passport/images/loginlogo.jpg" height="55" alt="1号店" /></a>
              <div class="regist_header_right clearfix">
                <!--<a href="#" class="english_edition" id="edition" style="display:none">English</a>-->
                  <div class="help_wrap">
                      <a class="hd_menu" href="#"><s class="help_ico"></s>帮助中心</a>
                    
                  </div>
                  <span class="fr">您好，欢迎光临1号店！ 
                    <!-- <a href="#" class="blue_link">请登录</a> -->
                    
                    <router-link :to="'reg'" class="blue_link">登录</router-link>
                    </span>
              </div>
        </div>
		  </div>

		<div class="margin">
			
				用户名：<input type="text" id="txt"/><span></span><br><br>
				密码：<input type="password" id="pas"/><span></span><br><br>
				<input type="submit" id="sub" value="登录"/>
				<div id="car"></div>
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