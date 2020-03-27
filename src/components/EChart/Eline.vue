<template>
  <div style="height:100%" ref="echart"></div>
</template>
<script>
//封装思路
//1.观察文档,考虑组件需要的基本参数
//2.参数筛选,分为从父组件传来的参数和自身的参数
//3.完善组件,观察设计图,找不同，在文档中寻找对应的配置项
//4.细节优化,考虑多种场景下,图标的自适应的处理

import echarts from "echarts";

export default {
  //父组件出来的数据
  props: {
    //定义动态传入
    chartData: {
      type: Object,
      //默认值
      default() {
        return {
          //动态传入的参数
          xData: [],
          serites: []
        };
      }
    },
    //判断图表有无坐标轴
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    //判断使用axisOption 还是normalOption
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    }
  },
  //监听
  watch: {
    chartData: {
      handler: function() {
        this.initChart();
      },
      deep: true
    }
  },
  data() {
    return {
      echart: null,
      //有坐标轴
      axisOption: {
        
        grid: {
          left: "10%",
          y: 10,
          x: 5
        },

        //触发时机
        tooltip: {
          trigger: "axis"
        },
        //X轴
        xAxis: {
          //category类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#333333"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 6
          }
        },
        //Y轴
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#333333"
              }
            },
            axisLabel: {
              color: "#fff",
              fontSize: 6
            },
            splitLine: {
              show: false
            }
          }
        ],
        color: [
          "#053546",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089"
        ],
        series: []
      },
      //无坐标轴
      normalOption: {
        tooltip: {
          trigger: "item"
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf"
        ],
        series: []
      }
    };
  },
  methods: {
    //初始化图表
    initChart() {
      this.initChartData();
      //如果容器存在
      if (this.echart) {
        this.echart.setOption(this.options);
        //容器不存在  初始化对象
      } else {
        //取得对应的容器
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    //对传入的数据进行处理
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
       // console.log("axis");
      } else {
        this.normalOption.series = this.chartData.series;
       // console.log("normal");
      }
    },
    //浏览器变化的时候 自适应
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizeChart);
  },
  //销毁
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
