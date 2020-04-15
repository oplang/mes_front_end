<template>
  <data-shower
    :table-field="tableField"
    :search-form-field="searchFormField"
    name="设备报警"
    api-route-name="equipment_alarm"
    detail-route-name="device_alarm_detail"
  ></data-shower>
</template>

<script>
export default {
  data() {
    return {
      tableField: [
        {
          prop: "alarmId",
          label: "报警记录编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "eqpId",
          label: "设备编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "eqpName",
          label: "设备名称",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmType",
          label: "报警类型",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmRelationId",
          label: "报警关联对象编号",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmRelationType",
          label: "报警关联对象类型",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmMessage",
          label: "报警信息",
          colWidth: "150",
          inputType: "textarea",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmTime",
          label: "报警时间",
          colWidth: "150",
          inputType: "date",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmLocation",
          label: "所在位置",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmState",
          label: "报警处理状态",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmCount",
          label: "报警次数",
          colWidth: "150",
          inputType: "number",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: false
        },
        {
          prop: "alarmCreateUser",
          label: "创建人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "alarmCreateTime",
          label: "创建时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "alarmEventUser",
          label: "最近的修改人",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        },
        {
          prop: "alarmEventTime",
          label: "最近的修改时间",
          colWidth: "150",
          inputType: "text",
          inputWidth: "240",
          allowEmpty: true,
          prohibitEdit: true
        }
      ],
      searchFormField: [
        { prop: "alarmType", label: "报警类型", inputType: "text" },
        {
          prop: "alarmRelationId",
          label: "关联对象编号",
          inputType: "text"
        },
        { prop: "alarmState", label: "处理状态", inputType: "text" }
      ]
    };
  }
};
</script>
