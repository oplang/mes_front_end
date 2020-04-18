<template>
  <div>
    <!-- 数字/文本框 -->
    <el-input
      v-if="
        config.inputType === 'text' ||
        config.inputType === 'number'
      "
      :value="value"
      @input="updateValue"
      :type="config.inputType"
      :disabled="config.prohibitEdit"
      :placeholder="'请输入' + config.label"
      style="width: 100%"
    ></el-input>
    <!-- 描述框 -->
    <el-input
      v-if="config.inputType === 'textarea'"
      :value="value"
      @input="updateValue"
      :placeholder="'请输入' + config.label"
      :disabled="config.prohibitEdit"
      type="textarea"
      maxlength="200"
      rows="8"
      style="width: 100%"
      show-word-limit
    ></el-input>
    <!-- 选择框 -->
    <el-select
      v-if="config.inputType === 'select'"
      :value="value"
      @change="updateValue"
      :disabled="config.prohibitEdit"
      :placeholder="'请选择' + config.label"
      style="width: 100%"
    >
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <!-- 日期选择器 -->
    <el-date-picker
      v-if="config.inputType === 'date'"
      :value="value"
      @input="updateValue"
      :disabled="config.prohibitEdit"
      :editable="false"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-ddTHH:mm:ss.000+0000"
      placeholder="选择日期"
      style="width: 100%"    
    >
    </el-date-picker>
  </div>
</template>

<script>
import { DatePicker, Select, Option } from "element-ui";

export default {
  components: {
    "el-date-picker": DatePicker,
    "el-select": Select,
    "el-option": Option
  },
  // 自定义 v-model 行为
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    config: Object,
    value: String,
    selectOptions: Array,
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
};
</script>
