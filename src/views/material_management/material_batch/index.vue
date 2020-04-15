<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="物料批次"
    api-route-name="materiel_lot"
    detail-route-name="material_batch_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "lotId",
          label: "批次编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "matCode",
          label: "物料编码",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotQuantity",
          label: "批次数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotFreezedQty",
          label: "已冻结数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotBaseUnit",
          label: "基本单位",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotState",
          label: "批次状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotHoldState",
          label: "暂留状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotHoldCode",
          label: "暂留代码",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotHoldReason",
          label: "暂留原因",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotSourceId",
          label: "原始批次编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotSupplier",
          label: "供应商名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "lotCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "lotCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "lotEventUser",
          label: "最近的修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "lotEventTime",
          label: "最近的修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        }
      ],
      searchFormField: [
        { prop: "lotId", label: "批次编号", inputType: "text" },
        { prop: "lotState", label: "批次状态", inputType: "select" },
        { prop: "lotSupplier", label: "供应商名称", inputType: "text" }
      ]
    };
  }
};
</script>
