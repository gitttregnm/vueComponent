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

    <h2>BaseCity 城市选择器</h2>

    <h3></h3>

    <p>适用广泛的基础城市选择</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <BaseCity :dafaultValue='cityDefaultVal' muilt @change='handleChange'></BaseCity>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>组件中无法使用 <code>v-model</code>，所以需要在 <code>value-change</code> 事件中将返回值取至 <code>value</code></p>
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
import BaseCity from '@/componentsbase/BaseCity'
import hljs from 'highlight.js'
export default {
  name: 'BaseCityDemo',
  components: {
    BaseCity
  },
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      cityDefaultVal: ['130700'],
      tableData1: [
        {
          parameter: 'dafaultValue',
          explain: '绑定值，只能单向改变组件',
          type: 'Array',
          optionalValue: '城市code',
          defaultValue: '[]'
        },
        {
          parameter: 'muilt',
          explain: '是否可以多选',
          type: 'Boolean',
          optionalValue: '-',
          defaultValue: 'false'
        }
      ],
      tableData2: [
        {
          event: 'change',
          explain: 'select 的 change 事件',
          returnValue: 'value（选中城市的code）'
        }
      ]
    }
  },
  props: {
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
      <BaseCity :dafaultValue='cityDefaultVal' muilt @change='handleChange'></BaseCity>
    </template>
    import BaseCity from '@/componentsbase/BaseCity'
    export default {
      data() {
        return {
          value: ''
        }
      },
      components: { BaseCity },
      method: {
        handleChange (value) {
          // 保存 cityDefaultVal 值
          this.cityDefaultVal = value
          console.log('cityDefaultVal:', this.cityDefaultVal)
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
    handleChange (value) {
      // 保存 cityDefaultVal 值
      this.cityDefaultVal = value
      console.log('cityDefaultVal:', this.cityDefaultVal)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
