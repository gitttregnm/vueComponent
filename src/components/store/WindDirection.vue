<!--公用组件：
 /**
  * @desc WindDirection
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:29
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>windDirection 风向</h2>

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
  name: 'WindDirection',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'arr',
          explain: '风向数组（16向）',
          defaultValue: store.state.windDirection.arr
        },
        {
          propName: 'range',
          explain: '风向角度分界线数组（16向）',
          defaultValue: store.state.windDirection.range
        },
        {
          propName: 'arrFor8',
          explain: '风向数组（8向）',
          defaultValue: store.state.windDirection.arrFor8
        },
        {
          propName: 'rangeFor8',
          explain: '风向角度分界线数组（8向）',
          defaultValue: store.state.windDirection.rangeFor8
        },
        {
          propName: 'windDirectionToLabel',
          explain: '字典，风向角度转为名称',
          defaultValue: store.state.windDirection.windDirectionToLabel
        },
        {
          propName: 'windDirectionToAngle',
          explain: '字典，风向角度转为显示用角度',
          defaultValue: store.state.windDirection.windDirectionToAngle
        },
        {
          propName: 'windDirectionToNum',
          explain: '字典，风向角度转为角度值',
          defaultValue: store.state.windDirection.windDirectionToNum
        },
        {
          propName: 'windDirectionToNum',
          explain: '字典，角度值转为风向角度',
          defaultValue: store.state.windDirection.windDirectionToNum
        }
      ],
      tableData2ByProp: [
        {
          propName: 'windDirectionArr',
          explain: '风向数组（16向）',
          defaultValue: store.getters['windDirection/windDirectionArr']
        }
      ],
      tableData2ByFunction: [
        {
          propName: 'getWindDirectionByAngle',
          explain: '通过角度值获取风向（16向）',
          param: 'angle',
          returnValue: '风向（16向）'
        },
        {
          propName: 'getWindDirectionByAngleFor8',
          explain: '通过角度值获取风向（8向）',
          param: 'angle',
          returnValue: '风向（8向）'
        },
        {
          propName: 'getLabelByWindDirection',
          explain: '通过风向获取显示用风向',
          param: 'windDirection',
          returnValue: '显示用风向'
        },
        {
          propName: 'getAngleByWindDirection',
          explain: '通过风向获取显示用角度',
          param: 'windDirection',
          returnValue: '显示用角度'
        },
        {
          propName: 'getNumByWindDirection',
          explain: '通过风向获取角度值',
          param: 'windDirection',
          returnValue: '角度值'
        },
        {
          propName: 'getWindDirectionByNum',
          explain: '通过角度值获取风向',
          param: 'num',
          returnValue: '风向'
        },
        {
          propName: 'getWindDirectionByNum',
          explain: '通过角度值获取风向',
          param: 'num',
          returnValue: '风向'
        }
      ],
      tableData3: [
        // {
        //   propName: 'menuArrSave',
        //   explain: '保存菜单数组',
        //   param: '{arr}'
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
