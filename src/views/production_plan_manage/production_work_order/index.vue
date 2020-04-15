<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="生产工单"
    api-route-name="wip_work_order"
    detail-route-name="production_work_order_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "woId",
          label: "工单编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "operId",
          label: "工序编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "operName",
          label: "工序名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "pitemId",
          label: "日计划编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "shiftId",
          label: "班制编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "shiftName",
          label: "班制名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woFactory",
          label: "厂区",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woWorkshop",
          label: "车间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woTrackInUser",
          label: "签入人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woTrackInTime",
          label: "签入时间",
          colWidth: "150",
          inputType: "time",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woTrackOutUser",
          label: "签出人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woTrackOutTime",
          label: "签出时间",
          colWidth: "150",
          inputType: "time",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woQty",
          label: "工单目标数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woFinishQty",
          label: "完工数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woOkQty",
          label: "合格数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woAbnormalQty",
          label: "异常数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woScrappedQty",
          label: "报废数量",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woOkRate",
          label: "合格率",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woAbnormalRate",
          label: "异常率",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woScrappedRate",
          label: "报废率",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woState",
          label: "工单状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "woCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woEventUser",
          label: "最近的修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woEventTime",
          label: "最近的修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "woRemark",
          label: "描述",
          colWidth: "150",
          inputType: "textarea",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        }
      ],
      searchFormField: [
        { prop: "woId", label: "编号", inputType: "text" },
        { prop: "woWorkshop", label: "车间", inputType: "text" },
        { prop: "woState", label: "状态", inputType: "select" }
      ]
    };
  }
};
</script>
