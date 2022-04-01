<template>
<div>
  <div class="app-container" >
  </div>
  <div style="display:flex;margin-left:260px">
    <h2 style="color:gray;height:60px">家具商城欢迎您！</h2>
   <div style="display:flex;margin-left:300px;margin-top:15px">
      <el-form :model="form" >
       <el-form-item label="">
         <el-input v-model="form.name"></el-input>
       </el-form-item>
    </el-form>
    <div>
      <el-button class="filter-item" type="primary" icon="el-icon-search" style="margin-left:20px">查询</el-button>
      </div>
   </div>
  </div>
  <div style="display:flex;text-align:center;margin-left:130px">
    <el-menu
      style="width:15%;height:550px"
       default-active=""
      class="el-menu-vertical-demo"
      background-color="#28a4cc"
      text-color="#fff"
     >
      <el-menu-item index="1" >
        <i class="el-icon-menu"></i>
        <span slot="title">卧室家具</span>
      </el-menu-item>
      <el-menu-item index="2" @click="keTing">
        <i class="el-icon-menu"></i>
        <span slot="title" >客厅家具</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">厨房家具</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">餐厅家具</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">儿童房</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">书房和办公室</span>
      </el-menu-item>
    </el-menu>
 <el-carousel indicator-position="none" style="width:78%" height='550px' :interval="3000">
    <el-carousel-item v-for="item in images" :key="item.id">
      <img :src="item.url" fit="fit" style="width:100%" alt="轮播图"/>
      <!-- <h3>{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
  </div>
  <div style="margin:3%">
    <h3 style="margin-left:45px;color:#ccc">新品上市</h3>
   <el-row :gutter="20">
  <el-col :span="6" style="cursor:pointer">
      <el-image src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2144998843,2960701607&fm=199&app=68&f=JPEG?w=750&h=750&s=ECA32FD77C151FCA0521AE6E03001077" @click="handleImg1"></el-image>
    <div style="margin-top:-7px">
        <p style="color:red;font-size:16px;text-align:center"><b>￥536.00/件</b></p>
     <a> <p style="width:100%;height:25px">广东实木床生产厂家 全实木双人床 新款实木床 精品家具</p> </a>
     <p>新款品牌</p>
    </div>
    </el-col>
  <el-col :span="6" style="cursor:pointer">
    <el-image src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1840111950,3281191642&fm=199&app=68&f=JPEG?w=750&h=750&s=5178A9776E737386C83549600300A032" @click="handleImg1"></el-image>
    <div style="margin-top:-7px">
        <p style="color:red;font-size:16px;text-align:center"><b>￥999.00/件</b></p>
     <a> <p style="width:100%;height:25px">单人沙发出售 聪匠 贵宾休闲区 酒店家具定制安装</p> </a>
     <p>新款品牌</p>
    </div>
  </el-col>
  <el-col :span="6"><el-image src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1153108023,3075194303&fm=199&app=68&f=JPEG?w=450&h=450&s=FB938309644776EE3E84CDD7010080B1" @click="handleImg1"></el-image>
    <div style="margin-top:-7px">
        <p style="color:red;font-size:16px;text-align:center"><b>￥1199.00/件</b></p>
     <a> <p style="width:100%;height:25px">屏风隔断办公桌定制安装 聪匠 钢木办公桌椅 办公家具厂</p> </a>
     <p>新款品牌</p>
    </div></el-col>
  <el-col :span="6"><el-image src="https://www.ikea.cn/cn/zh/images/products/ravaror-luo-wa-lu-du-li-chu-ju-hei-se__0864974_pe781316_s5.jpg?f=xs" @click="handleImg1"></el-image>
    <div style="margin-top:-7px">
        <p style="color:red;font-size:16px;text-align:center"><b>￥536.00/件</b></p>
     <a> <p style="width:100%;height:25px">SUNNERSTA 苏纳特独立橱柜 </p> </a>
     <p>新款品牌</p>
    </div></el-col>
</el-row>
  </div>

  
</div>  
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        form:{name:""},
        images:[
          {id:1, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0171b35b43208da80121b994024c8c.JPG%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649830317&t=be927a077dd65622e34cc1779632c5f0'},
          {id:2, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F16296%2F%2FQxAZWWmeeFxlMXGYBYP8OV0nUGpx2fqEdgRBZ5X2.jpeg&refer=http%3A%2F%2Fimg.91huoke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649830317&t=43855079cf7e2bf7535d1014a1c68a5a'},
          {id:3, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ae0b5d4d3f9da8012187f4464f2b.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649830555&t=5ab4db0ed3d0e49c94c818f25b18ebd4'},
       ]
      };
    },
    methods: {
      // handleClick(tab, event) {
      // const key = tab._props.label;
      //     console.log(key)
      //   if(key == '分类'){
      //    this.$router.push({ path: '/fenlei' })
      //   }
      //   else if(key == '折扣商品'){
      //    this.$router.push({ path: '/goods' })

      //   }
      //    else if(key == '个人中心'){
      //    this.$router.push({ path: '/user' })

      //   }
      // },
      handleImg1(){
         this.$router.push({ path: '/index/userInfo' })
      },
      keTing(){
         this.$router.push({ path: '/index/fenlei/page2' })
      }
    }
  };
</script>
<style scoped>
.app-container{
  text-align: center;
  width:50%;
	margin:0 auto
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.5;
    line-height: 550px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  a:hover { text-decoration: underline}
</style>