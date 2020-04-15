<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="生产车间"
    api-route-name="fac_work_center"
    detail-route-name="work_center_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "centerId",
          label: "工作中心编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "areaId",
          label: "区域编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "areaName",
          label: "区域名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerName",
          label: "工作中心名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerType",
          label: "工作中心类型",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerState",
          label: "工作中心状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerFactory",
          label: "归属厂区",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerWorkshop",
          label: "归属车间",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerLeader",
          label: "工作中心负责人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "centerCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "centerCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "centerEventUser",
          label: "最近的修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "centerEventTime",
          label: "最近的修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "centerDesc",
          label: "描述",
          colWidth: "150",
          inputType: "textarea",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        }
      ],
      searchFormField: [
        { prop: "centerName", label: "名称", inputType: "text" },
        { prop: "centerType", label: "类型", inputType: "select" },
        { prop: "centerState", label: "状态", inputType: "select" }
      ]
    };
  }
};
</script>
