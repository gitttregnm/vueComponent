<!--公用组件：
 /**
  * @desc FrameMenu
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:10
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>frameMenu 为需要处理的外链页面添加处理函数</h2>

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
  name: 'FrameMenu',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'dict',
          explain: '字典，用 component 字段作为 key 记录对应页面的外链执行函数',
          defaultValue: store.state.frameMenu.dict
        }
      ],
      tableData2ByProp: [
        // {
        //   propName: 'areaNameByAreaDefault',
        //   explain: '默认区域的名称',
        //   defaultValue: store.getters['area/areaNameByAreaDefault']
        // }
      ],
      tableData2ByFunction: [
        // {
        //   propName: 'getAreaLevelNumberByCode',
        //   explain: '通过区域 code 获得区域等级值',
        //   param: 'code',
        //   returnValue: '区域等级值'
        // }
      ],
      tableData3: [
        // {
        //   propName: 'menuArrSave',
        //   explain: '保存菜单数组',
        //   param: 'obj（{arr: menuArr}）'
        // }
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
