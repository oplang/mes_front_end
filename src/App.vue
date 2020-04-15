<template>
  <div id="app">
    <router-view/>

    <add-data-dialog ref="addDataDialog"></add-data-dialog>
  </div>
</template>

<script>
import AddDataDialog from "@/components/base/AddDataDialog.vue";

export default {
  components: {
    addDataDialog: AddDataDialog,
  },
  provide() {
    return {
      app: this,
    }
  },
  methods: {
    openAddDataDialog(tableField, callback) {
      this.$refs.addDataDialog.openDialog(tableField, callback);
    },
  }
}
</script>

<style lang="scss">
/* 修改表单项标签 */
.el-form-item__label-mb-0 .el-form-item__label {
  margin-bottom: 0
}

// 实现表单 content 填充 form-item 剩余空间
.auto-content-form .el-form-item {
  display: flex;
}
.auto-content-form .el-form-item__content {
  flex: 1;
}

/* 隐藏滚动条 */
/* chrome 和 Safari */
.element::-webkit-scrollbar { 
  width: 0 !important;
  height: 0 !important;
}
/* IE 10+ */
.hidden-scroll-bar { 
  -ms-overflow-style: none; 
}
/* Firefox */
.hidden-scroll-bar { 
  overflow: -moz-scrollbars-none; 
}
</style>
