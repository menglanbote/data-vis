<template>
  <div class="main_content">
    <!-- 左边 -->
    <div class="main_left">
      <!-- 今日拦截威胁数量 -->
      <div class="main_left_today">
        <div class="main_left_todayL">
          <div class="main_title" style="width:192px;">
            <img
              class="main_title_Leftupper"
              src="../../assets/images/Leftupper_icon.png"
              alt=""
            />
            <p>今日拦截威胁数量</p>
            <img
              class="main_title_lowerright"
              src="../../assets/images/lowerright_icon.png"
              alt=""
            />
          </div>
          <div style="padding-left:7px">
            <p class="main_left_todayL_p1">Today</p>
            <p class="main_left_todayL_p2">122,13</p>
            <p class="main_left_todayL_p3">总拦截数量</p>
            <p class="main_left_todayL_p1">Total</p>
            <p class="main_left_todayL_p2">524</p>
          </div>
        </div>
        <div class="main_left_todayM">
          <div class="main_title" style="width:150px;">
            <img
              class="main_title_Leftupper"
              src="../../assets/images/Leftupper_icon.png"
              alt=""
            />
            <p>今日攻击占比</p>
            <img
              class="main_title_lowerright"
              src="../../assets/images/lowerright_icon.png"
              alt=""
            />
          </div>

          <echart
            :chartData="echartData.video"
            :isAxisChart="false"
            style="width:200px;height:200px;padding:20px 0 0 0"
          ></echart>
        </div>
        <div class="main_left_todayR">
          <echart
            :chartData="echartData.video"
            :isAxisChart="false"
            style="width:200px;height:200px;padding:45px 0 0 0"
          ></echart>
        </div>
      </div>
      <!--最新30条攻击信息播报 -->
      <div class="main_left_new">
        <div class="main_title" style="width:235px;">
          <img
            class="main_title_Leftupper"
            src="../../assets/images/Leftupper_icon.png"
            alt=""
          />
          <p>最新30条攻击信息播报</p>
          <img
            class="main_title_lowerright"
            src="../../assets/images/lowerright_icon.png"
            alt=""
          />
        </div>
        <div style="width:100%;height:70%">
          <ul class="main_left_new_title">
            <li class="li1"><span>攻击来源</span></li>
            <li class="li2"><span>攻击目标</span></li>
            <li class="li3"><span>攻击类型</span></li>
            <li class="li4"><span>攻击时间</span></li>
          </ul>
          <ul id="box">
            <li
              id="con1"
              ref="con1"
              :class="{ anim: animate == true }"
              @mouseenter="mEnter"
              @mouseleave="mLeave"
            >
            <ul
                class="main_left_new_list"
                v-for="(item, index) in items"
                :key="index"
              >
                <li class="li1">
                  <span>{{ item.ip }}</span>
                </li>
                <li class="li2">
                  <span>{{ item.name }}</span>
                </li>
                <li class="li3">
                  <span>{{ item.type }}</span>
                </li>
                <li class="li4">
                  <span>{{ item.item }}</span>
                </li>
              </ul> 
          
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <!-- 攻击趋势 -->
      <div class="main_left_attack">
        <div class="main_title" style="width:108px;">
          <img
            class="main_title_Leftupper"
            src="../../assets/images/Leftupper_icon.png"
            alt=""
          />
          <p>攻击趋势</p>
          <img
            class="main_title_lowerright"
            src="../../assets/images/lowerright_icon.png"
            alt=""
          />
        </div>
        <ebar
          :chartData="echartData.bar"
          style="width:40%;height:90%;padding-left:4%"
        ></ebar>
      </div>
    </div>
    <!-- 中间 -->
    <div class="main_middle">
      <emap
        :chartData="echartData.map"
        :isAxisChart="false"
        style="height:500px;width:700px;"
      ></emap>
    </div>
    <!-- 右边 -->
    <div class="main_right">
      <!-- 今日拦截威胁数量 -->
      <div class="main_right_today">
        <div class="main_right_todayL">
          <div class="main_title" style="width:192px;">
            <img
              class="main_title_Leftupper"
              src="../../assets/images/Leftupper_icon.png"
              alt=""
            />
            <p>今日拦截威胁数量</p>
            <img
              class="main_title_lowerright"
              src="../../assets/images/lowerright_icon.png"
              alt=""
            />
          </div>
          <div style="padding-left:7px">
            <p class="main_right_todayL_p1">Threat quantity</p>
            <p class="main_right_todayL_p2">122,13</p>
          </div>
          <div>
            <eline :chartData="echartData.order" style="height:180px"></eline>
          </div>
        </div>
        <div class="main_right_todayR">
          <div class="main_title" style="width:192px;">
            <img
              class="main_title_Leftupper"
              src="../../assets/images/Leftupper_icon.png"
              alt=""
            />
            <p>今日拦截威胁数量</p>
            <img
              class="main_title_lowerright"
              src="../../assets/images/lowerright_icon.png"
              alt=""
            />
          </div>
          <div style="padding-left:7px">
            <p class="main_left_todayL_p1">Today</p>
            <p class="main_left_todayL_p2">122,13</p>
            <p class="main_left_todayL_p3">总拦截数量</p>
            <p class="main_left_todayL_p1">Total</p>
            <p class="main_left_todayL_p2">524</p>
          </div>
        </div>
      </div>
      <!-- 攻击趋势 -->
      <div class="main_right_attack">
        <div class="main_title" style="width:108px;">
          <img
            class="main_title_Leftupper"
            style="top:20px"
            src="../../assets/images/Leftupper_icon.png"
            alt=""
          />
          <p>攻击趋势</p>
          <img
            class="main_title_lowerright"
            src="../../assets/images/lowerright_icon.png"
            alt=""
          />
        </div>
        <div>
          <echart
            :chartData="echartData.bar"
            style="width:100%;height:200px;"
          ></echart>
        </div>
      </div>
      <!-- 攻击排行 -->
      <div class="main_right_ranking">
        <div class="main_title" style="width:170px;">
          <img
            class="main_title_Leftupper"
            src="../../assets/images/Leftupper_icon.png"
            alt=""
          />
          <p>受攻击单位排位</p>
          <img
            class="main_title_lowerright"
            src="../../assets/images/lowerright_icon.png"
            alt=""
          />
        </div>
        <div class="main_right_rankingL" style="height:62%">
          <ul class="main_right_new_title">
            <li class="li1"><span>攻击目标</span></li>
            <li class="li2"><span>攻击次数</span></li>
          </ul>
          <ul id="box">
            <li
              id="con2"
              ref="con2"
              :class="{ anim: animate == true }"
              @mouseenter="mEnter"
              @mouseleave="mLeave"
            >
              <ul
                class="main_right_new_list"
                v-for="(item, index) in items"
                :key="index"
              >
                <li class="li1">
                  <span>{{ item.name }}</span>
                </li>
                <li class="li2">
                  <span>{{ item.item }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="main_right_rankingR">
          <epie
            :chartData="echartData.video1"
            :isAxisChart="false"
            style="width:200px;height:200px;padding:45px 0 0 0"
          ></epie>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";
</style>
<script>
import Echart from "../../components/EChart/EChart";
import Eline from "../../components/EChart/Eline";
import Ebar from "../../components/EChart/Ebar";
import Emap from "../../components/EChart/Emap";
import Epie from "../../components/EChart/Epie";
import demo1Api from "@/api/demo1";

export default {
  components: {
    Echart,
    Eline,
    Ebar,
    Emap,
    Epie
  },
  data() {
    return {
      echartData: {
        video: {
          series: []
        },
         video1: {
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
      },
      animate: false,
      items:[],
      
    };
  },

  mounted() {
    this.timer1 = setInterval(this.scroll, 1000);
    this.timer2 = setInterval(this.scroll1, 1000);
  },

  methods: {
    scroll() {
      let con1 = this.$refs.con1;
      con1.style.marginTop = "-25px";
      this.animate = !this.animate;
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function() {
        that.items.push(that.items[0]);
        that.items.shift();
        con1.style.marginTop = "0px";
        that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 1000);
    },
    scroll1() {
      let con2 = this.$refs.con2;
      con2.style.marginTop = "-20px";
      this.animate = !this.animate;
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function() {
        that.items.push(that.items[0]);
        that.items.shift();
        con2.style.marginTop = "0px";
        that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 1000);
    },
    mEnter() {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    },
    mLeave() {
      this.timer1 = setInterval(this.scroll, 1000);
      this.timer2 = setInterval(this.scroll1, 1000);
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
      });
      //柱状图
      demo1Api.getListBar().then(response => {
        const res = response.data;
        //console.log("柱状图", res);
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
      //受攻击饼图
      demo1Api.getList().then(response => {
        const res = response.data;
        // console.log("测试数据",res)
        this.echartData.video1.series.push({
          data: res.data,
          type: "pie",
          radius: ["55%", "65%"],
          labelLine: {
            normal: {
              show: false
            }
          },
          tooltip: {
            textStyle: {}
          }
        });
        this.echartData.video1.series.push({
          data: res.data,
          type: "pie",
          radius: ["45%", "35%"],
          labelLine: {
            normal: {
              show: false
            }
          }
        });
      });
      //滚动消息
      demo1Api.getItemlist().then(response => {
        const res = response.data;
       // console.log("攻击1", res);
        this.items = res.data;
      });
    }
  },
  created() {
    this.getTableData();
  }
};
</script>
