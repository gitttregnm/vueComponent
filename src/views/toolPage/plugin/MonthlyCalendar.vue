<!--公用组件：
 /**
  * @desc MonthlyCalendar
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/8/5 10:22
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section>

    <h2>MonthlyCalendar 月日历</h2>

    <h3></h3>

    <p>适用广泛的基础季度选择</p>

    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div>
          <div class="block">
            <div class="demonstration">当前月</div>
            <MonthlyCalendar></MonthlyCalendar>
          </div>
          <div class="block">
            <div class="demonstration">2020/06，从周一开始</div>
            <MonthlyCalendar :month-date="date1" :first-day="1"></MonthlyCalendar>
          </div>
          <div class="block">
            <div class="demonstration">使用 slot</div>
            <MonthlyCalendar>
              <template v-slot:week="obj">
                {{'周' + obj.show}}
              </template>
              <template v-slot:before="obj">
                b
              </template>
              <template v-slot="obj">
                {{getDate(obj.date)}}
              </template>
              <template v-slot:after="obj">
                a
              </template>
            </MonthlyCalendar>
          </div>
        </div>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>通过<code>month-date</code>传入日期对象，根据日期对象的月份渲染月日历</p>
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

    <h3>Slot</h3>

    <table>
      <thead>
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData4" :key="index">
        <td><span>{{item.name || '-'}}</span></td>
        <td><span>{{item.explain}}</span></td>
      </tr>
      </tbody>
    </table>

  </section>
</template>

<script>
// import
import MonthlyCalendar from '@/componentsMonthlyCalendar'
import hljs from 'highlight.js'
import {getFormatDate} from '@/utils/common'
export default {
  name: 'MonthlyCalendarDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      // 季度
      date1: new Date('2020/06/01'),
      tableData1: [
        {
          parameter: 'monthDate',
          explain: '日期对象，用于获取年和月',
          type: 'Date',
          optionalValue: '',
          defaultValue: '当前时间日期对象'
        },
        {
          parameter: 'firstDay',
          explain: '星期的第一天',
          type: 'Number',
          optionalValue: '周日到周六(0, 1, 2, 3, 4, 5, 6)',
          defaultValue: '0'
        }
      ],
      tableData2: [
        // {
        //   event: 'change',
        //   explain: '点击触发 change 事件',
        //   returnValue: '{year, quarter}'
        // }
      ],
      tableData3: [
        // {
        //   method: 'yearPrev',
        //   parameter: '',
        //   explain: '前一年',
        //   returnValue: ''
        // }
      ],
      tableData4: [
        {
          name: '',
          explain: '自定义日期的内容，参数为 { date, format, dateStr }'
        },
        {
          name: 'before',
          explain: '自定义日期（一号前的周日期）的内容，参数为 { date, format, dateStr }'
        },
        {
          name: 'after',
          explain: '自定义日期（当前月最后一天后的周日期）的内容，参数为 { date, format, dateStr }'
        },
        {
          name: 'week',
          explain: '自定义星期的内容，参数为 { day, show }'
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
  components: { MonthlyCalendar },
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
    <div class="block">
      <div class="demonstration">当前月</div>
      <MonthlyCalendar></MonthlyCalendar>
    </div>
    <div class="block">
      <div class="demonstration">2020/06</div>
      <MonthlyCalendar :month-date="date1"></MonthlyCalendar>
    </div>
    <div class="block">
      <div class="demonstration">使用 slot</div>
      <MonthlyCalendar>
        <template v-slot:week="obj">
          {{'周' + obj.show}}
        </template>
        <template v-slot:before="obj">
          b
        </template>
        <template v-slot="obj">
          {{getDate(obj.date)}}
        </template>
        <template v-slot:after="obj">
          a
        </template>
      </MonthlyCalendar>
    </div>
  </template>
  import MonthlyCalendar from '@/componentsMonthlyCalendar'
  import {getFormatDate} from '@/utils/common'
  export default {
    data() {
      return {
        date1: new Date('2020/07/01'),
      }
    },
    components: { MonthlyCalendar },
    method: {
      getDate (date) {
        return getFormatDate(date, 'DD')
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
  },
  computed: {},
  directives: {},
  filter: {},
  methods: {
    // 方法调用不需要注释，方法定义需要注释
    // 方法注释规则 /** */
    /**
     * 获取日期对象的日期值
     * @param date
     */
    getDate (date) {
      return getFormatDate(date, 'DD')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
