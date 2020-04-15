<template>
  <div class="card my-2">
    <div class="card-body">
      <el-form ref="form" :model="form" :rules="rules" class="auto-content-form d-flex flex-wrap my-2" size="small" label-width="25%" inline>
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
      <!-- 详情操作 -->
      <el-button
        :disabled="isSaving"
        :icon="isSaving ? 'el-icon-loading' : 'el-icon-finished'"
        type="primary"
        size="small"
        class="ml-3"
        @click="save"
        >{{isSaving ? '保存中' : '保  存'}}</el-button
      >
      <el-button size="small" icon="el-icon-back" @click="back">返  回</el-button>
    </div>
  </div>
</template>

<script>
import InputModel from "@/components/base/InputModel.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    inputModel: InputModel
  },
  props: {
    routeName: String,
    editDataApi: String
  },
  data() {
    return {
      apiRouteName: '',
      formField: {},
      form: {},
      rules: {},
      initForm: {},
      isSaving: false,
    };
  },
  computed: {
    isFormChange() {
      for (const key in this.form) {
        if (this.form[key] !== this.initForm[key]) return true;
      }

      return false;
    }
  },
  methods: {
    ...mapMutations(["setDataForm", "setRouteTags"]),
    // 初始化数据
    __initData() {
      let data = this.$store.state.detailForm.data[
        this.routeName
      ];
      this.formField = data.formField;
      this.form = data.form;
      this.apiRouteName = data.apiRouteName;
      this.setRules();
      this.initForm = data.initForm;
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
    // 保存修改后的表单
    save() {
      // 如果表单项未修改，则提示并返回
      if (!this.isFormChange) {
        return this.$message({
          message: "请先修改表单，再点击保存",
          type: "warning"
        });
      }
    
      this.$refs.form.validate((valid) => {
        if (!valid) 
          return;

        // 将无输入值的字段值设置为 null
        for (let prop in this.form) {
          if (this.form[prop] === '') {
            this.form[prop] = null;
          }
        }

        this.isSaving = true;
        // 发送请求
        this.axios.put(`/api/${this.apiRouteName}/update`, this.form)
          .then(response => {
            if (response.status === 200 && response.data.errno === 0) {
              // 修改 vuex 中的数据
              this.setDataForm({
                routeName: this.routeName,
                form: this.form
              });
              // 重新获取数据
              this.__initData();
              // 成功提示
              this.$message({
                type: 'success',
                message: '保存成功'
              })
            } else {
              this.$message.error('保存失败')
            }
          })
          .finally(() => {
            this.isSaving = false;
          })
      });
    },
    // 关闭并返回上一路由
    back() {
      // 未保存提示
      if (this.isFormChange) {
        this.$confirm('修改尚未保存, 返回将丢失，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.closeRoute();
        })
      } else {
        this.closeRoute();
      }
    },
    // 关闭当前路由并返回上一路由
    closeRoute() {
      this.$router.back();
      // 删除当前路由标签
      let routeTags = JSON.parse(sessionStorage.getItem("routeTags"));
      let index = routeTags.findIndex(
        item => item.pathName === this.routeName
      );
      routeTags.splice(index, 1);
      // 更新路由标签
      this.setRouteTags(routeTags);
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
    }
  },
  created() {
    this.__initData();
  }
};
</script>