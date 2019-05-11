<template>
  <div class="news">
    <h3>商品详情</h3>
    <ul v-for="item of list" :key="item.goodsId">
      <li>{{item.src}}</li>
      <li>{{data.a}}</li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  // mounted(){
  //   this.goodId = this.$route.params.goodId;
	// 	this.getDetail(this.goodId);
  // }
   data(){
    return {
      list:[]
    }
  },
  mounted(){
    axios({url:"/data/goods.json"}).then(
      res=>{
        for(let a=0;a<res.data.length;a++) {       
            // console.log(a)
          if(res.data[a].goodsId===this.$route.params.id ){
              	res=>this.list = res.data[a]
              
          }
        }
      }
    )
			
		
		
	},
}
</script>

<style>
.news ul li{
  background: #333;
}
</style>

