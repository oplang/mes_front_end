export default {
  logo: '',
  navMenu: {
    activeIndex: 0,
    navList: [
      {
        name: '生产建模',
        subActiveIndex: -1,
        subNavList: [
          {
            name: '区域模型',
            icon: 'el-icon-location',
            subActiveIndex: -1,
            subNavList: [
              {
                index: "0-0",
                name: '生产车间',
                pathName: 'production_workshop',
              },
              {
                index: "0-1",
                name: '生产线',
                pathName: 'production_line'
              },
              {
                index: "0-2",
                name: '工作中心',
                pathName: 'work_center'
              },
              {
                index: "0-3",
                name: '工位',
                pathName: 'work_station'
              }
            ]
          },
          {
            name: '组织结构',
            icon: 'el-icon-user-solid',
            subActiveIndex: -1,
            subNavList: [
              {
                index: "1-0",
                name: '部门管理',
                pathName: 'department_management'
              },
              {
                index: "1-1",
                name: '岗位管理',
                pathName: 'jobs_station'
              },
              {
                index: "1-2",
                name: '员工管理',
                pathName: 'employees_management'
              }
            ]
          },
          {
            name: '时间模型',
            icon: 'el-icon-date',
            subActiveIndex: -1,
            subNavList: [
              {
                index: "2-0",
                name: '生产班次',
                pathName: 'production_shift'
              },
              {
                index: "2-1",
                name: '生产日历',
                pathName: 'production_calendar'
              }
            ]
          }
        ]
      },
      {
        name: '生产计划管理',
        icon: 'el-icon-location',
        subActiveIndex: -1,
        subNavList: [
          {
            name: '生产计划信息',
            icon: 'el-icon-s-order',
            pathName: 'production_plan_info'
          },
          {
            name: '日计划',
            icon: 'el-icon-data-analysis',
            pathName: 'daily_plan'
          },
          {
            name: '在制品',
            icon: 'el-icon-s-data',
            pathName: 'work_in_process'
          },
          {
            name: '生产工单',
            icon: 'el-icon-refresh',
            pathName: 'production_work_order'
          }
        ]
      },
      {
        name: '车间物料管理',
        subActiveIndex: -1,
        subNavList: [
          {
            name: '物料批次',
            icon: 'el-icon-tickets',
            pathName: 'material_batch'
          },
          {
            name: '物料需求',
            icon: 'el-icon-s-claim',
            pathName: 'material_demand'
          },
          {
            name: '物料发料',
            icon: 'el-icon-s-promotion',
            pathName: 'material_sending'
          },
          {
            name: '物料领料',
            icon: 'el-icon-receiving',
            pathName: 'material_picking'
          },
          {
            name: '物料异常',
            icon: 'el-icon-warning',
            pathName: 'abnormal_material'
          },
        ]
      },
      {
        name: '设备管理',
        subActiveIndex: -1,
        subNavList: [
          {
            name: '设备台账',
            icon: 'el-icon-tickets',
            pathName: 'device_parameter'
          },
          {
            name: '设备异常',
            icon: 'el-icon-warning',
            pathName: 'device_abnormal'
          },
          {
            name: '设备报警',
            icon: 'el-icon-error',
            pathName: 'device_alarm'
          }
        ]
      },
      {
        name: '系统管理',
        subActiveIndex: -1,
        subNavList: [
          {
            name: '用户管理',
            icon: 'el-icon-s-custom',
            pathName: 'user_management'
          }
        ]
      },
    ]
  }
};
