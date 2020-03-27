<template>
  <div class="head_top">
    <div class="head_time">
      <p>{{ realTime }}</p>
      <p>{{ realTimeW }}</p>
    </div>
   <el-dropdown @command="handleCommand" style="right:250px ;margin-top:10px;position: absolute;">
      <span class="el-dropdown-link" style="color:#12c1fb">
        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-s-fold" command="b"
          >退出系统</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <div class="head_Title">
      <p>网络安全态势感知系统</p>
    </div>
    
    <div class="head_search">
      <div>
        <input type="text" class="el-icon-delete" />
        <el-button icon="el-icon-search" circle></el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$bjColor: #07779f;
$fffColor: #ffffff;
$blackColor: #000000;
.head_Title {
  p {
    text-align: center;
    padding-top: 10px;
    color: #12c1fb;
    font-size: 2rem;
    letter-spacing: 0.5rem;
  }
}
.head_time {
  position: absolute;
  text-align: center;
  padding: 15px 0 0 20px;
  p {
    color: $bjColor;
  }
}
.head_search {
  position: absolute;
  right: 3%;
  bottom: 55%;
  div {
    position: relative;
   
    input {
      width: 115px;
      border: 1px solid #07779f;
      border-radius: 5px;
      height: 15px;
      background-color: $blackColor;
      color: $fffColor;
      padding-left: 35px;
    }
    .el-button {
      position: absolute;
      left: 0;
      width: 10px;
      border: none;
      background: transparent;
      height: 15px;
      bottom: 5px;
      color: $bjColor;
    }
  }
}
</style>
<script>
import {logout} from '../../api/login'

export default {
  data() {
    return {
      realTime: "", //当前实时时间
      realTimeW: "",
      search: ""
    };
  },
  mounted() {
    // 页面加载完后显示当前时间
    this.realTime = this.dealWithTime(new Date());
    // 页面加载完后显示日期
    this.realTimeW = this.dealWithTimeW(new Date());
    // 定时刷新时间
    let _this = this;
    // 定时器
    this.timer = setInterval(function() {
      _this.realTime = _this.dealWithTime(new Date()); // 修改数据date
    }, 1000);
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          this.$message(`修改密码开发中`);
          break;

        case "b":
          //退出系统
          logout(localStorage.getItem('vis-user')).then(response =>{
            const resp=response.data
            if(resp.flag){
              //退出成功
              //清楚本地数据
              localStorage.removeItem('vis-token')
              localStorage.removeItem('vis-user')
              //回到登陆页面
              this.$router.push('/login')
            }else{
              //退出失败
              this.$message({
                message: resp.message,
                type: "warning",
                duration:500
              });
            }
          })
          break;
         default:
           break; 
      }
    },
    dealWithTime(data) {
      let formatDateTime;
      let Y = data.getFullYear();
      let M = data.getMonth() + 1;
      let D = data.getDate();
      let H = data.getHours();
      let Min = data.getMinutes();
      let S = data.getSeconds();
      H = H < 10 ? "0" + H : H;
      Min = Min < 10 ? "0" + Min : Min;
      S = S < 10 ? "0" + S : S;
      formatDateTime = Y + "-" + M + "-" + D + " " + H + ":" + Min + ":" + S;
      return formatDateTime;
    },
    dealWithTimeW(data) {
      let formatDateTimeW;

      let W = data.getDay();
      switch (W) {
        case 0:
          W = "Sunday";
          break;
        case 1:
          W = "Monday";
          break;
        case 2:
          W = "Tuesday";
          break;
        case 3:
          W = "Wednesday";
          break;
        case 4:
          W = "Thursday";
          break;
        case 5:
          W = "Friday";
          break;
        case 6:
          W = "Saturday";
          break;
        default:
          break;
      }
      //formatDateTime = Y + "-" + M + "-" + D + " " + H + ":" + Min + ":" + S;
      formatDateTimeW = W;
      return formatDateTimeW;
    }
  },
  // 注意在vue实例销毁前，清除我们的定时器。
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>
