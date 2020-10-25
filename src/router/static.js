const staticRouter = [
  {
    name: "方法",
    path: "/function:/id",
    component: () => import("@/views/toolPage/common/Usage"),
    children: [
      {
        name: "公共方法使用",
        path: "Usage",
        component: () => import("@/views/toolPage/common/Usage")
      },
      {
        id: "0_2",
        name: "common 公共方法",
        component: () => import("@/views/toolPage/common/Common")
      },
      {
        id: "0_3",
        name: "regular 正则",
        component: () => import("@/views/toolPage/common/Regular")
      },
      {
        id: "0_4",
        name: "moment 时间",
        component: () => import("@/views/toolPage/common/MomentTime")
      }
    ]
  },
  {
    name: "插件",
    path: "/plugin:/id",
    component: () => import("@/views/toolPage/plugin/TreeSelect"),
    children: [
      {
        name: "TreeSelect 下拉树形选择器",
        component: () => import("@/views/toolPage/plugin/TreeSelect")
      },
      {
        name: "DateQuarterPinker 季度选择器",
        component: () => import("@/views/toolPage/plugin/DateQuarterPinker")
      },
      {
        name: "MonthlyCalendar 月日历",
        component: () => import("@/views/toolPage/plugin/MonthlyCalendar")
      },
      {
        name: "Transfer 穿梭框",
        component: () => import("@/views/toolPage/plugin/Transfer")
      },
      {
        name: "PaginatedTable 分页表格",
        component: () => import("@/views/toolPage/plugin/PaginatedTable")
      },
      {
        name: "基本form表单查询",
        component: () => import("@/views/toolPage/plugin/BaseForm")
      },
      {
        name: "基本表格使用组件",
        component: () => import("@/views/toolPage/plugin/BaseTable")
      }
    ]
  },
  {
    name: "组件",
    path: "/component:/id",
    component: () => import("@/views/toolPage/plugin/TreeSelect"),
    children: [
      // {
      //
      //   name:  '基准清单',
      //   component: () => import('@/views/toolPage/component/Inventory'
      // },
      // {
      //
      //   name:  '污染物',
      //   component: () => import('@/views/toolPage/component/Pollution'
      // },
      {
        name: "Icon 图标",
        component: () => import("@/views/toolPage/component/Icon")
      },
      {
        name: "BaseCounty 区县选择器",
        component: () => import("@/views/toolPage/component/BaseCounty")
      },
      {
        name: "StationByTypes 下拉树形选择器（空气站）",
        component: () => import("@/views/toolPage/component/StationByTypes")
      },
      {
        name: "BaseCity 城市选择器",
        component: () => import("@/views/toolPage/component/BaseCity")
      },
      {
        name: "stationsCascader 站点级联选择器",
        component: () => import("@/views/toolPage/component/stationsCascader")
      },
      {
        name: "BaseRegionRadioButton 城市群单选按钮组",
        component: () => import("@/views/toolPage/component/BaseRegionRadioButton")
      },
      {
        name: "timeProgressBar 时间播放进度条",
        component: () => import("@/views/toolPage/component/timeProgressBar")
      },
      {
        name: "dateSelect 日期选择",
        component: () => import("@/views/toolPage/component/dateSelect")
      },
      {
        name: "city-Select 城市选择",
        component: () => import("@/views/toolPage/component/citySelect")
      },
      {
        name: "树形菜单选择",
        component: () => import("@/views/toolPage/component/BaseTree")
      },
      {
        name: "AreaCascader1 城市级联选择器",
        // component: () => import("@/views/toolPage/component/AreaCascader1")
      },
      {
        name: "AreaCascader2 城市级联选择器(懒加载)",
        // component: () => import("@/views/toolPage/component/AreaCascader2")
      },
      {
        name: "AreaLevel 城市级别选择器",
        component: () => import("@/views/toolPage/component/AreaLevel")
      },
      {
        name: "BaseImg 图片标签",
        component: () => import("@/views/toolPage/component/BaseImg")
      },
      {
        name: "BaseImgShow 图片展示",
        component: () => import("@/views/toolPage/component/BaseImgShow")
      },
      {
        name: "hightchart 的使用",
        component: () => import("@/views/toolPage/component/BaseHightCharts")
      },
      {
        name: "时间范围选择组件（近一天，近三天...）",
        component: () => import("@/views/toolPage/component/BaseTimeRange")
      }
    ]
  }
];
export default staticRouter
