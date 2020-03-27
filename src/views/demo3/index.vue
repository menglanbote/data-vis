<template>
    <el-table
    :data="tableData"
    style="width: 50%;margin-left:20%;margin-top:10%">
    <el-table-column type="expand">
      <template slot-scope="props">
            <h2>数据库系统显示具体内容为</h2>
        <el-form label-position="left" inline class="demo-table-expand">
          
          <el-form-item label="数据库CPU使用率">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="数据库内存使用率">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="数据库磁盘信息">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="数据库连接使用情况">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="数据库状态">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="数据库运行时长">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="数据库操作记录">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="数据库用户信息变更">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="数据库用户登录失败">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="数据库计划任务执行失败">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
  
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="应用系统服务器"
      prop="id">
    </el-table-column>
   
  </el-table>
</template>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 180px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    padding: 5px;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '重庆5G管理机房',
          name: '50%',
          category: '50',
          desc: '50',
          address: '50',
          shop: '50',
          shopId: '50'
        }, {
          id: '重庆4G管理机房',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '重庆3G管理机房',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '重庆2G管理机房',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>