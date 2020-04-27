<template>
  <el-card class="box-card mt-3" shadow="always">
    <div
      slot="header"
      class="clearfix d-flex align-items-center"
      style="margin: -6px"
    >
      <h4 class="mr-auto mb-0 text-muted">{{ name }}</h4>
      <el-button
        type="success"
        size="small"
        icon="el-icon-plus"
        plain
        @click="addTableItem"
        >添加数据</el-button
      >
      <el-button
        type="primary"
        size="small"
        :icon="showSearch ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
        plain
        @click="showSearch = !showSearch"
        >{{ showSearch ? "隐藏" : "展开" }}搜索</el-button
      >
    </div>
    <!-- 搜索表单卡片 -->
    <search-form-card
      v-show="showSearch"
      :formField="searchFormField"
      :form="searchForm"
      :api-route-name="apiRouteName"
      @search="getData(true)"
      class="mb-3"
    >
    </search-form-card>
    <!-- 取消/删除选中 -->
    <el-button size="mini" @click="$refs.table.clearSelection()"
      >取消选中</el-button
    >
    <el-button size="mini" type="danger" @click="delTableItem()"
      >删除选中</el-button
    >
    <!-- 数据表格 -->
    <el-table
      :data="tableData"
      v-loading="isLoading"
      ref="table"
      max-height="400px"
      style="width: 100%"
      size="medium"
      class="mt-1"
      @selection-change="setSelectedIds"
    >
      <el-table-column type="selection" width="40" fixed></el-table-column>
      <!-- 自动生产表格列 -->
      <el-table-column
        v-for="(item, index) in tableField"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.colWidth"
      >
      </el-table-column>
      <!-- 表格操作 -->
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-link
            style="color: #409eff"
            :underline="false"
            @click="viewTableItem(scope)"
            >查看/编辑</el-link
          >
          <el-link
            class="ml-2"
            style="color: #f56c6c"
            :underline="false"
            @click="delTableItem(scope.$index)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="page.current"
      :page-sizes="page.sizes"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      class="mt-3"
      @change="getData"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import SearchFormCard from "./SearchFormCard.vue";
import { Table, TableColumn, Pagination } from "element-ui";

export default {
  // 接收依赖注入的 app 属性
  inject: ["app"],
  components: {
    searchFormCard: SearchFormCard,
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-pagination": Pagination
  },
  props: {
    name: String,
    tableField: {
      type: Array,
      default: null
    },
    searchFormField: {
      type: Array,
      default: null
    },
    detailRouteName: {
      type: String,
      default: ""
    },
    apiRouteName: {
      type: String,
      required: true
    },
    getDataApi: String,
    addDataApi: String,
    delDataApi: String,
    searchApi: String
  },
  data() {
    return {
      tableData: [],
      selectedIds: [],
      searchForm: {},
      isLoading: false,
      showSearch: true,
      page: {
        total: 0,
        current: 1,
        sizes: [10, 20, 30, 40],
        size: 10
      },
      idKey: ""
    };
  },
  methods: {
    // 初始化
    __init() {
      this.idKey = this.tableField[0].prop;
      // 设置搜索表单
      this.setSearchForm();
    },
    // 设置表单
    setSearchForm() {
      let form = {};

      this.searchFormField.forEach(item => {
        form[item.prop] = "";
      });

      this.searchForm = form;
    },
    // 后端获取数据
    getData(isSearch = false) {
      this.isLoading = true;

      let apiUrl = `/api/${this.apiRouteName}/list`;
      if (isSearch) {
        const params = [];
        for (const key in this.searchForm) {
          const val = this.searchForm[key];
          if (val !== "") {
            params.push(`${key}=${val}`);
          }
        }
        apiUrl += "?" + params.join("&");
      }

      // 请求后端数据
      // this.axios.get(this.getDataApi + 'startPage=' + page.current)
      this.axios
        .get(apiUrl)
        .then(response => {
          if (response.status === 200) {
            if (response.data.ErrorCode !== -1) {
              this.tableData = response.data.data;
              this.setTime();

              this.page.total = this.tableData.length;
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    // 设置表格中 Date 类型数据的显示格式
    setTime() {
      this.tableData.forEach(item => {
        for (let prop in item) {
          if (
            item[prop] !== null &&
            typeof item[prop] === "string" &&
            item[prop].endsWith(".000Z")
          ) {
            const index = item[prop].indexOf("T");

            item[prop] = item[prop].substring(0, index);
          }
        }
      });
    },
    // 多选
    setSelectedIds(value) {
      this.selectedIds = [];
      value.forEach(item => {
        this.selectedIds.push(item[this.idKey]);
      });
    },
    // 添加表格项
    addTableItem() {
      this.app.openAddDataDialog(this.tableField, item => {
        try {
          // 请求后端数据
          this.axios
            .post(`/api/${this.apiRouteName}/add`, item)
            .then(response => {
              if (response.status === 200 && response.data.errno === 0) {
                this.getData();
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
              } else {
                this.$message({
                  message: "抱歉，添加失败",
                  type: "danger"
                });
              }
            });
        } catch (error) {
          this.$message({
            message: "抱歉，添加失败",
            type: "danger"
          });
        }
      });
    },
    // 查看表格项
    viewTableItem(scope) {
      // Vuex 保存详情表单数据
      let formField = this.tableField;
      let form = scope.row;
      let initForm = { ...form };

      this.$store.commit("addDataForm", {
        routeName: this.detailRouteName,
        data: {
          formField,
          form,
          initForm,
          apiRouteName: this.apiRouteName
        }
      });
      // 跳转到详情页面
      this.$router.push({ name: this.detailRouteName });
    },
    // 删除表格项
    delTableItem(index) {
      let isMutlipleDel = typeof index === "undefined";

      let idParmas = [];
      if (!isMutlipleDel) {
        this.selectedIds.push(this.tableData[index][this.idKey]);
      }
      this.selectedIds.forEach(item => {
        idParmas.push(`id=${item}`);
      });

      this.$confirm(
        `此操作将永久删除${isMutlipleDel ? "选中" : "该"}数据, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        // 发送后端
        this.axios
          .delete(`/api/${this.apiRouteName}/del?${idParmas.join("&")}`)
          .then(response => {
            if (response.status === 200 && response.data.errno === 0) {
              // 更新删除后数据
              this.getData();
              // this.selectedIds.forEach(value => {
              // console.log(value);
              // console.log(this.idKey);
              // 找到表格中被删除项的下标
              // let index = this.tableData.findIndex(
              //   item => item[this.idKey] === value
              // );
              // 从表格中移除被删除项
              // this.tableData.splice(index, 1);
              // });
              // 成功提示
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            } else {
              this.$message.error("删除失败");
            }
          });
      });
    }
  },
  created() {
    this.__init();
    this.getData();
  }
};
</script>