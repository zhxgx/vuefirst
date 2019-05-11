<template>
  <div id="app">
   <router-view></router-view>
   <v-footer></v-footer>
  </div>
</template>

<script>
import footer from './components/footer'

export default {
  name: 'app',
  components: {
    'v-footer':footer
  }
}
</script>

<style>
  /* 全局样式 */
body{background: #ccc}
/* CSS Document */

body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,td{margin:0;padding:0;}/*去除默认空隙*/
body{font:12px "微软雅黑";word-wrap:break-word;/*数字字母自动换行*/}
a,u,s,del{color:#666;text-decoration:none} 
fieldset ,a img,.bor0 {border:0;}
i,em,b{font-style:normal;font-weight:100;}
li{list-style:none;}
img{vertical-align:middle;}/*或者display:block;*/ 
a{text-decoration:none;}/*去除下划线*/
table{border-collapse:collapse;}/*细线边框*/
.ind2{text-indent:2em;}
textarea{resize:none;}/*禁止拖动*/


/*溢出隐藏出现省略号*/
.over{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}

/*图片垂直居中*/
.valign{text-align:center;}
.valign img{vertical-align:middle;}
.valign:after{content:"";display:inline-block;vertical-align:middle;height:100%;}

/*万能清除法*/
.clear{zoom:1;/*ie才能识别 解决ie的高度塌陷问题*/}
.clear:before{content:"";display:table;}
.clear:after{content:"";display:block;clear:both;}

/*鼠标指针变成手型  cursor:hand;*/
.cu{cursor:pointer; }



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
