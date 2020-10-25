<!--公用组件：
 /**
  * @desc Menu
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/9 16:58
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>menu 菜单</h2>

    <h3></h3>

    <p>使用请在<a @click="setMenu('1_1')">vuex 工具的简单使用</a>查看</p>

    <h3>state</h3>

    <p>相当于 vue 的 data</p>

    <table>
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData1" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>getters</h3>

    <p>相当于 vue 的 computed</p>

    <table>
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2ByProp" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2ByFunction" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>mutations</h3>

    <p>用于同步修改 vuex 的数据</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData3" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>actions</h3>

    <p>用于异步修改 vuex 的数据</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData4" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import
import store from '@/store'
export default {
  name: 'Menu',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'menuArr',
          explain: '菜单数组',
          defaultValue: store.state.menu.menuArr
        },
        {
          propName: 'menuTree',
          explain: '菜单树形数据',
          defaultValue: store.state.menu.menuTree
        },
        {
          propName: 'mainMenu',
          explain: '主菜单对应的 id',
          defaultValue: store.state.menu.mainMenu
        },
        {
          propName: 'mainModuleMenu',
          explain: '主模块的主菜单对应的 id（当前不分模块，相当于 mainMenu）',
          defaultValue: store.state.menu.mainModuleMenu
        },
        {
          propName: 'menuIdToMenu',
          explain: '字典，通过菜单 id 获取菜单数据',
          defaultValue: store.state.menu.menuIdToMenu
        },
        {
          propName: 'menuRouteNameToMenu',
          explain: '字典，通过菜单 routeName 获取菜单数据（主要为了方便登录页 login，暑期保障 cockpit，一张图 BdpMap）',
          defaultValue: store.state.menu.menuRouteNameToMenu
        },
        {
          propName: 'menuUrlToMenu',
          explain: '字典，通过菜单路径获取菜单数据',
          defaultValue: store.state.menu.menuUrlToMenu
        },
        {
          propName: 'menuComponentMenu',
          explain: '字典，通过菜单组件路径获取菜单数据',
          defaultValue: store.state.menu.menuComponentMenu
        },
        {
          propName: 'pathToTrue',
          explain: '字典，通过二级菜单 id 获取三级菜单 id（用于记录 二级菜单下的默认三级菜单）',
          defaultValue: store.state.menu.pathToTrue
        },
        {
          propName: 'trueToPath',
          explain: '字典，通过三级菜单 id 获取二级菜单 id（用于记录 二级菜单下的默认三级菜单）',
          defaultValue: store.state.menu.trueToPath
        }
      ],
      tableData2ByProp: [
        {
          propName: 'menuOptions',
          explain: '前期用于级联选择器的参数（现在没有使用的地方）',
          defaultValue: store.getters['menu/menuOptions']
        }
      ],
      tableData2ByFunction: [
        {
          propName: 'menuRouteNameToUrl',
          explain: '通过 routeName 获取 url',
          param: 'routeName',
          returnValue: 'url'
        },
        {
          propName: 'menuUrlToId',
          explain: '通过 url 获取 id',
          param: 'url',
          returnValue: 'id'
        },
        {
          propName: 'menuUrlToIds',
          explain: '通过 url 获取 ids',
          param: 'url',
          returnValue: 'ids'
        },
        {
          propName: 'menuUrlToModule',
          explain: '通过 url 获取 module',
          param: 'url',
          returnValue: 'module'
        },
        {
          propName: 'menuUrlToComponent',
          explain: '通过 url 获取 component',
          param: 'url',
          returnValue: 'component'
        },
        {
          propName: 'menuIdToUrl',
          explain: '通过 id 获取 url',
          param: 'id',
          returnValue: 'url'
        },
        {
          propName: 'menuIdToPid',
          explain: '通过 id 获取 pid',
          param: 'id',
          returnValue: 'pid'
        },
        {
          propName: 'menuIdToTop',
          explain: '通过 id 获取 top，判断是否为顶级页面',
          param: 'id',
          returnValue: 'top'
        },
        {
          propName: 'menuIdToSomeByProp',
          explain: '通过 id 获取 prop 对应的值',
          param: '{id, prop}',
          returnValue: 'prop 对应的值'
        },
        {
          propName: 'menuIdToChild',
          explain: '通过 id 获取 子菜单',
          param: 'id',
          returnValue: '子菜单'
        },
        {
          propName: 'menuComponentToId',
          explain: '通过 component 获取 id',
          param: 'component',
          returnValue: 'id'
        }
      ],
      tableData3: [
        {
          propName: 'menuArrSave',
          explain: '保存菜单数组',
          param: '{arr}'
        },
        {
          propName: 'menuTreeSave',
          explain: '保存菜单树形数据',
          param: '{arr}'
        },
        {
          propName: 'mainModuleMenuSave',
          explain: '保存主模块的主菜单对应的 id',
          param: '{num}'
        },
        {
          propName: 'mainMenuSave',
          explain: '保存主菜单对应的 id',
          param: '{num}'
        },
        {
          propName: 'setPathToTrue',
          explain: '保存二级和三级菜单对应字典',
          param: '{path, pathTrue}'
        },
        {
          propName: 'clearMenu',
          explain: '清空菜单数据',
          param: ''
        }
      ],
      tableData4: [
        // {
        //   propName: '',
        //   explain: '',
        //   param: '',
        //   returnValue: ''
        // }
      ]
    }
  },
  props: {
    setMenu: {
      type: Function
    }
  },
  components: {},
  // beforeRouteEnter (to, from, next) {
  // },
  // beforeRouteUpdate (to, from, next) {
  // },
  // beforeRouteLeave (to, from, next) {
  // },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  watch: {},
  computed: {},
  directives: {},
  filter: {},
  methods: {
    // 方法调用不需要注释，方法定义需要注释
    // 方法注释规则 /** */
  }
}
</script>

<style lang="scss" scoped>

</style>
