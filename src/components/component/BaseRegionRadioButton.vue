<!--公用组件：
 /**
  * @desc BaseRegionRadioButton
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/8/7 11:12
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>BaseRegionRadioButton 城市群单选按钮组</h2>

    <h3></h3>

    <p>适用广泛的基础城市群单选按钮组</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <BaseRegionRadioButton v-model="value" :options-format="optionsFormat"></BaseRegionRadioButton>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>可以使用 <code>optionsFormat</code>，对组件进行扩充</p>
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
import BaseRegionRadioButton from '@/componentsbase/BaseRegionRadioButton'
import hljs from 'highlight.js'
export default {
  name: 'BaseRegionRadioButtonDom',
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
          type: '',
          optionalValue: '城市群code',
          defaultValue: ''
        },
        {
          parameter: 'optionsFormat',
          explain: '选项处理函数',
          type: 'Function（options, callback）',
          optionalValue: '',
          defaultValue: ''
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
        {
          method: 'setOptions',
          parameter: '',
          explain: '生成选项数据',
          returnValue: ''
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
  components: { BaseRegionRadioButton },
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
    <BaseRegionRadioButton v-model="value" :options-format="optionsFormat"></BaseRegionRadioButton>
  </template>
  import BaseRegionRadioButton from '@/componentsbase/BaseRegionRadioButton'
  export default {
    data() {
      return {
        value: ''
      }
    },
    components: { BaseRegionRadioButton },
    method: {
      optionsFormat (options, callback) {
        callback(([{code: 1, name: '扩展1'}]).concat(options))
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
    optionsFormat (options, callback) {
      callback(([{code: 1, name: '扩展1'}]).concat(options))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
