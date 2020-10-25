<!--公用组件：
 /**
  * @desc PaginatedTable
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/20 16:59
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>PaginatedTable 分页表格</h2>

    <h3>静态数据</h3>

    <p>使用 <code>static-data</code></p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <PaginatedTable :static-data="staticData">
          <el-table-column
            type="index"
          ></el-table-column>
          <el-table-column
            prop="k"
            label="K"
          ></el-table-column>
        </PaginatedTable>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>将静态数据放于<code>static-data</code></p>
        </div>
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>

    <h3>动态获取</h3>

    <p>使用 get-api-data 动态渲染每一页</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <PaginatedTable :is-api="isApi" :get-api-data="getApiData">
          <el-table-column
            type="index"
          ></el-table-column>
          <el-table-column
            prop="k"
            label="K"
          ></el-table-column>
        </PaginatedTable>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>通过<code>pageSize</code> 和 <code>pageNumber</code>决定数据，通过 <code>callback</code> 将数据传回</p>
        </div>
        <div class="highlight">
          <pre>
            <code ref="code2" class="html hljs xml"></code>
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
import PaginatedTable from '@/componentstable/PaginatedTable'
import hljs from 'highlight.js'
import {fnC} from '@/utils/common'
export default {
  name: 'PaginatedTableDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      // 季度
      staticData: Array.from(new Array(100), (v, i) => ({k: i})),
      isApi: true,
      tableData1: [
        {
          parameter: 'defaultSort',
          explain: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
          type: 'Object',
          optionalValue: 'order: ascending, descending',
          defaultValue: '如果只指定了prop, 没有指定order, 则默认顺序是ascending'
        },
        {
          parameter: 'height',
          explain: '设置table的行高',
          type: 'Number',
          optionalValue: '',
          defaultValue: '0'
        },
        {
          parameter: 'pageSize',
          explain: '每页的条数',
          type: 'Number',
          optionalValue: '',
          defaultValue: '5'
        },
        {
          parameter: 'pageSizeArr',
          explain: '可选的每页条数',
          type: 'Array',
          optionalValue: '',
          defaultValue: '[5, 10, 20, 30, 40]'
        },
        {
          parameter: 'currentPage',
          explain: '当前页数，从 1 开始，到最大页。小于 1 时，显示 1；大于最大值时，显示为最大值；',
          type: 'Number',
          optionalValue: '',
          defaultValue: '1'
        },
        {
          parameter: 'isApi',
          explain: '是否使用 api 分页接口',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'false'
        },
        {
          parameter: 'getApiData',
          explain: '获取 api 分页数据',
          type: 'Function({pageSize, pageNumber}, callback)',
          optionalValue: '',
          defaultValue: '({pageSize, pageNumber}, callback) => {\n' +
            '        fnC(callback)({\n' +
            '          total: 0,\n' +
            '          content: []\n' +
            '        })\n' +
            '      }'
        },
        {
          parameter: 'isinit',
          explain: '是否直接加载数据',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'true'
        },
        {
          parameter: 'staticData',
          explain: '静态数据',
          type: 'Array',
          optionalValue: '',
          defaultValue: '[]'
        },
        {
          parameter: 'pagerCount',
          explain: '设置最大页码按钮数，大于等于 5 且小于等于 21 的奇数',
          type: 'Number',
          optionalValue: '',
          defaultValue: '5'
        },
        {
          parameter: 'hideOnSinglePage',
          explain: '单页面时是否隐藏分页',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'true'
        },
        {
          parameter: 'tableAttr',
          explain: '表格属性.(el-table 的属性都可以添加)',
          type: 'Object',
          optionalValue: '',
          defaultValue: ''
        },
        {
          parameter: 'tableEvents',
          explain: '表格事件.(el-table 的事件都可以添加)',
          type: 'Object',
          optionalValue: '',
          defaultValue: ''
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
        {
          method: 'setPageSizes',
          parameter: 'pageSize 可选条数',
          explain: '添加新的的条数到可选条数数组中',
          returnValue: ''
        },
        {
          method: 'handleSizeChange',
          parameter: 'val 每页条数',
          explain: '改变每页条数',
          returnValue: ''
        },
        {
          method: 'handleCurrentChange',
          parameter: 'val 当前页数',
          explain: '改变当前页数',
          returnValue: ''
        },
        {
          method: 'refresh',
          parameter: '',
          explain: '刷新当前页',
          returnValue: ''
        },
        {
          method: 'getSelectData',
          parameter: '',
          explain: '获取当前页选中数据',
          returnValue: '当前页选中数据'
        },
        {
          method: 'getTableStates',
          parameter: '',
          explain: '获取表格状态',
          returnValue: '表格状态对象'
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
  components: { PaginatedTable },
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
    <PaginatedTable :static-data="staticData">
      <el-table-column
        type="index"
      ></el-table-column>
      <el-table-column
        prop="k"
        label="K"
      ></el-table-column>
    </PaginatedTable>
  </template>
  import PaginatedTable from '@/componentstable/PaginatedTable'
  export default {
    data() {
      return {
      staticData: Array.from(new Array(100), (v, i) => ({k: i}))
      }
    },
    components: { PaginatedTable }
  }
  `).value
    this.$refs.code2.innerHTML = hljs.highlightAuto(`
  <template>
    <PaginatedTable :is-api="isApi" :get-api-data="getApiData">
      <el-table-column
        type="index"
      ></el-table-column>
      <el-table-column
        prop="k"
        label="K"
      ></el-table-column>
    </PaginatedTable>
  </template>
  import PaginatedTable from '@/componentstable/PaginatedTable'
  export default {
    data() {
      return {
      isApi: true
      }
    },
    components: { PaginatedTable },
    methods: {
      getApiData ({pageSize, pageNumber}, callback) {
        fnC(callback)({
          total: 100,
          content: Array.from(new Array(pageSize), (v, i) => ({k: (pageNumber - 1) * pageSize + i}))
        })
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
    getApiData ({pageSize, pageNumber}, callback) {
      fnC(callback)({
        total: 100,
        content: Array.from(new Array(pageSize), (v, i) => ({k: (pageNumber - 1) * pageSize + i}))
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
