<!--公用组件：
 /**
  * @desc Transfer
  * @module @/components
  * @desc 组件描述：穿梭框
  * @author zkhq
  * @date 2020/7/23 10:23
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>Transfer 穿梭框（可改变数据顺序）</h2>

    <h3></h3>

    <p>基于 element，添加上下按钮，用于修改数据顺序</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <Transfer v-model="value" :data="data" style="overflow: hidden;" @change="change"></Transfer>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p><code>value</code>为数组</p>
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
import Transfer from '@/componentsTransfer'
import hljs from 'highlight.js'
export default {
  name: 'TransferDom',
  mixins: [],
  data () {
    const generateData = () => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      data: generateData(),
      value: [1, 4],
      tableData1: [
        {
          parameter: 'v-model/value',
          explain: '绑定值',
          type: 'Array',
          optionalValue: 'code 数组',
          defaultValue: ''
        },
        {
          parameter: 'data',
          explain: 'Transfer 的数据源',
          type: 'array[{ key, label, disabled }]',
          optionalValue: '',
          defaultValue: '[ ]'
        },
        {
          parameter: 'props',
          explain: '数据源的字段别名',
          type: 'object{key, label, disabled}',
          optionalValue: '',
          defaultValue: ''
        }
      ],
      tableData2: [
        {
          event: 'change',
          explain: '右侧列表元素变化时触发',
          returnValue: '当前值、数据移动的方向（\'left\' / \'right\'）、发生移动的数据 key 数组'
        }
      ],
      tableData3: [
      ]
    }
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { Transfer },
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
        <Transfer v-model="value" :data="data"></Transfer>
    </template>
    import Transfer from '@/componentsTransfer'
    export default {
      data() {
        const generateData = () => {
          const data = []
          for (let i = 1; i <= 15; i++) {
            data.push({
              key: i,
              label: \`备选项 \${i}\`,
              disabled: i % 4 === 0
            })
          }
          return data
        }
        return {
          data: generateData(),
          value: [1, 4],
        }
      },
      components: { Transfer }
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
    change (...arr) {
      console.log('arr:', arr)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
