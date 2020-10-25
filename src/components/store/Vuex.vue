<!--公用组件：
 /**
  * @desc Vuex
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/10 9:08
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
    <section>
      <h2>vuex 工具的简单使用</h2>

      <h3></h3>

      <p>更多请在<a href="https://vuex.vuejs.org/zh/" target="vuex">Vuex</a>官网查看</p>

      <h3>state 的使用</h3>
      <p>当要获取所有污染物时（即获取 pollution 的 arr ）</p>
      <pre>
        <code ref="code1" class="language-js hljs javascript">
          /**
          * 引入 store 并使用
          */
          import store form '@/store'
          store.state.pollution.arr  // ['aqi', 'pm25', 'pm10', 'co', 'no2', 'so2', 'o3', 'o3_8h']

          /**
          * 在 vue 组件中，可以使用 this.$store
          */
          this.$store.state.pollution.arr  // ['aqi', 'pm25', 'pm10', 'co', 'no2', 'so2', 'o3', 'o3_8h']

          /**
          * 在 vue 组件中的 computed 中，可以使用 mapState 批量引入
          */
          import {mapState} from 'vuex'
          // 在 computed 引入
          computed: {
            ...mapState({
              arr: state => state.pollution.arr
            })
          },
          // 就像普通的 computed 使用
           this.arr                     // ['aqi', 'pm25', 'pm10', 'co', 'no2', 'so2', 'o3', 'o3_8h']
        </code>
      </pre>

      <h3>getters 的使用</h3>
      <p>当要获取方法 通过污染物获取显示用的污染物</p>
      <p>getter 相当于 computed，会返回计算属性</p>
      <p>pollution 的 pollArr 会返回属性（使用了一个 => 函数）</p>
      <p>pollution 的 getShowByPoll 就会返回方法（使用了两个 => 函数）</p>
      <pre>
        <code ref="code2" class="language-js hljs javascript">
          /**
          * 引入 store 并使用
          */
          import store form '@/store'
          store.getters['pollution/pollArr']  // ['pm25','pm10','so2','no2','co','o3']
          store.getters['pollution/getShowByPoll']('so2')  // SO₂

          /**
          * 在 vue 组件中，可以使用 this.$store
          */
          this.$store.getters['pollution/pollArr']  // ['pm25','pm10','so2','no2','co','o3']
          this.$store.getters['pollution/getShowByPoll']('so2')  // SO₂

          /**
          * 在 vue 组件中的 computed 中，可以使用 mapGetters 批量引入
          */
          import {mapGetters} from 'vuex'
          // 在 computed 引入
          computed: {
            ...mapGetters({
              pollArr: 'pollution/pollArr',
              getShowByPoll: 'pollution/getShowByPoll'
            })
          },
          // 就像普通的 computed 使用
          this.pollArr                // ['pm25','pm10','so2','no2','co','o3']
          this.getShowByPoll('so2')   // SO₂
        </code>
      </pre>

      <h3>mutations 的使用</h3>
      <p>当要获取方法 保存菜单 （即获取 menu 的 menuArrSave ）</p>
      <pre>
        <code ref="code3" class="language-js hljs javascript">
          /**
          * 引入 store 并使用
          */
          import store form '@/store'
          store.commit('menu/menuArrSave', {arr: menuArr})  // 保存了菜单数据

          /**
          * 在 vue 组件中，可以使用 this.$store
          */
          this.$store.commit('menu/menuArrSave', {arr: menuArr})  // 保存了菜单数据

          /**
          * 在 vue 组件中的 methods 中，可以使用 mapMutations 批量引入
          */
          import {mapGetters} from 'vuex'
          // 在 methods 引入
          methods: {
            ...mapMutations({
              menuArrSave: 'menu/menuArrSave'
            })
          },
          // 就像普通的 methods 使用
           this.menuArrSave({arr: menuArr})    // 保存了菜单数据
        </code>
      </pre>

      <h3>actions 的使用</h3>
      <p>当要获取方法 添加新菜单标签 （即获取 tagsView 的 addView ）</p>
      <pre>
        <code ref="code4" class="language-js hljs javascript">
          /**
          * 引入 store 并使用
          */
          import store form '@/store'
          store.dispatch('tagsView/addView', route)  // 添加了新菜单标签

          /**
          * 在 vue 组件中，可以使用 this.$store
          */
          this.$store.dispatch('tagsView/addView', route)  // 添加了新菜单标签

          /**
          * 在 vue 组件中的 methods 中，可以使用 mapActions 批量引入
          */
          import {mapActions} from 'vuex'
          // 在 methods 引入
          methods: {
            ...mapActions({
              addView: 'tagsView/addView'
            })
          },
          // 就像普通的 methods 使用
           this.addView(route)        // 添加了新菜单标签
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
    hljs.highlightBlock(this.$refs.code2)
    hljs.highlightBlock(this.$refs.code3)
    hljs.highlightBlock(this.$refs.code4)
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
