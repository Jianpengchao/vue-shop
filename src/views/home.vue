<template>
    <div>
      <h2>基于元数据电子档案管理系统</h2>
        <div class="nameClass">
            <div ref="one" class="userClass1" @click="clickIndex"><a >首页</a></div>
            <div ref="two" class="userClass" @click="clickIndex1"><a >档案查询</a></div>
            <div ref="three" class="userClass" @click="clickIndex2"><a >档案采集</a></div>
           <div ref="four" class="userClass"><span>影像管理</span></div>
            <div ref="five" class="userClass"><span>档案管理</span></div>
            <div ref="six" class="userClass"><span>接口管理</span></div>
            <div ref="seven" class="userClass"><span>库房管理</span></div>
            <div ref="eight" class="userClass"><span>系统管理</span></div>
            <div style="width:40%;"></div>
            <div style="width:150px;color:#fff">[ 欢迎您！管理员 ]</div>
            <div style="width:120px;color:#fff">[ 修改密码 ]</div>
            <div style="width:80px;color:#fff">[ 帮助 ]</div>
        </div>
      <div class="tabClass">
        <el-tabs v-model="activeName" v-if="showUser" style="border:none">
            <el-tab-pane label="目录检索" name="first" style="margin-top:20px">
            </el-tab-pane>
        </el-tabs>
        <el-tabs v-model="activeName" v-if="showUserTwo" @tab-click="handleClick" style="border:none">
             <el-tab-pane label="个人查询" name="first"  style="margin-top:20px">
                <!-- <div style="display: flex">
               <el-button class="filter-item" type="primary" @click="showInfo"
                 >增加</el-button
               >
               <el-button class="filter-item" type="primary" @click="applyPrint"
                 >修改</el-button
               >
               <el-button class="filter-item" type="primary" @click="applyPrint"
                 >删除</el-button
               >
             </div> -->
             </el-tab-pane>
            <el-tab-pane label="单位查询" name="second"  style="margin-top:20px">
               <div style="display: flex">
              <el-button class="filter-item" type="primary" @click="showInfo"
                >增加</el-button
              >
              <el-button class="filter-item" type="primary" @click="applyPrint"
                >修改</el-button
              >
              <el-button class="filter-item" type="primary" @click="applyPrint"
                >删除</el-button
              >
              <el-button class="filter-item" type="primary" @click="applyPrint"
                >查看</el-button
              >
            </div>
            </el-tab-pane>
            <el-tab-pane label="业务查询" name="third"  style="margin-top:20px">
               <div style="display: flex">
              <el-button class="filter-item" type="primary" @click="showInfo"
                >查看</el-button
              >
              <el-button class="filter-item" type="primary" @click="deleteCollection"
                >移除</el-button
              >
            </div>
             <div>
               <el-table
                  :data="functionlog"
                  v-loading="listLoading"
                  style="width: 88%;margin-top:15px"
                  @row-click="rowClick"
                  border
                  ref="serveTable"
                >
                  <el-table-column type="selection" width="45"> </el-table-column>
                  <el-table-column type="index" align="center" label=" 序号" width="50">
                  </el-table-column>

                  <el-table-column align="center" label="用户名" width="120">
                    <template slot-scope="{ row }">
                      <a >{{ row.userName }}</a>
                    </template>
                  </el-table-column>
                    <el-table-column align="center" label="真实名" width="120">
                    <template slot-scope="{ row }">
                      <a >{{ row.realName }}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 全宗名称" width="200">
                    <template slot-scope="{ row }">
                      {{ row.fullclanName }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" iP地址" width="150">
                    <template slot-scope="{ row }">
                      {{ row.iPAddress }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 操作时间" width="180">
                    <template slot-scope="{ row }">
                      {{ row.operationTime }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 操作描述" width="180">
                    <template slot-scope="{ row }">
                      {{ row.pedagogicaloperation }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 功能名" width="130" >
                    <template slot-scope="{ row }">
                      {{ row.functionName }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 操作性质" width="130">
                    <template slot-scope="{ row }">
                      {{ row.operationalnature }}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label=" 单位id" >
                    <template slot-scope="{ row }">
                      {{ row.unitID }}
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  :current-page="roleQuery1.current"
                  :page-sizes="[10, 20, 50, 100, 1000]"
                  :page-size="roleQuery1.size"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total3"
                />
                </div>
            </el-tab-pane>

        </el-tabs>

        <el-tabs v-model="activeName" v-if="showUserThree" style="border:none">
            <el-tab-pane label="历史采集" name="first" style="margin-top:20px">
            </el-tab-pane>
            <el-tab-pane label="事后采集" name="second" style="margin-top:20px">
            </el-tab-pane>
            <el-tab-pane label="实时采集" name="third" style="margin-top:20px">
            </el-tab-pane>
        </el-tabs>
    </div>


    </div>
</template>
<script>
export default {
    data(){
        return{
            referCollectionTable:[],//查阅收藏表
            multipleSelectioneferCollection:[],//查阅收藏表  已选数据
            listLoadingReferCollection:false,//查阅收藏表  加载效果
            listLoading:false,
            printArr:[],
            classifyCodePrint:'',//打印的分类代码
            printdialog:false,//打印弹窗
            businessIdComponent:'',//组件查看的数据id
            dialogVisibleComponent:false,//组件显示
            currentComponent:'',//当前组件
            itemManagementImportTableData:[],//目录检索表  数据
            multipleSelectionItem:[],//目录检索表  已选数据
            itemManagementImportLoading:false,//目录检索表  加载效果
            itemManagementImportQueryTotal:0,//目录检索表  查询总数
            querySearchValue: {},//目录检索表  查询内容
            listLoadingMyAuthorization:false,
            multipleSelectionMyAuthorization:[],
            myAuthorizationTable:[],//我的授权表格数据
            searchListMyAuthorization:[],//检索下拉数据
            showUserTwo:false,
            showUserThree:false,
            showUser:true,
            activeName: 'first',
            src: '',
            myAuthorizationQuery: {
                size: 10,
                current: 1,
                optimizeCountSql: true,
                optimizeJoinOfCountSql: true,
                searchCount: true,
            },
            itemManagementImportQuery: {
                size: 10,
                current: 1,
                optimizeCountSql: true,
                optimizeJoinOfCountSql: true,
                searchCount: true,
            },
            referCollectionQuery: {
                size: 10,
                current: 1,
                optimizeCountSql: true,
                optimizeJoinOfCountSql: true,
                searchCount: true,
            },
            referCollectionTotal:0,
            myAuthorizatioTotal:0,
                    total3:7,
roleQuery1: {
        size: 10,
        current: 1,
        optimizeCountSql: true,
        optimizeJoinOfCountSql: true,
        searchCount: true,
      },
             functionlog:[
                    {
                       userName:"weiye",
                       realName:"韦页",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.32",
                       operationTime:"2022-01-11  09:50:43",
                       pedagogicaloperation:"进入档案管理_归档文书主界面",
                       functionName:"档案管理_归档文书",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"huanglin",
                       realName:"黄磷",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.80",
                       operationTime:"2022-01-13  14:45:23",
                       pedagogicaloperation:"进入系统维护_档案分类模板主界面",
                       functionName:"系统维护_档案分类模板",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"luodan",
                       realName:"罗丹",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.25",
                       operationTime:"2022-01-14  16:25:41",
                       pedagogicaloperation:"进入系统维护_日志管理主界面",
                       functionName:"系统维护_日志管理",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"liuyidao",
                       realName:"刘一道",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.58",
                       operationTime:"2022-01-17  09:45:12",
                       pedagogicaloperation:"操作[系统维护_用户管理_机构转移]功能",
                       functionName:"系统维护_用户管理_机构转移",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"jiandan",
                       realName:"简单",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.35",
                       operationTime:"2022-01-19  15:24:45",
                       pedagogicaloperation:"进入归档收集_录像文件主界面",
                       functionName:"归档收集_录像文件",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"hedada",
                       realName:"何大达",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.72",
                       operationTime:"2022-01-19  17:45:20",
                       pedagogicaloperation:"进入归档收集_录音文件主界面",
                       functionName:"归档收集_录音文件",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    },
                    {
                       userName:"gaodahai",
                       realName:"高大海",
                       fullclanName:"广西壮族自治区海洋局",
                       iPAddress:"192.168.0.61",
                       operationTime:"2022-01-20  11:34:30",
                       pedagogicaloperation:"操作[档案管理_全宗卷管理_著录]功能",
                       functionName:"档案管理_全宗卷管理_著录",
                       operationalnature:"正常",
                       unitID:"C0C2F7B38F957AC65BF65C8D9E7E7315",
                    }
                  ],
            }
    },
    methods: {
        // 查阅收藏 - 获取数据
        handleQueryByPageReferCollection(value,searchValue){
            console.log("kkkk");
            let queryCondition = {}
            queryCondition[value] = searchValue
            this.listLoadingReferCollection = true;
            this.referCollectionQuery["queryCondition"] = JSON.stringify(queryCondition);
            api.queryReferCollection(this.referCollectionQuery)
                .then((response) => {
                this.referCollectionTable = response.records;
                this.referCollectionTotal = response.total;
                this.listLoadingReferCollection = false;
                });
        },
        // 查阅收藏 - 移除
        deleteCollection(){

        },
        //打印目录
        printDirectory(){
            if (this.multipleSelectionItem.length == 0) {
            this.$message.error("请选择一条数据！");
            return;
            }
            this.printdialog = true
            this.classifyCodePrint = 'GDWS'
            this.printArr = this.multipleSelectionItem//主表的已选数据
        },
        // 查看检索数据
        showItem(){
            if(this.multipleSelectionItem.length == 0){
            this.$message.error("请选择一条数据");
            return;
            }
            let code = this.multipleSelectionItem[0].classifyCode
            api.queryMenuName(code).then(res=>{
            this.businessIdComponent = this.multipleSelectionItem[0].id
            this.currentComponent = res + 'dialog'
            this.dialogVisibleComponent = true
            }).catch((err)=>{
            this.dialogVisibleComponent = false
            this.$message.error("该数据存在问题，不能查看")
            })
        },
        //添加收藏
        addCollection(){
            console.log(this.multipleSelectionItem[0]);
            let obj = {}
            obj['mainDataId'] = this.multipleSelectionItem[0].id
            obj['userId'] = ''
            api.saveCollection(obj).then(res=>{
                console.log(res);
            })
        },
        // 检索
        handleQueryByPageitem() {
            this.itemManagementImportLoading = true;
            this.itemManagementImportQuery["queryCondition"] = JSON.stringify(
                this.querySearchValue
            );
            api.itemManagementImportQueryByPage(this.itemManagementImportQuery)
                .then((response) => {
                this.itemManagementImportTableData = response.records;
                this.itemManagementImportQueryTotal = response.total;
                this.itemManagementImportLoading = false;
                });
        },
        //目录检索表数据选中
        handleSelectionChangeItem(val){
            if (val.length > 1) {
            this.$refs.serveTableItem.clearSelection();
            this.$refs.serveTableItem.toggleRowSelection(val.pop());
            } else {
            this.multipleSelectionItem = val;
            }
        },
        //目录检索表数据选中
        rowClickItem(row){
            let refsElTable = this.$refs.serveTableItem; // 获取表格对象
            let findRow = this.multipleSelectionItem.find(
                (c) => c.rowIndex == row.rowIndex
            ); //找到选中的行
            if (findRow) {
                refsElTable.toggleRowSelection(row, false);
                return;
            }
            refsElTable.toggleRowSelection(row, true);
        },
        //目录检索表数据选中
        rowStyleItem({ row, rowIndex }){
             Object.defineProperty(row, "rowIndex", {
                    //给每一行添加不可枚举属性rowIndex来标识当前行
                    value: rowIndex,
                    writable: true,
                    enumerable: false,
                });
        },
        //目录检索表数据选中
        rowClassNameItem({ row, rowIndex }){
            let rowName = "",
            findRow = this.multipleSelectionItem.find(
                (c) => c.rowIndex === row.rowIndex
            );
            if (findRow) {
                rowName = "current-row ";
            }
            return rowName; //也可以再加上其他类名 如果有需求的话
        },
        //我的授权表格数据选中
        rowClickMyAuthorization(row){
            let refsElTable = this.$refs.serveTableMyAuthorization; // 获取表格对象
            let findRow = this.multipleSelectionMyAuthorization.find(
                (c) => c.rowIndex == row.rowIndex
            ); //找到选中的行
            if (findRow) {
                refsElTable.toggleRowSelection(row, false);
                return;
            }
            refsElTable.toggleRowSelection(row, true);
        },
        //我的授权表格数据选中
        rowStyleMyAuthorization({ row, rowIndex }){
             Object.defineProperty(row, "rowIndex", {
                    //给每一行添加不可枚举属性rowIndex来标识当前行
                    value: rowIndex,
                    writable: true,
                    enumerable: false,
                });
        },
        //我的授权表格数据选中
        rowClassNameMyAuthorization({ row, rowIndex }){
            let rowName = "",
            findRow = this.multipleSelectionMyAuthorization.find(
                (c) => c.rowIndex === row.rowIndex
            );
            if (findRow) {
                rowName = "current-row ";
            }
            return rowName; //也可以再加上其他类名 如果有需求的话
        },
        //我的授权表格数据选中  选择框
        checkboxSelectMyAuthorization(e,row){

        },
        //我的授权表格数据选中
        handleSelectionChangeMyAuthorization(val){
            if (val.length > 1) {
            this.$refs.serveTableMyAuthorization.clearSelection();
            this.$refs.serveTableMyAuthorization.toggleRowSelection(val.pop());
            } else {
            this.multipleSelectionMyAuthorization = val;
            }
        },
        //申请打印我的授权档案
        applyPrint(){},
        //查看我的授权档案
        showInfo(){},
        clickIndex2(){
            this.showUserTwo = false
            this.showUser = false
            this.showUserThree = true
            this.$refs.one.style.background = '#018fbf'
            this.$refs.two.style.background = '#018fbf'
            this.$refs.three.style.background = 'gainsboro'
            this.activeName = 'first'
        },
        clickIndex1(){
            this.showUserTwo = true
            this.showUser = false
            this.showUserThree = false
            // this.$refs.two.style.background = '#f7f7f7'
            // this.$refs.two.style.color = '#ff9980'
            this.$refs.one.style.background = '#018fbf'
            this.$refs.two.style.background = 'gainsboro'
            this.$refs.three.style.background = '#018fbf'
            // this.$refs.one.style.color = '#fff'
            // this.activeName = 'first'
        },
        clickIndex(){
            this.showUserTwo = false
            this.showUserThree = false
            this.showUser = true
            this.$refs.two.style.background = '#018fbf'
            this.$refs.three.style.background = '#018fbf'
            // this.$refs.one.style.color = '#ff9980'
            this.$refs.one.style.background = 'gainsboro'
            // this.$refs.one.style.color = '#fff'
        },
        handleClick(tab, event) {
            console.log(this.activeName);
            if(this.activeName == 'first'){
              // this.$router.push({ path: "page1" });
            }
        },
        handleSizeChangeMyAuthorizatio: function (size) {},
        handleCurrentChangeMyAuthorizatio: function (currentPage) {},
        //   目录检索表分页
        handleSizeChangeItem: function (size) {
            this.itemManagementImportLoading = true;
            this.itemManagementImportQuery.size = size
            this.handleQueryByPageitem()
        },
        handleCurrentChangeItem: function (currentPage) {
            this.itemManagementImportLoading = true;
            this.itemManagementImportQuery.currentPage = currentPage
            this.handleQueryByPageitem()
        },
         //   查阅收藏表分页
        handleSizeChangeReferCollection: function (size) {
            this.listLoadingReferCollection = true;
            this.referCollectionQuery.size = size
            this.handleQueryByPageReferCollection()
        },
        handleCurrentChangeReferCollection: function (currentPage) {
            this.listLoadingReferCollection = true;
            this.referCollectionQuery.currentPage = currentPage
            this.handleQueryByPageReferCollection()
        },
        // 我的授权 - 获取数据
        handleQueryByPageMyAuthorizatio(){},
         rowClick(row) {
              if(!row.disabled) {
                this.$refs.serveTable.toggleRowSelection(row)
                return
              }
            },
         //查阅收藏表数据选中
        rowClickReferCollection(row){
            let refsElTable = this.$refs.serveTablereferCollection; // 获取表格对象
            let findRow = this.multipleSelectioneferCollection.find(
                (c) => c.rowIndex == row.rowIndex
            ); //找到选中的行
            if (findRow) {
                refsElTable.toggleRowSelection(row, false);
                return;
            }
            refsElTable.toggleRowSelection(row, true);
        },
        //查阅收藏表数据选中
        rowStyleReferCollection({ row, rowIndex }){
             Object.defineProperty(row, "rowIndex", {
                    //给每一行添加不可枚举属性rowIndex来标识当前行
                    value: rowIndex,
                    writable: true,
                    enumerable: false,
                });
        },
        //查阅收藏表数据选中
        rowClassNameReferCollection({ row, rowIndex }){
            let rowName = "",
            findRow = this.multipleSelectioneferCollection.find(
                (c) => c.rowIndex === row.rowIndex
            );
            if (findRow) {
                rowName = "current-row ";
            }
            return rowName; //也可以再加上其他类名 如果有需求的话
        },
        handleSelectionChangereferCollection(val){
            if (val.length > 1) {
            this.$refs.serveTablereferCollection.clearSelection();
            this.$refs.serveTablereferCollection.toggleRowSelection(val.pop());
            } else {
            this.multipleSelectioneferCollection = val;
            }
        },
    }
}
</script>
<style scoped>
.tabClass{
    width: 98%;
    margin: 0 auto;
}
.nameClass{
    width: 100%;
    height: 36px;
    background:#018fbf;
    display: flex;
    justify-content: space-between;
    line-height: 36px;
    padding-left: 10px;
    text-align: center;
}
.userClass{
    height: 100%;
    width: 80px;
    color: #fff;
}
.userClass1{
    height: 100%;
    width: 80px;
    color: #fff;
    background:gainsboro;
}
.userClass:hover{
    background:gainsboro;
}
</style>
