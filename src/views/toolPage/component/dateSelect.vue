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

    <h2>时间范围下拉列表选择器</h2>
    <h3></h3>
    <p>适合用于指定时间范围内的时间下拉列表的选择</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <dateSelect class="m-l-17" :config="config" @getCurrDateTime="getCurrDateTime"></dateSelect>
      </div>
      <div class="meta" style="height: auto">
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>

    <h3>Props 组件参数说明</h3>

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

    <h3>参数相关配置说明</h3>

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
      <tr v-for="(item, index) in tableData2" :key="index">
        <td><span>{{item.parameter}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.type || '-'}}</span></td>
        <td><span>{{item.optionalValue || '-'}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
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
import dateSelect from '@/componentsbdp/dateSelect'
import hljs from 'highlight.js'
export default {
  name: 'dateSelectDemo',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      // 季度
      config: {
        start: '2016-05-13 08:00:00', // 开始时间
        end: '2016-08-15 08:00:00', // 结束时间
        default: '2016-05-25 12:00:00', // 默认选中时间
        formart: 'YYYY-MM-DD HH:mm:ss', // 格式化控制
        isHour: true // true 为小时类型，false 为天类型
      },
      tableData1: [
        {
          parameter: 'config',
          explain: '传入的相关时间的配置项',
          type: 'Object',
          optionalValue: '{}',
          defaultValue: '{}'
        }
      ],
      tableData2: [
        {
          parameter: 'start',
          explain: '时间下拉列表的开始时间',
          type: 'string',
          optionalValue: '2016-05-13 08:00:00',
          defaultValue: ''
        },
        {
          parameter: 'config',
          explain: '时间下拉列表的结束时间',
          type: 'string',
          optionalValue: '2016-08-15 08:00:00',
          defaultValue: ''
        },
        {
          parameter: 'default',
          explain: '设置默认选中的时间',
          type: 'string',
          optionalValue: '2016-05-25 12:00:00',
          defaultValue: ''
        },
        {
          parameter: 'formart',
          explain: '设置返回时间的时间格式',
          type: 'string',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'isHour',
          explain: '设置时间的类型（小时 or 天）',
          type: 'boolean',
          optionalValue: 'true（小时） or false（天） ',
          defaultValue: ''
        }
      ],
      tableData3: [
        {
          method: 'getCurrDateTime',
          parameter: '',
          explain: '获取选中的时间值',
          returnValue: ''
        }
      ]
    }
  },
  props: {},
  components: { dateSelect },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
      <dateSelect class="m-l-17" :config="dateConfig" @getCurrDateTime="getCurrDateTime"></dateSelect>
    </template>
    import dateSelect from '@/componentsbdp/dateSelect'
    export default {
      data() {
        return {
          config: {
             start: '2016-05-13 08:00:00', // 开始时间
             end: '2016-08-15 08:00:00', // 结束时间
             default: '2016-05-25 12:00:00', // 默认选中时间
             formart: 'YYYY-MM-DD HH:mm:ss', // 格式化控制
             isHour: true // true 为小时类型，false 为天类型
          }
        }
      },
      components: { dateSelect },
      method: {
        getCurrDateTime (value) { // 获取选中的日期
          console.log(value)
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
    getCurrDateTime (value) {
      console.log(value)
    }
  }
}
</script>
