<template>
  <div class="detail">
    <div class="regist_header clearfix">
			<div class="wrap margin">
		        <a href="http://www.yhd.com" class="logo"><img src="https://passport.yhd.com/front-passport/passport/images/loginlogo.jpg" height="55" alt="1号店" /></a>
		        <div class="regist_header_right clearfix">
		        	<!--<a href="#" class="english_edition" id="edition" style="display:none">English</a>-->
		            <div class="help_wrap">
		                <a class="hd_menu" href="http://cms.yhd.com/cms/view.do?topicId=12"><s class="help_ico"></s>帮助中心</a>
		               
		            </div>
		            <span class="fr">您好，欢迎光临1号店！ <a href="register.html" class="blue_link">请注册</a></span>
		        </div>
		    </div>
		  </div>
		<h2 class="margin">购物车<small>&nbsp;&nbsp;<a href="list.html" target="_blank">继续购物</a></small></h2>
		<table border="1" cellspacing="0" width="1000" align="center">
			<thead>
				<tr>
					<th></th>
					<th width="100">商品图片</th>
					<th>名字</th>
					<th>价格</th>
					<th width="120">数量</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody id="tbody">
				<!--<tr>
					<td><input type="checkbox" name="" id="" value="" /></td>
					<td><img src=""/></td>
					<td>名字</td>
					<td>价格</td>
					<td>1</td>
					<td><em data-index="">删除</em></td>
				</tr>-->
        <tr v-for="(item,index) of list" :key="item.goodsId">
					<td><input type="checkbox" name="" id="" value="" />{{index}}</td>
					<td><img :src="item.src" /></td>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td><router-link :to="{name: 'news', params: {id: item.goodsId}}" >详细信息</router-link></td>
					<td><em data-index="">删除</em></td>
        
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><input type="checkbox" name="" id="" value="" />全部选中</td>
					<td align="right">总价：</td>
					<td>0</td>
					<td>总数量：0</td>
					<td><em>全部删除</em></td>
				</tr>
			</tfoot>
		</table>

  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    axios({url:"/data/goods.json"}).then(
			
			res=>this.list = res.data
			// res=>console.log(res.data.)
			
		)
		
	},
	// openDetails(row){
  //   //查看详情
  //   this.$router.push({path:'details/'+ id})
	// }
}
</script>

<style scoped>
  h2{font-size: 2em;}
  h2 a{color:red;font-size: 1.5em;}
	img{width: 60px;}
	h2{margin: 30px 0;text-indent: 30px;}
	em{display: block;width: 100px;line-height: 30px;text-align: center;background: deepskyblue;border-radius: 6px;margin: 0 auto;margin-top: 10px;font-style: normal;cursor: pointer;color: #fff;}
	input[type="number"]{width:50px}
</style>
