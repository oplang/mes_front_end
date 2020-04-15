<template>
  <!-- 搜索表单 -->
  <div class="card bg-light">
    <div class="card-body p-3">
      <div class="my-2">
        <el-form
          ref="form"
          class="d-flex auto-content-form el-form-item__label-mb-0"
          :model="form"
          size="mini"
          label-width="auto"
          inline
        >
          <el-form-item
            v-for="(item, index) in formField"
            :key="index"
            class="flex-grow-1 my-0"
            :label="item.label"
          >
            <input-model
              v-model="form[item.prop]"
              :config="formField[index]"
              :select-options="
                item.inputType === 'select' ? getOptions(item.optionsApi) : null
              "
            ></input-model>
          </el-form-item>
          <!-- 表单按钮 -->
          <el-form-item class="flex-grow-0 my-0">
            <el-button type="primary" @click="$emit('search')">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "./InputModel.vue";

export default {
  props: {
    formField: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    apiRouteName: {
      type: String,
      required: true
    }
  },
  components: {
    inputModel: InputModel
  },
  methods: {
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
    
  }
};
</script>
