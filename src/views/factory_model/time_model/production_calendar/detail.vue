<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
        <el-calendar v-model="value">
          <template v-slot:dateCell="{ date, data }">
            <div
              v-if="isInTableData(data.day)"
              :style="{
                backgroundColor: types[daysType[data.day]].bgColor,
                color: types[daysType[data.day]].color
              }"
              class="w-100 h-100 p-2"
            >
              {{ data.day.split("-")[2] }}
              <!-- 日期类型信息、操作 -->
              <p ref="dayType" class="small mt-3">
                {{ types[daysType[data.day]].name }}
                <!-- 日期编辑 -->
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="点击编辑日期类型"
                  placement="right"
                >
                  <el-link
                    icon="el-icon-edit"
                    :underline="false"
                    :style="{ color: types[daysType[data.day]].color }"
                    @click="
                      edit(
                        data.day,
                        daysType[data.day]
                      )
                    "
                  ></el-link>
                </el-tooltip>
              </p>
            </div>
            <div v-else class="w-100 h-100 p-2">
              {{ data.day.split("-")[2] }}
            </div>
          </template>
        </el-calendar>
      </div>
    </div>

    <!-- 编辑日期类型弹框 -->
    <el-dialog title="编辑" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="日期类型" label-width="120px">
          <el-select
            v-model="form.type"
            placeholder="请选择日期类型"
            @change="isTypeChange = true"
            class="w-75"
          >
            <el-option label="工作" value="work"></el-option>
            <el-option label="假期" value="holiday"></el-option>
            <el-option label="停机维保" value="maint"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "2020-02",
      month: "2020-02",
      tableData: [
        {
          citemDate: "2020-02-01T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-02T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-03T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-04T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-05T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-06T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-07T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-08T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: true
        },
        {
          citemDate: "2020-02-09T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-10T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-11T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-12T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-13T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-14T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-15T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-16T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: true
        },
        {
          citemDate: "2020-02-17T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-18T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-19T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-20T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-21T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-22T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: true
        },
        {
          citemDate: "2020-02-23T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-24T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-25T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-26T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-27T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-28T12:02:27.000+0000",
          citemIsHoliday: false,
          citemIsMaint: false
        },
        {
          citemDate: "2020-02-29T12:02:27.000+0000",
          citemIsHoliday: true,
          citemIsMaint: false
        }
      ],
      daysType: {},
      types: {
        holiday: { name: "假期", bgColor: "#f0f9ea", color: "#67c23a" },
        maint: { name: "停机维保", bgColor: "#fef0ef", color: "#f56c6c" },
        work: { name: "工作", bgColor: "#ecf5ff", color: "#409eff" }
      },
      form: {
        date: "",
        type: ""
      },
      isTypeChange: false,
      dialogVisible: false
    };
  },
  methods: {
    isInTableData(day) {
      return (
        day
          .split("-")
          .splice(0, 2)
          .join("-") === this.month
      );
    },
    // 设置日期的类型
    setDaysType() {
      this.tableData.forEach(item => {
        let type = "";
        let date = item.citemDate;

        if (item.citemIsHoliday) {
          type = "holiday";
        } else if (item.citemIsMaint) {
          type = "maint";
        } else {
          type = "work";
        }

        this.daysType[date.substring(0, 10)] = type;
      });
    },
    // 打开并初始化编辑日期类型弹框
    edit(date, type) {
      this.form.citemDate = date;
      this.form.type = type;
      this.dialogVisible = true;
    },
    // 确认修改日期类型
    confirmEdit() {
      if (this.isTypeChange) {
        let date = this.form.citemDate.substring(0, 10);
        this.daysType[date] = this.form.type;

        // 手动触发点击事件使页面更新
        this.$refs.dayType.click();
      }
      this.dialogVisible = false;
    }
  },
  created() {
    this.setDaysType();
  }
};
</script>

<style>
.el-calendar-day {
  padding: 0 !important;
}
.is-selected {
  color: #1989fa;
}
</style>
