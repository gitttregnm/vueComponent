<!--公用组件：
 /**
  * @desc BaseImg
  * @module @/components
  * @desc 组件描述：图片标签
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

    <h2>BaseImg 图片标签</h2>

    <h3></h3>

    <p>图片加载失败时，加载默认图片方法</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <BaseImg :src="src" :image-show="BaseImg"></BaseImg>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>默认图片是 <code>imgError.png</code></p>
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
import BaseImg from '@/componentsbase/BaseImg'
import hljs from 'highlight.js'
export default {
  name: 'BaseImgDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      src: '',
      BaseImg: true,
      tableData1: [
        {
          parameter: 'src',
          explain: '传入的图片路径',
          type: 'String',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'imageShow',
          explain: '是否启用 BaseImageShow 组件',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: false
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
        // {
        //   method: 'getValue',
        //   parameter: '',
        //   explain: '获取选中值',
        //   returnValue: 'value（选定区县code） || ""'
        // },
        {
          method: 'showImage',
          parameter: '',
          explain: '使用 BaseImageShow 组件，展示图片',
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
  components: { BaseImg },
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
      <BaseImg :src="src" :image-show="BaseImg"></BaseImg>
    </template>
    import BaseImg from '@/componentsbase/BaseImg'
    export default {
      data() {
        return {
          src: '',
          BaseImg: true,
        }
      },
      components: { BaseImg }
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
  }
}
</script>

<style lang="scss" scoped>

</style>
