<template class="hao">
  <div>
    <div style="float:left;width:60%">
      <echart
        :chartData="echartData.video"
        :isAxisChart="false"
        style="height:300px;width:500px;float:left"
      ></echart>

      <eline
        :chartData="echartData.order"
        style="height:300px;width:500px;float:left"
      ></eline>
      <ebar
        :chartData="echartData.bar"
        style="height:300px;width:500px;float:left"
      ></ebar>
      <emap
        :chartData="echartData.map"
        :isAxisChart="false"
        style="height:300px;width:500px;float:left"
      ></emap>
 
   
    </div>
  </div>
</template>
<script>
import Echart from "../../components/EChart/EChart";
import Eline from "../../components/EChart/Eline";
import Ebar from "../../components/EChart/Ebar";
import Emap from "../../components/EChart/Emap";
import demo1Api from "@/api/demo1";

export default {
  components: {
    Echart,
    Eline,
    Ebar,
    Emap,

  },

  data() {
    return {
      itemsList: [],
      echartData: {
        video: {
          series: []
        },
        order: {
          xData: [],
          series: []
        },
        bar: {
          xData: [],
          series: []
        },
        map: {
          series: []
        }
      }
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
   
    tableRowStyle({ row, rowIndex }) {
      return "background-color:pink;font-size:15px;";
    },
    //设置表头行的样式
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      return "background-color:lightblue;font-wight:500;font-size:20px;text-align:center";
    },
    getTableData() {
      //饼图
      demo1Api.getList().then(response => {
        const res = response.data;
        // console.log("测试数据",res)
        this.echartData.video.series.push({
          data: res.data,
          type: "pie",
          radius: ["45%", "48%"]
        });
      });
      //折线图
      
      demo1Api.getListLine().then(response => {
      const res = response.data; 
       let xData=res.data
         for (let i = 0; i <9999; i++) {
    //此处使用let是关键，也可以使用闭包。原理不再赘述
      setTimeout(() => {
           const res = response.data;   
      this.echartData.order.xData.push({
          data: res.data.map(item => item.date), //数组 用map  遍历item.date
          boundaryGap: false
        });
        this.echartData.order.series.push({
          data: res.data,
          type: "line",
          itemStyle: {
            borderColor: "#12C1FF",
            borderWidth: 2
          }
        });
    }, 1000*i)//此处要理解为什么是1000*i
   }
      });




      //柱状图
      demo1Api.getListBar().then(response => {
        const res = response.data;
        //  console.log("柱状图", res);
        this.echartData.bar.xData = res.data.map(item => item.date);
        this.echartData.bar.series.push({
          data: res.data.map(item => item.new),
          type: "bar",
          barMaxWidth: 5
        });
      });
      //地图
      demo1Api.getListMap().then(response => {
        const res = response.data;
        this.echartData.map.series.push({
          data: res.data,
          name: "",
          type: "map",
          mapType: "china",
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          showLegendSymbol: true,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          }
        });
      });
      demo1Api.getItemlist().then(response => {
        const res = response.data;
        //console.log("攻击1", res);
        this.itemsList = res.data;
        //console.log("攻击2",itemsList12)
      });
    }
  },

   watch: {
  //观察option的变化
chartData: {
   handler(newVal, oldVal) {
    if (this.echart) {
     if (newVal) {
      this.echart.setOption(newVal);
     } else {
      this.echart.setOption(oldVal);
     }
    } else {
      this.init();
    }
   },
   deep: true //对象内部属性的监听，关键。
  }
 }
};
</script>
<style scoped>
.el-table-column1 {
  color: red;
}
.el-table .cell {
  color: #000000;
  font-size: 14px;
}
.hao {
  color: #000000 !important;
}
</style>
