<template>
  <el-dialog title="添加数据" :visible.sync="dialogVisible" top="8vh" width="80%">
    <el-form ref="form" :model="form" :rules="rules" class="auto-content-form d-flex flex-wrap" label-width="25%" inline="">
      <!-- 自动生成表单项 -->
        <el-form-item
          v-for="(item, index) in formField"
          :key="index"
          :label="formField[index].label"
          :prop="item.prop"
          class="w-50 mx-0"
        >
          <input-model
            v-model="form[item.prop]"
            :config="formField[index]"
            :select-options="
              item.inputType === 'select' ? getOptions(item.optionsApi) : null
            "
          ></input-model>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取  消</el-button>
      <el-button
        :disabled="isAdding"
        :icon="isAdding ? 'el-icon-loading' : ''"
        type="primary"
        @click="addData"
        >{{ isAdding ? '保存中' : '确  定'}}</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import InputModel from "./InputModel.vue";

export default {
  components: {
    inputModel: InputModel
  },
  data() {
    return {
      dialogVisible: false,
      isAdding: false,
      callback: null,
      formField: [],
      form: {},
      rules: {},
      autoForm: {}
    };
  },
  methods: {
    // 打开弹框
    openDialog(tableField, callback) {
      this.formField = tableField.filter(item => !item.prohibitEdit);
      this.setForm();
      this.setRules();
      this.callback = callback;
      this.dialogVisible = true;
    },
    // 关闭弹框
    closeDialog() {
      this.callback = null;
      this.dialogVisible = false;
    },
    // 设置表单
    setForm() {
      let form = {};

      this.formField.forEach(item => {
        if (!item.prohibitEdit) {
          form[item.prop] = "";
        }
      });

      this.form = form;
    },
    // 设置表单验证规则
    setRules() {
      this.formField.forEach(item => {
        let message = `请${item.inputType === 'select' ? '选择' : '输入'}${item.label}`;
        let trigger = item.inputType === 'select' ? 'change' : 'blur';

        this.rules[item.prop] = [
          { required: !item.allowEmpty, message, trigger }
        ];
      })
    },
    // 获取表单选择框选项
    // getOptions(api) {
    getOptions() {
      // 从后端获取选项并返回
      return [
        {
          label: "模拟数据",
          value: "test"
        }
      ];
    },
    // 添加表格数据
    addData() {
      this.$refs.form.validate(valid => {
        if (!valid)
          return;

        // 执行回调函数（如果有）
        if (typeof this.callback === "function") {
          this.isAdding = true;
          this.callback(this.form);
          this.isAdding = false;
        }

        this.closeDialog();
      })
    }
  }
};
</script>
