<template>
  <div>
    <el-row :gutter="20">
      <div v-for="o in shopList" :key="o.id">
        <el-col :span="6" style="cursor:pointer">
          <el-image :src="o.shopPic"></el-image>
        </el-col>

        <el-col :span="12" style="cursor:pointer">
          <div style="margin-left:20px">
            <a>
              <p style="width:100%;height:25px">
                {{ o.shopName }}
              </p>
            </a>
            <p style="color:gray;font-size:10px">{{ o.shopDes }}</p>
            <p style="color:red;font-size:20px;text-align:left;margin-top:60px">
              <b>￥{{ o.shopPrice }}</b>
            </p>
            <div style="text-align:right">
              <div class="shop_num">
                <span>数量</span>
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                  class="inputNumber"
                ></el-input-number>
              </div>
              <el-button type="primary">立即选购</el-button>
              <el-button type="primary" @click="handleCart"
                >加入购物车</el-button
              >
            </div>
            <div style="margin-top:30px">
              <p>承诺： 7天无理由退款</p>
              <p>支付： 花呗 微信 银行卡</p>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shopList: [],
      num: 1
    }
  },
  created () {
    this.getShopInfo()
  },
  methods: {
    getShopInfo () {
      this.$ajax.get('/api/showInfo/?id=' + this.$route.params.id).then(res => {
        console.log(res)
        this.shopList = res.data.data
      })
    },
    handleChange (value) {
      console.log(value)
    },
    handleCart () {
      this.$router.push({ path: '/index/goods' })
    }
  }
}
</script>
<style >
.shop_num {
  height: 40px;
  margin-bottom: 20px;
 
}
 span {
    height: 40px;
  }
</style>