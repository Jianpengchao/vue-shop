<template>
    <div>
     <el-row :gutter="20">
        <el-col :span="4">
        <div>
            <el-menu
        style="width:100%;height:550px"
        default-active="0"
        class="el-menu-vertical-demo"
        >
        <el-menu-item index="0" >
            <i class="el-icon-menu"></i>
            <span slot="title">个人中心</span>
        </el-menu-item>
        <el-menu-item index="1" @click="handleInfo">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="2" >
            <i class="el-icon-menu"></i>
            <span slot="title" >订单</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">退出登录</span>
        </el-menu-item>
        </el-menu>
        </div>
        </el-col>
        <el-col :span="20" >
          <div>
    <el-descriptions class="margin-top" title="我的资料" :column="1" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">编辑</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
     <span > kooriookami</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">家</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
    广西壮族自治区南宁市青秀区清秀大道 1188 号
    </el-descriptions-item>
  </el-descriptions>
          </div>
           <el-table
      :data="fileHookList"
      v-loading="listLoading"
      style="width: 100%; margin-top: 10px"
      border
     
    >
      <el-table-column type="selection" width="45" align="center">
      </el-table-column>
      <el-table-column type="index" align="center" label=" 序号" width="50">
      </el-table-column>
      <el-table-column align="center" label="id" width="120">
        <template slot-scope="{ row }">
          {{ row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名" width="120">
        <template slot-scope="{ row }">
          {{ row. username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="密码" width="120">
        <template slot-scope="{ row }">
          {{ row.password }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="加密" width="120">
        <template slot-scope="{ row }">
          {{ row.md5 }}
        </template>
      </el-table-column>
   
      
    </el-table>
        </el-col>
     </el-row>
    </div>
</template>
<script>
export default {
  data(){
   return{
     size:"",
     fileHookList:[],
     listLoading:false,
   }
  },
    mounted(){
    this.getUser()
  },
    methods:{
         
        getUser(){
      this.$ajax.get('/api/list').then(res=>{
        console.log(res);
      })
    },
    handleInfo(){
      this.$ajax.get('/api/list').then(res=>{
        console.log(res.data.list);
        this.fileHookList = res.data.list
      })
    }
    }
}
</script>