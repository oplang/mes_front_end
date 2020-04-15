F<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="生产车间"
    api-route-name="fac_area"
    detail-route-name="production_workshop_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "areaId",
          label: "车间编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaName",
          label: "车间名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: false,
          prohibitEdit: false
        },
        {
          prop: "areaCode",
          label: "标识代码",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaYpe",
          label: "车间类型",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: false,
          prohibitEdit: false
        },
        {
          prop: "areaState",
          label: "车间状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaSequence",
          label: "车间顺序",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaLeader",
          label: "负责人",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaTaktTime",
          label: "生产节拍",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaDesc",
          label: "描述",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "areaCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "areaEventUser",
          label: "最近修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "areaEventTime",
          label: "最近修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        }
      ],
      searchFormField: [
        { prop: "centerId", label: "编号", inputType: "text" },
        { prop: "centerName", label: "名称", inputType: "text" },
        { prop: "centerState", label: "状态", inputType: "select" }
      ]
    };
  }
};
</script>
