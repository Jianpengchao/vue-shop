<template>
  <div>
    <div class="shop-car" id='car'>
            <div class="count-custom">
                全部商品
            </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column  prop="name" label="商品" width="180"></el-table-column>
            <el-table-column  prop="price" label="单价（元）" width="180"></el-table-column>
            <el-table-column  prop="num" label="数量" width="180"></el-table-column>
            <el-table-column  prop="countPrice" label="操作" width="180"></el-table-column>
          </el-table>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableData:[{
        img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2144998843,2960701607&fm=199&app=68&f=JPEG?w=750&h=750&s=ECA32FD77C151FCA0521AE6E03001077",
        name:"广东实木床生产厂家 全实木双人床 新款实木床 精品家具",
        des:"新款品牌 A款 实惠 家用",
        price:"536",
        num:"1",
        countPrice:""
      }]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.$ajax.get('/api/list/product').then(res=>{
        console.log(res);
      })
    }
  }
}
</script>