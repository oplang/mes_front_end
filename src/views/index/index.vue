<template>
  <div>
    <!-- 顶部提醒标签 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in infoCard" :key="index">
        <el-card class="box-card" shadow="hover">
          <div class="d-flex align-items-center">
            <i
              :class="[item.icon, item.bgColor]"
              class="border h3 text-center mb-0 mr-3 text-white"
              style="width: 40px; height: 40px; line-height: 40px"
            ></i>
            <div>
              <h4 class="mb-0">{{ item.number }}</h4>
              <small class="text-muted">{{ item.desc }}</small>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 图表 -->
    <el-row class="my-3">
      <el-col :span="24">
        <el-card class="box-card" style="height: 500px" shadow="never">
          <div slot="header" class="clearfix">
            <span>数据统计（模拟）</span>
          </div>
          <div class="text item">
            <div ref="chart" style="width: 100%; height: 400px"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 底部信息 -->
    <el-row :gutter="20" class="my-3">
      <!-- 生产情况统计 -->
      <el-col :span="12">
        <el-card class="box-card" shadow="never" body-style="height: 230px; padding: 30px">
          <div slot="header" class="clearfix">
            <span>生产情况统计</span>
          </div>
          <div class="text item h-100 d-flex flex-column">
            <div class="media border align-items-center mb-auto">
              <span class="bg-light py-4 px-3">昨日产量</span>
              <div class="media-body">
                <div class="border-bottom pl-2 pb-1 mb-1">
                  <span>产品总数（千件）12</span>
                </div>
                <div class="pl-2">
                  <span>产品金额（千元）8</span>
                </div>
              </div>
            </div>

            <div class="media border align-items-center mt-3">
              <span class="bg-light py-4 px-3">本月产量</span>
              <div class="media-body">
                <div class="border-bottom pl-2 pb-1 mb-1">
                  <span>产品总数（万件）14</span>
                </div>
                <div class="pl-2">
                  <span>产品金额（万元）7</span>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 销量排名表格 -->
      <el-col :span="12">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>产量排名</span>
          </div>
          <div class="text item">
            <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              max-height="190"
              style="width: 100%"
            >
              <el-table-column type="index" label="排名" width="80">
              </el-table-column>
              <el-table-column property="name" label="产品名称">
              </el-table-column>
              <el-table-column property="value" label="产品产量" width="100">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      infoCard: [
        {
          icon: "el-icon-user-solid",
          bgColor: "bg-primary",
          number: 100,
          desc: "员工人数（个）"
        },
        {
          icon: "el-icon-s-data",
          bgColor: "bg-success",
          number: 1200,
          desc: "在制品总数 (件)"
        },
        {
          icon: "el-icon-error",
          bgColor: "bg-danger",
          number: 4,
          desc: "设备报警数 (台)"
        },
        {
          icon: "el-icon-warning",
          bgColor: "bg-warning",
          number: 50,
          desc: "物料异常数 (件)"
        }
      ],
      tableData: [
        {
          name: "测试数据",
          value: "100"
        },
        {
          name: "测试数据",
          value: "100"
        },
        {
          name: "测试数据",
          value: "100"
        },
        {
          name: "测试数据",
          value: "100"
        }
      ]
    };
  },
  methods: {
    // 绘制图表
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      var chart = echarts.init(this.$refs.chart);

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
          {
            name: "百度",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "谷歌",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "必应",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "其他",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
