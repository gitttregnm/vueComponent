<!--公用组件：
 /**
  * @desc Pollution
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/9 16:55
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>pollution 污染物</h2>

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

    <table>
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableDefaData" :key="index">
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
  name: 'Pollution',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'arr',
          explain: '污染物数组',
          defaultValue: store.state.pollution.arr
        },
        {
          propName: 'arrForMap',
          explain: '地图使用的污染物数组',
          defaultValue: store.state.pollution.arrForMap
        },
        {
          propName: 'arrForPanel',
          explain: '地图弹窗使用的污染物数组',
          defaultValue: store.state.pollution.arrForPanel
        },
        {
          propName: 'pollToShow',
          explain: '字典，数据用污染物转为显示用污染物',
          defaultValue: store.state.pollution.pollToShow
        },
        {
          propName: 'pollToShowUseHtml',
          explain: '字典，数据用污染物转为显示用污染物（html 标签形式）',
          defaultValue: store.state.pollution.pollToShowUseHtml
        },
        {
          propName: 'pollToColor',
          explain: '字典，首要污染物转为颜色',
          defaultValue: store.state.pollution.pollToColor
        },
        {
          propName: 'pollToUnit',
          explain: '字典，污染物转为单位',
          defaultValue: store.state.pollution.pollToUnit
        },
        {
          propName: 'colorBar',
          explain: '应用于特殊表格的颜色列表',
          defaultValue: store.state.pollution.colorBar
        }
      ],
      tableDefaData: [
        {
          propName: 'defaultCheckListChangingTrendOneStation',
          explain: '变化趋势单站点默认指标',
          defaultValue: store.state.pollution.defaultCheckListChangingTrendOneStation
        },
        {
          propName: 'defaultCheckListChangingTrendOneCity',
          explain: '变化趋势单城市默认指标',
          defaultValue: store.state.pollution.defaultCheckListChangingTrendOneCity
        },
        {
          propName: 'defaultCheckLabelChangingTrendMoreStation',
          explain: '变化趋势多站点默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelChangingTrendMoreStation
        },
        {
          propName: 'defaultCheckLabelChangingTrendMoreCity',
          explain: '变化趋势多城市默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelChangingTrendMoreCity
        },
        {
          propName: 'defaultCheckListYearOnYearChangeOneStation',
          explain: '同比变化单站点默认指标',
          defaultValue: store.state.pollution.defaultCheckListYearOnYearChangeOneStation
        },
        {
          propName: 'defaultCheckListYearOnYearChangeOneCity',
          explain: '同比变化单城市默认指标',
          defaultValue: store.state.pollution.defaultCheckListYearOnYearChangeOneCity
        },
        {
          propName: 'defaultCheckLabelYearOnYearChangeMoreStation',
          explain: '同比变化多站点默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelYearOnYearChangeMoreStation
        },
        {
          propName: 'defaultCheckListYearOnYearChangeMoreCity',
          explain: '同比变化多城市默认指标',
          defaultValue: store.state.pollution.defaultCheckListYearOnYearChangeMoreCity
        },
        {
          propName: 'defaultCheckListShortChangeOneArea',
          explain: '短期变化单站点，单区域默认指标',
          defaultValue: store.state.pollution.defaultCheckListShortChangeOneArea
        },
        {
          propName: 'defaultCheckShortChangeMoreArea',
          explain: '短期变化单站点，多区域默认指标',
          defaultValue: store.state.pollution.defaultCheckShortChangeMoreArea
        },
        {
          propName: 'arrForShortChange',
          explain: '短期变化使用的污染数组 不包括aqi',
          defaultValue: store.state.pollution.arrForShortChange
        },
        {
          propName: 'defaultCheckLongChangePol',
          explain: '长期变化默认指标',
          defaultValue: store.state.pollution.defaultCheckLongChangePol
        },
        {
          propName: 'arrForLongChange',
          explain: '长期变化使用的污染数组 不包括aqi,o3',
          defaultValue: store.state.pollution.arrForLongChange
        },
        {
          propName: 'defaultCheckLabelYearOnYearChangeMoreCity',
          explain: '数据判断，同比变化，多区域分析里面的默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelYearOnYearChangeMoreCity
        },
        {
          propName: 'defaultCheckLabelPointContribution',
          explain: '点位贡献默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelPointContribution
        },
        {
          propName: 'defaultCheckLabelStationTransferAnalysis',
          explain: '传输分析-站点默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelStationTransferAnalysis
        },
        {
          propName: 'defaultCheckLabelCityTransferAnalysis',
          explain: '传输分析-城市默认指标',
          defaultValue: store.state.pollution.defaultCheckLabelCityTransferAnalysis
        },
        {
          propName: 'arrForPols',
          explain: '常规因子',
          defaultValue: store.state.pollution.arrForPols
        },
        {
          propName: 'arrForIndustry',
          explain: '清单部分污染因子数组',
          defaultValue: store.state.pollution.arrForIndustry
        },
        {
          propName: 'arrForSourceAnalysis',
          explain: '清单部分-分源分析污染因子',
          defaultValue: store.state.pollution.arrForSourceAnalysis
        },
        {
          propName: 'arrForRadar',
          explain: '使用的污染物数组 不包括 O3',
          defaultValue: store.state.pollution.arrForRadar
        },
        {
          propName: 'arrForAssociationAnalysis',
          explain: '关联分析中清单使用的污染物数组',
          defaultValue: store.state.pollution.arrForAssociationAnalysis
        },
        {
          propName: 'emissionAssessmentPols',
          explain: '措施监管-减排评估 表格显示因子',
          defaultValue: store.state.pollution.emissionAssessmentPols
        },
        {
          propName: 'emissionAssessmentPolName',
          explain: '措施监管-减排评估 表格显示因子名称',
          defaultValue: store.state.pollution.emissionAssessmentPolName
        },
        {
          propName: 'emissionCalculationpols',
          explain: '措施监管-减排测算 减排分析',
          defaultValue: store.state.pollution.emissionCalculationpols
        },
        {
          propName: 'emissionCalculationpolsCom',
          explain: '措施监管-减排测算 减排对比 污染物类型',
          defaultValue: store.state.pollution.emissionCalculationpolsCom
        },
        {
          propName: 'emissionCalculationpolName',
          explain: '措施监管-减排测算 减排对比 污染物名称',
          defaultValue: store.state.pollution.emissionCalculationpolName
        },
        {
          propName: 'emissionCalculationpolColor',
          explain: '措施监管-减排测算 减排对比 污染物颜色',
          defaultValue: store.state.pollution.emissionCalculationpolColor
        },
        {
          propName: 'polluteRoseOneStationPols',
          explain: '污染玫瑰单站点分析默认污染物',
          defaultValue: store.state.pollution.polluteRoseOneStationPols
        },
        {
          propName: 'polluteRoseOneStationSelect',
          explain: '污染玫瑰单站点分析默认污染物',
          defaultValue: store.state.pollution.polluteRoseOneStationSelect
        },
        {
          propName: 'polluteRoseMoreStationPols',
          explain: '污染玫瑰多站点分析默认污染物',
          defaultValue: store.state.pollution.polluteRoseMoreStationPols
        },
        {
          propName: 'polluteRoseMoreStationSelect',
          explain: '污染玫瑰多站点分析默认选中污染物',
          defaultValue: store.state.pollution.polluteRoseMoreStationSelect
        },
        {
          propName: 'polluteRoseOneAreaPols',
          explain: '污染玫瑰单区域分析默认污染物',
          defaultValue: store.state.pollution.polluteRoseOneAreaPols
        },
        {
          propName: 'polluteRoseOneAreaSelect',
          explain: '污染玫瑰单区域分析默认选中污染物',
          defaultValue: store.state.pollution.polluteRoseOneAreaSelect
        },
        {
          propName: 'polluteRoseMoreAreaPols',
          explain: '污染玫瑰多区域分析默认污染物',
          defaultValue: store.state.pollution.polluteRoseMoreAreaPols
        },
        {
          propName: 'polluteRoseMoreAreaSelect',
          explain: '污染玫瑰多区域分析默认选中污染物',
          defaultValue: store.state.pollution.polluteRoseMoreAreaSelect
        }
      ],
      tableData2ByProp: [
        // {
        //   propName: 'menuOptions',
        //   explain: '前期用于级联选择器的参数（现在没有使用的地方）',
        //   defaultValue: store.getters['menu/menuOptions']
        // }
      ],
      tableData2ByFunction: [
        {
          propName: 'getShowByPoll',
          explain: '通过 poll 获取显示用的污染物',
          param: 'poll',
          returnValue: '显示用的污染物'
        },
        {
          propName: 'getShowUseHtmlByPoll',
          explain: '通过 poll 获取显示用的污染物(html 标签形式)',
          param: 'poll',
          returnValue: '显示用的污染物(html 标签形式)'
        },
        {
          propName: 'getUnitByPoll',
          explain: '通过 poll 获取单位',
          param: 'poll',
          returnValue: '单位'
        },
        {
          propName: 'getColorBar',
          explain: '获取色bar',
          param: '',
          returnValue: '色bar'
        },
        {
          propName: 'getColorByPoll',
          explain: '通过首要污染物获取颜色',
          param: 'poll',
          returnValue: '颜色'
        }
      ],
      tableData3: [
        // {
        //   propName: 'menuArrSave',
        //   explain: '保存菜单数组',
        //   param: 'obj（{arr: menuArr}）'
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
