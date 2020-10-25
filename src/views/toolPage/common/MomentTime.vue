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
    <h2>moment 时间方法</h2>

    <h3>moment方法</h3>

    <p>使用请在<a @click="setMenu('0_3')">公共方法使用</a>查看</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>备注</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData1" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import * as monentTime from '@/utils/getDate'
export default {
  name: 'Common',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'getCurrWeek',
          explain: '当前周',
          defaultNotes: "{start: '2020-08-10', end: '2020-08-16'}， 从周第一天上午 12:00,到周最后一天 23:59:59.999"
        },
        {
          propName: 'getCurrMonth',
          explain: '当前月',
          defaultNotes: '{start: "2020-08-01", end: "2020-08-31" } 从月第一天上午 12:00,到月最后一天 23:59:59.999'
        },
        {
          propName: 'getCurrYear',
          explain: '当前年',
          defaultNotes: "{start: '2020-01-01', end: '2020-12-31'} 从1月1日上午 12:00,到12月31日 23:59:59.999"
        },
        {
          propName: 'getCurrDay',
          explain: '当前天',
          defaultNotes: "{start: '2020-08-14', end: '2020-08-14'} 从今天上午 12:00,到今天晚上的 23:59:59.999"
        },
        {
          propName: 'getNearCurrDay',
          explain: '近一天',
          defaultNotes: "{start: '2020-08-12 17:30:08', end: '2020-08-13 17:30:08'} 小时和分钟按照当前时间的前一天"
        },
        {
          propName: 'getNearWeek',
          explain: '近一周',
          defaultNotes: "{start: '2020-08-06 17:30:08', end: '2020-08-13 17:30:08'}小时和分钟按照当前时间的前一周"
        },
        {
          propName: 'getNearMonth',
          explain: '近一月',
          defaultNotes: "{start: '2020-07-13 17:34:35', end: '2020-08-13 17:34:35'}"
        },
        {
          propName: 'getCurrDayTime',
          explain: '当前时间',
          defaultNotes: "{start: '2020-08-14 05:34:35'} 当前时间为12小时计算制"
        },
        {
          propName: 'getPrevMonth',
          explain: '上月',
          defaultNotes: "{start: '2020-07-01', end: '2020-07-31'}"
        },
        {
          propName: 'getCurrQuality',
          explain: '本季度',
          defaultNotes: "{start: '2020-07-01', end: '2020-09-30'}"
        },
        {
          propName: 'getPrevQuality',
          explain: '上季度',
          defaultNotes: "{start: '2020-04-01', end: '2020-06-30'}"
        }
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
    // console.log(monentTime.getCurrWeek())
    // console.log(monentTime.getCurrMonth())
    // console.log(monentTime.getCurrYear())
    // console.log(monentTime.getCurrDay())
    // console.log(monentTime.getNearCurrDay())
    // console.log(monentTime.getNearWeek())
    // console.log(monentTime.getNearMonth())
    // console.log(monentTime.getCurrDayTime())
    // console.log(monentTime.getPrevMonth())
    // console.log(monentTime.getCurrQuality())
    // console.log(monentTime.getPrevQuality())
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
