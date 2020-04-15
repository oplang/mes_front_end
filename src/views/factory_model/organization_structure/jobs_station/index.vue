<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="岗位管理"
    api-route-name="fac_emp_post"
    detail-route-name="jobs_station_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "postId",
          label: "岗位编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "postName",
          label: "岗位名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "deptId",
          label: "部门编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "deptId",
          label: "部门名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "postState",
          label: "岗位状态",
          colWidth: "150",
          inputType: "select",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "postCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "postCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "postEventUser",
          label: "最近的修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "postEventTime",
          label: "最近的修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "postDesc",
          label: "描述",
          colWidth: "150",
          inputType: "textarea",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        }
      ],
      searchFormField: [
        { prop: "postId", label: "编号", inputType: "text" },
        { prop: "postName", label: "名称", inputType: "text" },
        { prop: "postState", label: "状态", inputType: "select" }
      ]
    };
  }
};
</script>
