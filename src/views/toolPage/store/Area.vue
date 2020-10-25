<!--公用组件：
 /**
  * @desc Area
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:10
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>area 区域（还未接入数据）</h2>

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
      <tr v-for="(item, index) in tableDefaultData" :key="index">
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
  name: 'Area',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'arr',
          explain: '区域数据',
          defaultValue: store.state.area.arr
        },
        {
          propName: 'areaCodeToObj',
          explain: '字典，区域 code 转为区域数据',
          defaultValue: store.state.area.areaCodeToObj
        },
        {
          propName: 'areaDefault',
          explain: '默认区域',
          defaultValue: store.state.area.areaDefault
        },
        {
          propName: 'areaLevelArr',
          explain: '区域等级数组',
          defaultValue: store.state.area.areaLevelArr
        },
        {
          propName: 'areaLevelNumberToAreaLevel',
          explain: '区域等级值转为区域等级',
          defaultValue: store.state.area.areaLevelNumberToAreaLevel
        },
        {
          propName: 'areaLevelNumberToGroupAreaLevel',
          explain: '区域等级值转为子区域等级',
          defaultValue: store.state.area.areaLevelNumberToGroupAreaLevel
        },
        {
          propName: 'areaLevelToShow',
          explain: '区域等级转为显示用区域等级',
          defaultValue: store.state.area.areaLevelToShow
        },
        {
          propName: 'areaToZoom',
          explain: '区域等级转为地图放大级别',
          defaultValue: store.state.area.areaToZoom
        }
      ],
      tableDefaultData: [
        {
          propName: 'cityname',
          explain: '城市名称',
          defaultValue: store.state.area.cityname
        },
        {
          propName: 'citycode',
          explain: '城市代码',
          defaultValue: store.state.area.citycode
        },
        {
          propName: 'areaDataMap',
          explain: '秦皇岛区域编码对应关系',
          defaultValue: store.state.area.areaDataMap
        },
        {
          propName: 'areaDefaultRadar',
          explain: '雷达特征默认城市',
          defaultValue: store.state.area.areaDefaultRadar
        },
        {
          propName: 'countyDefaultRadar',
          explain: '雷达特征默认区域',
          defaultValue: store.state.area.countyDefaultRadar
        },
        {
          propName: 'countyDefault',
          explain: '区县默认海港区',
          defaultValue: store.state.area.countyDefault
        },
        {
          propName: 'defaultRegionChangingTrendOneCity',
          explain: '变化趋势-单区域分析，区县默认code',
          defaultValue: store.state.area.defaultRegionChangingTrendOneCity
        },
        {
          propName: 'defaultCityCodeChangingTrendMoreCity',
          explain: '变化趋势-多区域分析，城市默认code',
          defaultValue: store.state.area.defaultCityCodeChangingTrendMoreCity
        },
        {
          propName: 'defaultRegionChangingTrendMoreCity',
          explain: '变化趋势-多区域分析，区县默认code',
          defaultValue: store.state.area.defaultRegionChangingTrendMoreCity
        },
        {
          propName: 'defaultRegionYearOnYearChangeOneCity',
          explain: '同比变化-单区域分析，区县默认code',
          defaultValue: store.state.area.defaultRegionYearOnYearChangeOneCity
        },
        {
          propName: 'defaultRegionYearOnYearChangeMoreCity',
          explain: '同比变化-多区域分析，区县默认code',
          defaultValue: store.state.area.defaultRegionYearOnYearChangeMoreCity
        },
        {
          propName: 'defaultCityCodeYearOnYearChangeMoreCity',
          explain: '同比变化-多区域分析，城市默认code',
          defaultValue: store.state.area.defaultCityCodeYearOnYearChangeMoreCity
        },
        {
          propName: 'defaultShortChangeOneArea',
          explain: '短期变化-单站点，单区域区县默认code',
          defaultValue: store.state.area.defaultShortChangeOneArea
        },
        {
          propName: 'defaultCityCodeShortChangeMoreCity',
          explain: '短期变化-多站点，多区域默认code',
          defaultValue: store.state.area.defaultCityCodeShortChangeMoreCity
        },
        {
          propName: 'defaultRegionCodeShortChangeMoreCity',
          explain: '短期变化-多站点，多区域区县默认code',
          defaultValue: store.state.area.defaultRegionCodeShortChangeMoreCity
        },
        {
          propName: 'defaultLongChangeOneArea',
          explain: '长期变化 区县默认code',
          defaultValue: store.state.area.defaultLongChangeOneArea
        },
        {
          propName: 'defaultCityCodeCityTransferAnalysis',
          explain: '传输分析-城市，默认code',
          defaultValue: store.state.area.defaultCityCodeCityTransferAnalysis
        },
        {
          propName: 'cityCodeObjOptionIndustryAnalysis',
          explain: '排放清单-行业分析，写死的城市下拉框',
          defaultValue: store.state.area.cityCodeObjOptionIndustryAnalysis
        },
        {
          propName: 'cityCodeName',
          explain: '排放清单-行业分析、贡献分析，城市区县code对应的map中要加的城市关系',
          defaultValue: store.state.area.cityCodeName
        },
        {
          propName: 'filterCityName',
          explain: '排放清单-行业分析、贡献分析，要过滤掉的区县',
          defaultValue: store.state.area.filterCityName
        },
        {
          propName: 'emissionCalculationCitycode',
          explain: '措施管理-减排测算默认城市',
          defaultValue: store.state.area.emissionCalculationCitycode
        },
        {
          propName: 'areaInventoryArr',
          explain: '秦皇岛清单部分区域编码集合',
          defaultValue: store.state.area.areaInventoryArr
        },
        {
          propName: 'polluteRoseOneAreaCityCode',
          explain: '污染玫瑰 单区域分析 默认为城市的时候，选中的城市id',
          defaultValue: store.state.area.polluteRoseOneAreaCityCode
        },
        {
          propName: 'polluteRoseOneAreaAreaCode',
          explain: '污染玫瑰 单区域分析 默认为区县的时候，选中的区县id',
          defaultValue: store.state.area.polluteRoseOneAreaAreaCode
        },
        {
          propName: 'polluteRoseMoreAreaCityCode',
          explain: '污染玫瑰 多区域分析 默认为城市的时候，雷达图默认的城市id数组',
          defaultValue: store.state.area.polluteRoseMoreAreaCityCode
        },
        {
          propName: 'polluteRoseMoreAreaAreaCode',
          explain: '污染玫瑰 多区域分析 默认为区县的时候，雷达图默认的区县id数组',
          defaultValue: store.state.area.polluteRoseMoreAreaAreaCode
        }
      ],
      tableData2ByProp: [
        {
          propName: 'areaNameByAreaDefault',
          explain: '默认区域的名称',
          defaultValue: store.getters['area/areaNameByAreaDefault']
        },
        {
          propName: 'areaLevelByAreaDefault',
          explain: '获得默认区域的等级',
          defaultValue: store.getters['area/areaLevelByAreaDefault']
        }
      ],
      tableData2ByFunction: [
        {
          propName: 'getAreaLevelNumberByCode',
          explain: '通过区域 code 获得区域等级值',
          param: 'code',
          returnValue: '区域等级值'
        },
        {
          propName: 'getAreaNameByCode',
          explain: '通过区域 code 获得区域名称',
          param: `{areaCode, defaultName = '未知区域'}`,
          returnValue: '区域名称'
        },
        {
          propName: 'getAreaLevelByCode',
          explain: '通过区域 code 获得区域等级',
          param: 'code',
          returnValue: '区域等级'
        },
        {
          propName: 'getGroupAreaLevelByCode',
          explain: '通过区域 code 获得区域分组等级（即向下一级或自己的等级）',
          param: 'code',
          returnValue: '区域分组等级（即向下一级或自己的等级'
        },
        {
          propName: 'getZoomByCode',
          explain: '通过区域 code 获得地图放大级别',
          param: 'code',
          returnValue: '地图放大级别'
        },
        {
          propName: 'getLevelNameByCode',
          explain: '通过区域 code 获得区域等级显示名称',
          param: 'code',
          returnValue: '区域等级显示名称'
        },
        {
          propName: 'getParentCodeByCode',
          explain: '通过区域 code 获得父级区域 code',
          param: 'code',
          returnValue: '父级区域 code'
        },
        {
          propName: 'getParentNameByCode',
          explain: '通过区域 code 获得父级区域名称',
          param: 'code',
          returnValue: '父级区域名称'
        },
        {
          propName: 'getChildsByCode',
          explain: '通过区域 code 获得子级区域',
          param: 'code',
          returnValue: '子级区域'
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
