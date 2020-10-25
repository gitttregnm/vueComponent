const toolRoute = require.context(
  "./methods", // 读取文件的路径
  true, // 是否遍历子目录
  /.js$/ // .js
);

let routers = [];

toolRoute.keys().map(item => {
  routers.push(...toolRoute(item.default));
});

export default routers;
