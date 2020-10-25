<!--公用组件：
 /**
  * @desc AreaLevel
  * @module @/components
  * @desc 组件描述：城市级别选择器
  * @author zkhq
  * @date 2020/7/16 11:37
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>AreaLevel 城市级别选择器</h2>

    <h3></h3>

    <p>适用广泛的基础城市级别选择器</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <AreaLevel v-model="value"></AreaLevel>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>组件中使用的是数字 <code>code</code></p>
        </div>
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>

    <h3>Attributes</h3>

    <table>
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData1" :key="index">
        <td><span>{{item.parameter}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.type || '-'}}</span></td>
        <td><span>{{item.optionalValue || '-'}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>Events</h3>

    <table>
      <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2" :key="index">
        <td><span>{{item.event}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>Methods</h3>

    <table>
      <thead>
      <tr>
        <th>方法</th>
        <th>参数</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData3" :key="index">
        <td><span>{{item.method}}</span></td>
        <td><span>{{item.parameter || '-'}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

  </section>
</template>

<script>
// import
import AreaLevel from '@/componentsAreaLevel'
import hljs from 'highlight.js'
export default {
  name: 'AreaLevelDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      value: '',
      tableData1: [
        {
          parameter: 'v-model/value',
          explain: '绑定值',
          type: 'Number',
          optionalValue: '城市 level',
          defaultValue: ''
        },
        {
          parameter: 'areaLevelArr',
          explain: '替代的城市级别数组',
          type: 'Array',
          optionalValue: '',
          defaultValue: this.$store.state.area2.areaLevelArr
        }
      ],
      tableData2: [
        // {
        //   event: 'change',
        //   explain: 'select 的 change 事件',
        //   returnValue: 'value（选定区县code）'
        // },
        // {
        //   event: 'value-change',
        //   explain: 'select 的绑定值发生变化时',
        //   returnValue: 'value（选定区县code）|| ""'
        // }
      ],
      tableData3: [
        // {
        //   method: 'getValue',
        //   parameter: '',
        //   explain: '获取选中值',
        //   returnValue: 'value（选定区县code） || ""'
        // },
        // {
        //   method: 'getAreaByCode',
        //   parameter: 'code',
        //   explain: '通过 code 获取区域完整信息',
        //   returnValue: 'option（code 对应的区域完整信息） || \'\''
        // }
      ]
    }
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { AreaLevel },
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
    this.$refs.code.innerHTML = hljs.highlightAuto(`
  <template>
    <AreaLevel v-model="value"></AreaLevel>
  </template>
  import AreaLevel from '@/componentsAreaLevel'
  export default {
    data() {
      return {
        value: ''
      }
    },
    components: { AreaLevel }
  }
  `).value
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  watch: {
    value (val) {
      console.log('value:', val)
    }
  },
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
