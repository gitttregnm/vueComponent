<!--公用组件：
 /**
  * @desc StationByTypes
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/16 17:23
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
    <section>

      <h2>StationByTypes 下拉树形选择器（空气站）</h2>

      <h3></h3>

      <p>分区域分类型的空气站选择器</p>

      <div class="demo-block demo-zh-CN demo-select">
        <div class="source">
          <StationByTypes :citycode="citycode" :station-type-array="stationTypeArray" :is-single="isSingle" @change="selectDataChange" :is-interlinked="isInterlinked"></StationByTypes>
        </div>
        <div class="meta" style="height: auto">
          <div class="description">
            <p><code>change</code>事件返回的是数组形式，并包含完整数据信息</p>
            <p>组件中使用了接口 <code>/dStation/findStationAreaTreeByCityCode</code> 和 <code>/dStation/findStationTypeTreeByCityCode</code>，需要在页面资源中添加</p>
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
import StationByTypes from '@/componentsbdp/StationByTypes'
import hljs from 'highlight.js'
export default {
  name: 'StationByTypesDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      citycode: this.$store.state.user.info.area,
      stationTypeArray: this.$store.state.station.arr,
      isSingle: false,
      isInterlinked: true,
      tableData1: [
        {
          parameter: 'defaultChecked',
          explain: '设置内容是否必选',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'false'
        },
        {
          parameter: 'citycode',
          explain: '城市 code 用以获取当前城市的站点信息',
          type: 'String | Number',
          optionalValue: this.$store.state.user.info.area,
          defaultValue: ''
        },
        {
          parameter: 'stationTypeArray',
          explain: '站点数据类型，选定需要或取得的类型的站点',
          type: 'String | Number',
          optionalValue: this.$store.state.station.arr,
          defaultValue: '[]'
        },
        {
          parameter: 'isSingle',
          explain: '是否单选',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'false'
        },
        {
          parameter: 'isInterlinked',
          explain: '不同模块的选中数据是否关联（关联状态下，切换类型时，选中数据不变）',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: 'false'
        },
        {
          parameter: 'dataSource',
          explain: 'queryStationAreaTreeByCityCode 和 queryStationTypeTreeByCityCode 的请求参数',
          type: '',
          optionalValue: '',
          defaultValue: '0'
        }
      ],
      tableData2: [
        {
          event: 'change',
          explain: 'StationByTypes 的 change 事件',
          returnValue: 'selectData（数组形式，并包含完整数据信息）'
        }
      ],
      tableData3: [
        {
          method: 'setSelectValue',
          parameter: 'keys（站点 code 数组）, defaultChecked 是否必选',
          explain: '设置选中值',
          returnValue: ''
        },
        {
          method: 'setType',
          parameter: 'type',
          explain: '设置选中模块',
          returnValue: ''
        },
        {
          method: 'getSelectValue',
          parameter: '',
          explain: '获取选中值',
          returnValue: 'selectData（数组形式，并包含完整数据信息）'
        },
        {
          method: 'getType',
          parameter: '',
          explain: '获取选中模块',
          returnValue: 'type（选中模块）'
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
  components: { StationByTypes },
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
      <StationByTypes :citycode="citycode" :station-type-array="stationTypeArray" :is-single="isSingle" @change="selectDataChange" :is-interlinked="isInterlinked"></StationByTypes>
    </template>
    import StationByTypes from '@/componentsbdp/StationByTypes'
    export default {
      data() {
        return {
          citycode: ${this.$store.state.user.info.area},
          stationTypeArray: [0, 1, 2, 3, 4, 5, 6],
          isSingle: true,
          isInterlinked: true,
        }
      },
      components: { StationByTypes },
      method: {
        selectDataChange (selectData) {
          console.log('selectData:', selectData)
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
     * 组件发生变化时
     * @param selectData 选中数据
     */
    selectDataChange (selectData) {
      console.log('selectData:', selectData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
