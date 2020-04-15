const routes = [
  {
    path: '/',
    // name: 'layout',
    redirect: { name: 'login' },
    // component: () => import('../views/Layout.vue'),
    component: 'layout',
    children: [
      {
        // path: '/index',
        // name: 'index',
        // component: () => import('../views/index/index.vue')
        meta: {
          title: '首页'
        },
        component: 'index/index'
      },
      {
        meta: {
          title: '生产车间'
        },
        component: 'factory_model/area_model/production_workshop/index'
      },
      {
        meta: {
          title: '生产车间详情'
        },
        component: 'factory_model/area_model/production_workshop/detail'
      },
      {
        component: 'factory_model/area_model/production_line/index',
        meta: {
          title: '生产线'
        }
      },
      {
        component: 'factory_model/area_model/production_line/detail',
        meta: {
          title: '生产线详情'
        }
      },
      {
        component: 'factory_model/area_model/work_center/index',
        meta: {
          title: '工作中心'
        }
      },
      {
        component: 'factory_model/area_model/work_center/detail',
        meta: {
          title: '工作中心详情'
        }
      },
      {
        component: 'factory_model/area_model/work_station/index',
        meta: {
          title: '工位'
        }
      },
      {
        component: 'factory_model/area_model/work_station/detail',
        meta: {
          title: '工位详情'
        }
      },

      // 组织结构
      {
        component: 'factory_model/organization_structure/department_management/index',
        meta: {
          title: '部门管理'
        }
      },
      {
        component: 'factory_model/organization_structure/department_management/detail',
        meta: {
          title: '部门详情'
        }
      },
      {
        component: 'factory_model/organization_structure/jobs_station/index',
        meta: {
          title: '岗位管理'
        }
      },
      {
        component: 'factory_model/organization_structure/jobs_station/detail',
        meta: {
          title: '岗位详情'
        }
      },
      {
        component: 'factory_model/organization_structure/employees_management/index',
        meta: {
          title: '员工管理'
        }
      },
      {
        component: 'factory_model/organization_structure/employees_management/detail',
        meta: {
          title: '员工详情'
        }
      },

      // 时间模型
      {
        component: 'factory_model/time_model/production_shift/index',
        meta: {
          title: '生产班次'
        }
      },
      {
        component: 'factory_model/time_model/production_shift/detail',
        meta: {
          title: '生产班次详情'
        }
      },
      {
        component: 'factory_model/time_model/production_calendar/index',
        meta: {
          title: '生产日历'
        }
      },
      {
        component: 'factory_model/time_model/production_calendar/detail',
        meta: {
          title: '生产日历详情'
        }
      },

      // 生产计划管理
      {
        component: 'production_plan_manage/production_plan_info/index',
        meta: {
          title: '生产计划信息'
        }
      },
      {
        component: 'production_plan_manage/production_plan_info/detail',
        meta: {
          title: '生产计划信息详情'
        }
      },
      {
        component: 'production_plan_manage/daily_plan/index',
        meta: {
          title: '日计划'
        }
      },
      {
        component: 'production_plan_manage/daily_plan/detail',
        meta: {
          title: '日计划详情'
        }
      },
      {
        component: 'production_plan_manage/work_in_process/index',
        meta: {
          title: '在制品'
        }
      },
      {
        component: 'production_plan_manage/work_in_process/detail',
        meta: {
          title: '在制品详情'
        }
      },
      {
        component: 'production_plan_manage/production_work_order/index',
        meta: {
          title: '生产工单'
        }
      },
      {
        component: 'production_plan_manage/production_work_order/detail',
        meta: {
          title: '生产工单详情'
        }
      },

      // 车间物料管理
      {
        component: 'material_management/material_batch/index',
        meta: {
          title: '物料批次'
        }
      },
      {
        component: 'material_management/material_batch/detail',
        meta: {
          title: '批次详情'
        }
      },
      {
        component: 'material_management/material_demand/index',
        meta: {
          title: '物料需求'
        }
      },
      {
        component: 'material_management/material_demand/detail',
        meta: {
          title: '需求详情'
        }
      },
      {
        component: 'material_management/material_sending/index',
        meta: {
          title: '产线发料'
        }
      },
      {
        component: 'material_management/material_sending/detail',
        meta: {
          title: '产线发料详情'
        }
      },
      {
        component: 'material_management/material_picking/index',
        meta: {
          title: '物料领料'
        }
      },
      {
        component: 'material_management/material_picking/detail',
        meta: {
          title: '领料详情'
        }
      },
      {
        component: 'material_management/abnormal_material/index',
        meta: {
          title: '物料异常'
        }
      },
      {
        component: 'material_management/abnormal_material/detail',
        meta: {
          title: '异常物料详情'
        }
      },

      // 设备管理
      {
        component: 'device_management/device_parameter/index',
        meta: {
          title: '设备台账'
        }
      },
      {
        component: 'device_management/device_parameter/detail',
        meta: {
          title: '设备台账详情'
        }
      },
      {
        component: 'device_management/device_abnormal_fault/index',
        meta: {
          title: '设备异常故障'
        }
      },
      {
        component: 'device_management/device_abnormal_fault/detail',
        meta: {
          title: '设备异常故障详情'
        }
      },
      {
        component: 'device_management/device_alarm/index',
        meta: {
          title: '设备报警'
        }
      },
      {
        component: 'device_management/device_alarm/detail',
        meta: {
          title: '设备报警详情'
        }
      },

      // 系统管理
      {
        component: 'system_management/user_management/index',
        meta: {
          title: '用户管理'
        }
      },
      {
        component: 'system_management/user_management/detail',
        meta: {
          title: '用户详情'
        }
      }
    ]
  },
  {
    component: 'login/index'
  },
  {
    path: '*',
    redirect: { name: 'index' }
  }
]

const getRoutes = function () {
  createRoutes(routes);
  return routes;
}

function createRoutes(array) {
  // 遍历数组
  for (let i = 0; i < array.length; i++) {
    let component = array[i].component;

    if (!component)
      return;
    
    // 生成 path，如果已设置则使用设置的值
    array[i].path = array[i].path || '/' + getRoutePath(component);
    // 生成 name，如果已设置则使用设置的值
    array[i].name = array[i].name || getRouteName(component);
    // 生成 component import 函数
    let importFn = import(`../views/${component}.vue`);
    array[i].component = () => importFn;

    // 递归生成子路由
    if (array[i].children && array[i].children.length > 0) 
      createRoutes(array[i].children);
  }
}

// 获取路由路径
function getRoutePath(string) {
  let index = string.lastIndexOf('/');

  // 如果末尾字符串是 “index”，就返回 “/index” 前的字符串；否则返回整个字符串
  return string.substr(index + 1) === 'index'
          ? string.substring(0, index)
          : string;
}

// 获取路由名
function getRouteName(string) {
  let strings = string.split('/');
  let length = strings.length;
  let lastStr = strings[length - 1];

  // 如果字符串末尾是 “index” 就返回 “/index” 前到 “/” 的字符串
  if (lastStr === 'index') {
    return strings[length -2];
  }
  // 如果字符串末尾是 “detail” 就返回 “/detail” 前到 “/” 的字符串拼接上 “/detail”
  if (lastStr === 'detail') {
    return strings[length -2] + '_' + lastStr;
  }

  return  lastStr;
}


export default getRoutes();
