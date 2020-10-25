const funcRouter = [
  {
    name: "工具",
    path: "/tool:/id/BaseForm",
    component: () => import("@/views/toolPage/plugin/BaseForm"),
    children: [
      {
        id: "BaseTable",
        name: "vuex 工具的简单使用",
        component: () => import("@/views/toolPage/plugin/BaseTable")
      }
    ]
  }
];
export default funcRouter;
