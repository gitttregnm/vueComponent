<!--公用组件：
 /**
  * @desc Vuex
  * @module @/components
  * @desc 组件描述：
  * @author Alfred
  * @date 2020/7/16 10:13
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
    <section>
      <h2> util/common 方法使用</h2>

      <h3></h3>

      <!--<p>更多请在<a href="https://vuex.vuejs.org/zh/" target="vuex">Vuex</a>官网查看</p>-->

      <h3>common 方法的使用</h3>
      <p>当要获取所有污染物时（即获取 pollution 的 arr ）</p>
      <pre>
        <code ref="code1" class="language-js hljs javascript">
          /**
          * 引入方法并使用
          */
          import {arrayToMap} form '@/util/common'
          let tempData = [
            {
              typeCode: '1',
              typeName: '测试1'
            },
            {
              typeCode: '2',
              typeName: '测试2'
            }
          ]
          let temp = arrayToMap(tempData)
          {
            1: "测试1"
            2: "测试2"
          }

          /**
          * 在 vue 组件中，可以使用 this.$common
          */
          let tempData = [
            {
              typeCode: '1',
              typeName: '测试1'
            },
            {
              typeCode: '2',
              typeName: '测试2'
            }
          ]
          let temp = this.$common.arrayToMap(tempData)
          {
            1: "测试1"
            2: "测试2"
          }
        </code>
      </pre>
    </section>
</template>

<script>
// import
import hljs from 'highlight.js'
export default {
  name: 'Vuex',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
    }
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
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
    hljs.highlightBlock(this.$refs.code1)
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
