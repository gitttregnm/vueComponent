<!--公用组件：
 /**
  * @desc DateQuarterPinker
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/20 16:59
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>DateQuarterPinker 季度选择器</h2>

    <h3></h3>

    <p>适用广泛的基础季度选择</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <DateQuarterPinker v-model="value" :disabled-date="disabledDate"></DateQuarterPinker>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p><code>value</code>使用的是组件使用的数据，想要获取日期对象可以使用 <code>getDateByQuarter</code> 和 <code>getDateEndByQuarter</code></p>
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
import DateQuarterPinker from '@/componentsDateQuarterPinker'
import hljs from 'highlight.js'
export default {
  name: 'DateQuarterPinkerDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      // 季度
      value: {
        year: 2020,
        quarter: 2
      },
      tableData1: [
        {
          parameter: 'v-model/value',
          explain: '绑定值',
          type: 'Object',
          optionalValue: '{year, quarter} 年和季节（1，2，3，4）',
          defaultValue: ''
        },
        {
          parameter: 'clearable',
          explain: '是否可清除',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'true'
        },
        {
          parameter: 'disabledDate',
          explain: '选项禁用判断函数，返回是否禁用',
          type: 'Function',
          optionalValue: '({year, quarter}) => [true | false]',
          defaultValue: '() => false'
        }
      ],
      tableData2: [
        {
          event: 'change',
          explain: '点击触发 change 事件',
          returnValue: '{year, quarter}'
        },
        {
          event: 'clear',
          explain: '点击 X 触发清空事件',
          returnValue: ''
        }
      ],
      tableData3: [
        {
          method: 'yearPrev',
          parameter: '',
          explain: '前一年',
          returnValue: ''
        },
        {
          method: 'yearNext',
          parameter: '',
          explain: '后一年',
          returnValue: ''
        },
        {
          method: 'clearSelect',
          parameter: '',
          explain: '清空选中项，并触发 clear 和 change 事件',
          returnValue: ''
        },
        {
          method: 'setSelect',
          parameter: '',
          explain: '设置选中项，并触发 change 事件',
          returnValue: ''
        },
        {
          method: 'isDefferentQuarter',
          parameter: '{year, quarter}',
          explain: '判断是否与当前季度不同',
          returnValue: 'true | false'
        },
        {
          method: 'isQuarter',
          parameter: '{year, quarter}',
          explain: '是否是正确的季节数据',
          returnValue: 'true | false'
        },
        {
          method: 'getStandardQuarter',
          parameter: '{year, quarter}',
          explain: '获取规范的季节数据',
          returnValue: '{year, quarter}'
        },
        {
          method: 'getQuarterByDate',
          parameter: 'Date 对象',
          explain: '通过 Date 对象获取季节数据',
          returnValue: '{year, quarter}'
        },
        {
          method: 'getDateByQuarter',
          parameter: '{year, quarter}',
          explain: '通过季节数据获取 Date 对象',
          returnValue: 'Date 对象'
        },
        {
          method: 'getDateEndByQuarter',
          parameter: '{year, quarter}',
          explain: '通过季度数据获取季度结束的 Date 对象',
          returnValue: 'Date 对象'
        }
      ]
    }
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { DateQuarterPinker },
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
      <DateQuarterPinker v-model="value" :disabled-date="disabledDate"></DateQuarterPinker>
    </template>
    import DateQuarterPinker from '@/componentsDateQuarterPinker'
    export default {
      data() {
        return {
          value: {
            year: 2020,
            quarter: 2
          }
        }
      },
      components: { DateQuarterPinker },
      method: {
        disabledDate ({year}) {
          if (year > 2020) return true
        }
      }
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
    /**
     * select 的绑定值发生变化时
     * @param value 选定区县code
     */
    disabledDate ({year}) {
      if (year > 2020) return true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
