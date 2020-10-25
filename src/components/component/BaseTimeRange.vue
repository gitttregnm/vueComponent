<!--公用组件：
 /**
  * @desc BaseCounty
  * @module @/components
  * @desc 组件描述：
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
    <h2>时间范围选择</h2>
    <h3></h3>
    <p>适用于 近一天，近三天、近半年，近一年等等，不同时间范围内的时间类型按钮。</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <base-time-range
          :isDefault="2"
          :config="showTimeBtnConfig"
          :time-format="timeFormatStr"
          @notify="getTimeValue"
          >
        </base-time-range>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>组件的使用中，时间范围按钮，可以增加也可减少或者在列表范围外的时间范围也可以。<b style="color: red;">只要遵循配置原则，时间类型可以随意配置</b>。
          </p>
        </div>
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>

    <h3>基本属性配置</h3>

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
        <td><span>{{ item.parameter }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.type || '-' }}</span></td>
        <td><span>{{ item.optionalValue || '-' }}</span></td>
        <td><span>{{ item.defaultValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>config 的基本配置</h3>

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
      <tr v-for="(item, index) in tableData3" :key="index">
        <td><span>{{ item.parameter }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.type || '-' }}</span></td>
        <td><span>{{ item.optionalValue || '-' }}</span></td>
        <td><span>{{ item.defaultValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>Methods</h3>

    <table>
      <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2" :key="index">
        <td><span>{{ item.event }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.returnValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import BaseTimeRange from '@/componentsbase/BaseTimeRange'
import hljs from 'highlight.js'

export default {
  name: 'BaseCityDemo',
  components: {
    BaseTimeRange
  },
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      showTimeBtnConfig: [
        {
          id: 1,
          text: '近一天',
          unit: 'hours', // 需要按照小时计算，请填写 hours
          num: 1,
          retrodictVal: 1, // 结束时间往前推 1 小时,注意此处是整数
          disable: true
        },
        {
          id: 2,
          text: '近三天',
          unit: 'days',
          num: 3,
          retrodictVal: 1,
          disable: false
        },
        {
          id: 3,
          text: '近一周',
          unit: 'days',
          num: 7,
          disable: false
        },
        {
          id: 4,
          text: '近一个月',
          unit: 'months',
          num: 1,
          disable: false
        },
        {
          id: 5,
          text: '近三个月',
          unit: 'months',
          num: 3,
          disable: false
        },
        {
          id: 6,
          text: '近半年',
          unit: 'months',
          num: 6,
          disable: false
        },
        {
          id: 7,
          text: '近一年',
          unit: 'years',
          num: 1,
          disable: false
        }
      ],
      timeFormatStr: 'YYYY-MM-DD HH:mm:ss',
      tableData1: [
        {
          parameter: 'isDefault',
          explain: '默认选中的时间类型。必填项！',
          type: 'number',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'config',
          explain: '具体的时间显示类型配置项。必填项！',
          type: 'Object',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'time-format',
          explain: '显示的时间格式',
          type: 'string',
          optionalValue: '',
          defaultValue: ''
        }
      ],
      tableData3: [
        {
          parameter: 'id',
          explain: '标识时间类型的唯一性。必填项！且不可重复！',
          type: 'number',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'text',
          explain: '按钮显示的文字内容。必填项！',
          type: 'string',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'unit',
          explain: '用来进行时间计算的单位。必填项',
          type: 'string',
          optionalValue: 'hours，days，months，minutes，seconds，years',
          defaultValue: ''
        },
        {
          parameter: 'num',
          explain: '用来进行时间计算的值。必填项！比如： unit=‘近一个月’ ，则num = 1 就表示 1个月。就是当前时间往前推一个月。',
          type: 'string',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'disable',
          explain: '按钮是否可用。如果不可用。就改为 true。必填项！',
          type: 'boolean',
          optionalValue: 'true or false',
          defaultValue: ''
        },
        {
          parameter: 'retrodictVal',
          explain: '设置截止的时间，往前倒推值。比如：unit=‘hours’ 则 retrodictVal = 1 就表示，截止时间===当前时间往前推1个小时。切记此处的值必须为正整数。',
          type: 'number',
          optionalValue: '',
          defaultValue: ''
        }
      ],
      tableData2: [
        {
          event: 'notify',
          explain: '获取选择的时间值',
          returnValue: 'time（为一个时间数组）'
        }
      ]
    }
  },
  props: {},
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
      <base-time-range
          :isDefault="1"
          :config="showTimeBtnConfig"
          :time-format="timeFormatStr"
          @notify="getTimeValue"
          >
        </base-time-range>
    </template>
    import BaseTimeRange from '@/componentsbase/BaseTimeRange'
    export default {
      data() {
        return {
          showTimeBtnConfig: [
            {
              id: 1, // 唯一不要重复
              text: '近一天',
              unit: 'hours', // 需要按照小时计算，请填写 hours
              num: 1,
              retrodictVal: 1, // 结束时间往前推 1 小时,注意此处是正整数
              disable: false
            },
            {
              id: 2,
              text: '近三天',
              unit: 'days',
              num: 3,
              retrodictVal: 1,
              disable: false
            },
            {
              id: 3,
              text: '近一周',
              unit: 'days',
              num: 7,
              disable: false
            },
            {
              id: 4,
              text: '近一月',
              unit: 'months',
              num: 1,
              disable: false
            },
            {
              id: 5,
              text: '近3月',
              unit: 'months',
              num: 3,
              disable: false
            },
            {
              id: 6,
              text: '近半年',
              unit: 'months',
              num: 6,
              disable: false
            },
            {
              id: 7,
              text: '近一年',
              unit: 'years',
              num: 1,
              disable: false
            }
          ],
          timeFormatStr: 'YYYY-MM-DD HH:mm:ss',
        }
      },
      components: { BaseTimeRange },
      method: {
          getTimeValue (value) {
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
  watch: {},
  computed: {},
  directives: {},
  filter: {},
  methods: {
    // 方法调用不需要注释，方法定义需要注释
    // 方法注释规则 /** */
    /**
     * select 的绑定值发生变化时
     * @param value 选定城市的code
     */
    getTimeValue (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
