<!--公用组件：
 /**
  * @desc Pollution
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/9 17:02
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
    <section>
      <h2>Vuex 的简单使用<a href="https://vuex.vuejs.org/zh/">webpack</a></h2>
      <h3>state 的使用</h3>
      <p>当要获取所有污染物时（即获取 pollution 的 arr ）</p>
      <pre>
        <code ref="code" class="html hljs xml"></code>
      </pre>
    </section>
</template>

<script>
// import
import hljs from 'highlight.js'
export default {
  name: 'Pollution',
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
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <el-input></el-input>
    <el-button>qwe</el-button>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
