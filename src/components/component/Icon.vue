<!--公用组件：
 /**
  * @desc Icon
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

    <h2>Icon 图标</h2>

    <h3></h3>

    <p>系统中的通用图标和专用图标</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <ant-icon icon-class="UserOutlined" style="font-size: 16px;"></ant-icon>
        <i class="hq-icon-duo" style="vertical-align: bottom;"></i>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>通用图标使用 <a href="https://ant.design/components/icon-cn/">ant.design</a></p>
          <p>专用图标使用 <code>iconfont</code>，在 <code>\src\assets\iconfont\demo_index.html</code></p>
        </div>
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
// import
import hljs from 'highlight.js'
export default {
  name: 'IconDom',
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
    <template>
      <ant-icon icon-class="UserOutlined"></ant-icon>
      <i class="hq-icon-duo"></i>
    </template>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
