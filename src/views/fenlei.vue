<template>
  <div style="margin-top:30px">
    <el-row>
      <el-col :span="4">
        <div>
          <el-menu
            style="width:100%;height:550px"
            default-active="0"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="0">
              <i class="el-icon-menu"></i>
              <span slot="title">全部</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">卧室家具</span>
            </el-menu-item>
            <el-menu-item index="2" @click="keTing">
              <i class="el-icon-menu"></i>
              <span slot="title">客厅家具</span>
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
              <span slot="title">办公家具</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div style="margin:3%">
          <el-row :gutter="20">
            <div
              v-for="item in shopData"
              :key="item.id"
              @click="handleshow(item)"
            >
              <el-col :span="6" style="cursor:pointer">
                <el-image :src="item.shopPic"></el-image>
                <div style="text-align:center">
                  <p style="color:red;font-size:16px;text-align:center">
                    <b>￥{{ item.shopPrice }}.00 </b>
                  </p>
                  <a>
                    <p style="width:100%;height:25px">
                      {{ item.shopName }}
                    </p>
                  </a>
                  <p>{{ item.shopDes }}</p>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      shopData: []
    }
  },
  created () {
    this.getShop()
  },
  methods: {
    getShop () {
      this.$ajax.get('/api/queryByPage').then(res => {
        console.log(res)
        this.shopData = res.data.data
      })
    },
    handleshow (item) {
      console.log(item)
      this.$router.push({ path: `/index/shopInfo/${item.id}` })
    },
    keTing () {
      this.$router.push({ path: '/index/fenlei/page2' })
    }
  }
}
</script>