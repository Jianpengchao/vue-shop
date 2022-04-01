<template>
<div>
    <h3 style="text-align:center">客厅家具</h3>
        <div style="margin:2%">
         <el-row type="flex" class="row-bg" justify="space-around" style="cursor:pointer">
            <el-col :span="4"><div class="grid-content bg-purple">
            <img src="https://www.ikea.com/global/assets/navigation/images/sofas-fu003.jpeg?imwidth=300" alt=""/>
            <span>沙发</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
            <img src="https://www.ikea.com/global/assets/navigation/images/sofa-beds-10663.jpeg?imwidth=300" alt=""/>
            <span>沙发床</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <img src="https://www.ikea.com/global/assets/navigation/images/bookcases-shelving-units-st002.jpeg?imwidth=300" />
                <span>置物架</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
                <img src="https://www.ikea.com/global/assets/navigation/images/lamps-li002.jpeg?imwidth=300" />
                <span>灯具</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
            <img src="https://www.ikea.com/global/assets/navigation/images/rugs-10653.jpeg?imwidth=300" />
                <span>地毯</span>
            </div></el-col>
            
        </el-row>
        </div>
    </div>    
</template>
<script>
export default {
  data() {
    return {
      msg: "我是page2组件",
    }
    
  },
  methods:{
      // prev(){
      //      this.$router.go(-1)
      //  },
  }
};
</script>