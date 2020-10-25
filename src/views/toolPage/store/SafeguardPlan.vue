<!--公用组件：
 /**
  * @desc SafeguardPlan
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:20
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>safeguardPlan 保障方案菜单</h2>

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
  name: 'SafeguardPlan',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'menuArr',
          explain: '菜单数组',
          defaultValue: store.state.safeguardPlan.menuArr
        },
        {
          propName: 'menuTree',
          explain: '菜单树形数据',
          defaultValue: store.state.safeguardPlan.menuTree
        },
        {
          propName: 'currentMenu',
          explain: '当前菜单 id',
          defaultValue: store.state.safeguardPlan.currentMenu
        },
        {
          propName: 'menuIdToMenu',
          explain: '字典，通过菜单 id 获取菜单数据',
          defaultValue: store.state.safeguardPlan.menuIdToMenu
        },
        {
          propName: 'menuRouteNameToMenu',
          explain: '字典，通过菜单 routeName 获取菜单数据（主要为了方便...）',
          defaultValue: store.state.safeguardPlan.menuRouteNameToMenu
        },
        {
          propName: 'menuUrlToMenu',
          explain: '字典，通过菜单路径获取菜单数据',
          defaultValue: store.state.safeguardPlan.menuUrlToMenu
        },
        {
          propName: 'idToTrue',
          explain: '字典，通过二级菜单 id 获取三级菜单 id（用于记录 二级菜单下的默认三级菜单）',
          defaultValue: store.state.safeguardPlan.idToTrue
        },
        {
          propName: 'trueToId',
          explain: '字典，通过三级菜单 id 获取二级菜单 id（用于记录 二级菜单下的默认三级菜单）',
          defaultValue: store.state.safeguardPlan.trueToId
        }
      ],
      tableData2ByProp: [
        {
          propName: 'topMenu',
          explain: '一级菜单组',
          defaultValue: store.getters['safeguardPlan/topMenu']
        },
        {
          propName: 'currentTopMenu',
          explain: '当前一级菜单',
          defaultValue: store.getters['safeguardPlan/currentTopMenu']
        },
        {
          propName: 'currentIds',
          explain: '当前菜单的 id 组',
          defaultValue: store.getters['safeguardPlan/currentIds']
        },
        {
          propName: 'currentLevel',
          explain: '当前菜单的菜单等级',
          defaultValue: store.getters['safeguardPlan/currentLevel']
        },
        {
          propName: 'menuIdToChild',
          explain: '当前菜单的子菜单',
          defaultValue: store.getters['safeguardPlan/menuIdToChild']
        }
      ],
      tableData2ByFunction: [
        {
          propName: 'getComponentById',
          explain: '通过菜单 id 获取组件实例',
          param: 'id',
          returnValue: '组件实例'
        }
      ],
      tableData3: [
        {
          propName: 'menuArrSave',
          explain: '保存菜单数组',
          param: '{arr}'
        },
        {
          propName: 'setIdToTrue',
          explain: '保存二级和三级菜单对应字典',
          param: '{id, idTrue}'
        },
        {
          propName: 'setCurrentMenu',
          explain: '保存当前菜单对应的 id',
          param: '{menuId}'
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
