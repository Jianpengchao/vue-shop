<template>
  <div>
      <div class="app-container" >
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <el-tab-pane label="分类" name="second"></el-tab-pane>
            <el-tab-pane label="购物车" name="third"></el-tab-pane>
            <el-tab-pane label="个人中心" name="fourth"></el-tab-pane>
            <el-tab-pane label="后台管理" name="Fifth">后台管理</el-tab-pane>
        </el-tabs>
        </div>
        <router-view/>
  </div>
</template>

<script>
export default {
    name: 'layout',
    data() {
        return {
            activeName: 'first',
        }
    },
    created() {
      switch(this.$route.path) {
        case '/index/page1':
          this.activeName = 'first'
          break;
        case '/index/fenlei':
          this.activeName = 'second'
          break;
        case '/index/goods': 
          this.activeName = 'third'
          break;
        case '/index/user':
          this.activeName = 'fourth'
          break;
      }

    },
    methods: {
        handleClick(tab, event) {
        const key = tab.label;
          switch(key) {
              case '首页':
                this.$router.push({ path: '/index/page1' })
                break;
              case '分类':
                this.$router.push({ path: '/index/fenlei' })
                break;
              case '购物车':
                this.$router.push({ path: '/index/goods' })
                break;
              case '个人中心':
                this.$router.push({ path: '/index/user' })
                break;
          }
      },
    }
}
</script>

<style scoped>
.app-container{
  text-align: center;
  width:50%;
	margin:0 auto
}
</style>>
