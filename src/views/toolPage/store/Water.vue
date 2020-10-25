<!--公用组件：
 /**
  * @desc Water
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:27
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>water 废水</h2>

    <h3></h3>

    <p>使用请在<a @click="setMenu('1_1')">vuex 工具的简单使用</a>查看</p>

    <h3>state</h3>

    <p>相当于 vue 的 data</p>

    <table>
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData1" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>getters</h3>

    <p>相当于 vue 的 computed</p>

    <table>
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2ByProp" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData2ByFunction" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>mutations</h3>

    <p>用于同步修改 vuex 的数据</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData3" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>actions</h3>

    <p>用于异步修改 vuex 的数据</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData4" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.param || '-'}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import
import store from '@/store'
export default {
  name: 'Water',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'lvlArr',
          explain: '水质指标等级数组',
          defaultValue: store.state.water.lvlArr
        },
        {
          propName: 'indicatorsArr',
          explain: '水质指标数组',
          defaultValue: store.state.water.indicatorsArr
        },
        {
          propName: 'indicatorsToShow',
          explain: '字典，水质指标转为名称',
          defaultValue: store.state.water.indicatorsToShow
        },
        {
          propName: 'indicatorsToUnit',
          explain: '字典，水质指标转为单位',
          defaultValue: store.state.water.indicatorsToUnit
        },
        {
          propName: 'levelToShow',
          explain: '字典，水质指标等级转为显示用等级（简写）',
          defaultValue: store.state.water.levelToShow
        },
        {
          propName: 'levelToShow2',
          explain: '字典，水质指标等级转为显示用等级',
          defaultValue: store.state.water.levelToShow2
        },
        {
          propName: 'levelToColors',
          explain: '字典，水质指标等级转为颜色',
          defaultValue: store.state.water.levelToColors
        },
        {
          propName: 'levelToFontColors',
          explain: '字典，水质指标等级转为字体颜色',
          defaultValue: store.state.water.levelToFontColors
        },
        {
          propName: 'indicatorsToLvlLine',
          explain: '字典，水质指标转为等级分界线数组',
          defaultValue: store.state.water.indicatorsToLvlLine
        },
        {
          propName: 'w01999ToLevel',
          explain: '字典，水质级别数值转为水质指标等级',
          defaultValue: store.state.water.w01999ToLevel
        },
        {
          propName: 'lvlJudgeReverseDict',
          explain: '字典，记录需要反向计算等级的指标',
          defaultValue: store.state.water.lvlJudgeReverseDict
        }
      ],
      tableData2ByProp: [
        // {
        //   propName: 'topMenu',
        //   explain: '一级菜单组',
        //   defaultValue: store.getters['safeguardPlan/topMenu']
        // }
      ],
      tableData2ByFunction: [
        {
          propName: 'getColorByLevel',
          explain: '通过 level 获取颜色',
          param: 'level',
          returnValue: '颜色'
        },
        {
          propName: 'getFontColorByLevel',
          explain: '通过 level 获取字体颜色',
          param: 'level',
          returnValue: '字体颜色'
        },
        {
          propName: 'getShowByLevel',
          explain: '通过 level 获取名称（简写）',
          param: 'level',
          returnValue: '名称（简写）'
        },
        {
          propName: 'getShow2ByLevel',
          explain: '通过 level 获取名称',
          param: 'level',
          returnValue: '名称'
        },
        {
          propName: 'getMaxLvlValueByIndicators',
          explain: '通过 indicators 获取当前指标最高等级分界线',
          param: 'indicators',
          returnValue: '当前指标最高等级分界线'
        },
        {
          propName: 'getLvlValueByIndicators',
          explain: '通过 indicators, lvl 获取当前指标当前等级分界线',
          param: '{indicators, lvl}',
          returnValue: '当前指标当前等级分界线'
        },
        {
          propName: 'getLvlArrByIndicators',
          explain: '通过 indicators 获取当前指标等级分界线数组',
          param: '{indicators}',
          returnValue: '当前指标等级分界线数组'
        },
        {
          propName: 'getLevelByNumber',
          explain: '通过 num, indicators 获取水质指标级别',
          param: '{num, indicators}',
          returnValue: '水质指标级别'
        },
        {
          propName: 'getShowByIndicators',
          explain: '通过 indicators 获取水质指标名称',
          param: 'indicators',
          returnValue: '水质指标名称'
        },
        {
          propName: 'getUnitByIndicators',
          explain: '通过 indicators 获取水质指标单位',
          param: 'indicators',
          returnValue: '水质指标单位'
        }
      ],
      tableData3: [
        // {
        //   propName: 'menuArrSave',
        //   explain: '保存菜单数组',
        //   param: '{arr}'
        // }
      ],
      tableData4: [
        // {
        //   propName: '',
        //   explain: '',
        //   param: '',
        //   returnValue: ''
        // }
      ]
    }
  },
  props: {
    setMenu: {
      type: Function
    }
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
