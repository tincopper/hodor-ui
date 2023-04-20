// 菜单配置
export const menu = [{
    "name": "调度器管理",
    "index": 1,
    "router": "/service",
    "icon": "el-icon-ump-linode",
    "authUniqueMark": 'scheduler_source'
  },
  {
    "name": "执行器管理",
    "index": 2,
    "router": "/actuator",
    "icon": "el-icon-ump-linode",
    "authUniqueMark": 'actuator_source'
  },
  {
    "name": "任务管理",
    "index": 3,
    "icon": "el-icon-ump-xiangmu1",
    "authUniqueMark": 'job_manager',
    "router": "/job",
    "children": [{
        "name": "任务组管理",
        "router": "/jobgroup",
        "id": 1,
        "authUniqueMark": 'job_group',
      },
      {
        "name": "任务信息管理",
        "router": "/jobmessage",
        "id": 2,
        "authUniqueMark": 'job_message',
      },
      /*{
        "name": "job报警管理",
        "id": 1,
        "router": "/jobalarm",
        "authUniqueMark": 'job_alarm',
      },*/
      {
        "name": "任务执行状态",
        "router": "/jobstatus",
        "authUniqueMark": 'job_status',
      },
      {
        "name": "任务报警查询",
        "router": "/job_alarm_search",
        "authUniqueMark": 'job_alarm_search',
      },
      {
        "name": "任务报警过滤管理",
        "router": "/job_alarm_filter",
        "authUniqueMark": 'job_alarm_filter',
      },
      {
        "name": "一次性任务查询",
        "router": "/once_search",
        "authUniqueMark": 'job_once_search',
      }
    ]
  },
  {
    "name": "WorkFlow任务管理",
    "index": 4,
    "icon": "el-icon-ump-channel",
    "authUniqueMark": 'edts_zone',
    "router": "/work_flow"
  },
  {
    "name": "任务执行汇总统计",
    "index": 5,
    "icon": "el-icon-ump-areachart",
    "authUniqueMark": 'hodor_job_statistics',
    "router": "/chart",
    "children": [
      {
        "name": "job统计",
        "router": "/chart_statistics",
        "authUniqueMark": 'job_chart_statistics',
      }]
  },
  {
    "name": "自助服务",
    "index": 6,
    "icon": "el-icon-ump-system",
    "authUniqueMark": 'hodor_tools',
    "router": "/tool",
    "children": [{
        "name": "表达式转换",
        "router": "/tool_cron_transfer",
        "authUniqueMark": 'job_tool_cron_transfer',
      },
      {
        "name": "一键配置报警",
        "router": "/tool_config_monitor",
        "authUniqueMark": 'job_tool_config_monitor',
      },
      {
        "name": "操作记录",
        "router": "/user_action",
        "authUniqueMark": 'job_user_action',
      }
    ]
  },
  {
    "name": "权限管理",
    "index": 7,
    "icon": "el-icon-ump-user",
    "authUniqueMark": 'hodor_fn',
    //"roleId": 0,
    "router": "/user",
    "children": [{
        "name": "授权",
        "router": "/user_auth",
        "authUniqueMark": 'job_user_auth',
      },
      {
        "name": "用户行为",
        "router": "/user_action",
        "authUniqueMark": 'job_user_action',
      },
      {
        "name": "角色管理",
        "router": "/user_role",
        "authUniqueMark": 'job_user_role',
      },
      {
        "name": "用户管理",
        "router": "/user_manage",
        "authUniqueMark": 'job_user_manage',
      },
      {
        "name": "监控项管理",
        "router": "/tool_monitor",
        "authUniqueMark": 'job_tool_monitor',
      }
    ]
  },
  {
    "name": "反馈和帮助",
    "index": 8,
    "icon": "el-icon-ump-yonghupeizhixitong",
    "authUniqueMark": 'feedback_help',
    "children": [{
        "name": "使用说明",
        "router": "/help",
        "authUniqueMark": 'job_help',
      },
      {
        "name": "意见反馈",
        "router": "/feedback",
        "authUniqueMark": 'job_feedback',
      },
    ]
  }]
