<!--公用组件：
 /**
  * @desc Area2
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
    <h2>area2 区域（基于 number）</h2>

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
  name: 'Area2',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'areaData',
          explain: '区域数据',
          defaultValue: store.state.area2.areaData
        },
        {
          propName: 'areaDataByCityType',
          explain: '按等级分类的区域数据',
          defaultValue: store.state.area2.areaDataByCityType
        },
        {
          propName: 'areaDataByParent',
          explain: '按父级分类的区域数据',
          defaultValue: store.state.area2.areaDataByParent
        },
        {
          propName: 'areaCodeToData',
          explain: '字典，区域 code 转为区域数据',
          defaultValue: store.state.area2.areaCodeToData
        },
        {
          propName: 'isGetAreaData',
          explain: '是否已获取省、市、县',
          defaultValue: store.state.area2.isGetAreaData
        },
        {
          propName: 'isGetStreetData',
          explain: '是否已获取街道',
          defaultValue: store.state.area2.isGetStreetData
        },
        {
          propName: 'onGetAreaData',
          explain: '是否正在获取省、市、县',
          defaultValue: store.state.area2.onGetAreaData
        },
        {
          propName: 'onGetStreetData',
          explain: '是否正在获取街道',
          defaultValue: store.state.area2.onGetStreetData
        },
        {
          propName: 'areaGlobal',
          explain: '全国区域',
          defaultValue: store.state.area2.areaGlobal
        },
        {
          propName: 'areaDefault',
          explain: '默认区域',
          defaultValue: store.state.area2.areaDefault
        },
        {
          propName: 'areaLevelArr',
          explain: '区域等级值数组',
          defaultValue: store.state.area2.areaLevelArr
        },
        {
          propName: 'areaLevelToChildrenAreaLevel',
          explain: '区域等级值转为子区域等级值',
          defaultValue: store.state.area2.areaLevelToChildrenAreaLevel
        },
        {
          propName: 'areaLevelToParentAreaLevel',
          explain: '区域等级值转为父区域等级值',
          defaultValue: store.state.area2.areaLevelToParentAreaLevel
        },
        {
          propName: 'areaLevelToProp',
          explain: '区域等级转为属性用',
          defaultValue: store.state.area2.areaLevelToProp
        },
        {
          propName: 'areaLevelToShow',
          explain: '区域等级转为显示用区域等级',
          defaultValue: store.state.area2.areaLevelToShow
        },
        {
          propName: 'areaLevelToShow2',
          explain: '区域等级转为显示用区域等级',
          defaultValue: store.state.area2.areaLevelToShow2
        },
        {
          propName: 'areaLevelToZoom',
          explain: '区域等级转为地图放大级别',
          defaultValue: store.state.area2.areaLevelToZoom
        },
        {
          propName: 'regionClassList',
          explain: '区域分类',
          defaultValue: store.state.area2.regionClassList
        }
      ],
      tableDefaultData: [
        // {
        //   propName: 'polluteRoseMoreArea2Area2Code',
        //   explain: '污染玫瑰 多区域分析 默认为区县的时候，雷达图默认的区县id数组',
        //   defaultValue: store.state.area.polluteRoseMoreArea2Area2Code
        // }
      ],
      tableData2ByProp: [
        {
          propName: 'areaNameByAreaDefault',
          explain: '获得默认区域的名称',
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
          propName: 'getAreaLevelByCode',
          explain: '通过区域 code 获得区域等级',
          param: 'areaCode 区域 code',
          returnValue: '区域等级'
        },
        {
          propName: 'getAreaNameByCode',
          explain: '通过区域 code 获得区域名称',
          param: `areaCode 区域 code`,
          returnValue: '区域名称'
        },
        {
          propName: 'getChildrenAreaLevelByCode',
          explain: '通过区域 code 获得区域分组等级（即向下一级或自己的等级）',
          param: 'areaCode 区域 code',
          returnValue: '区域等级'
        },
        {
          propName: 'getZoomByCode',
          explain: '通过区域 code 获得地图放大级别',
          param: 'areaCode 区域 code',
          returnValue: '地图放大级别'
        },
        {
          propName: 'getAreaLevelPropByCode',
          explain: '通过区域 code 获得用作属性区域等级',
          param: 'areaCode 区域 code',
          returnValue: '用作属性区域等级'
        },
        {
          propName: 'getAreaLevelPropByAreaLevel',
          explain: '通过区域 areaLevel 获得用作属性区域等级',
          param: 'areaLevel 区域等级',
          returnValue: '用作属性区域等级'
        },
        {
          propName: 'getAreaLevelNameByCode',
          explain: '通过区域 code 获得区域等级显示名称',
          param: 'areaCode 区域 code',
          returnValue: '区域等级显示名称'
        },
        {
          propName: 'getAreaLevelNameByAreaLevel',
          explain: '通过区域 areaLevel 获得区域等级显示名称',
          param: 'areaLevel 区域等级',
          returnValue: '区域等级显示名称'
        },
        {
          propName: 'getAreaLevelName2ByAreaLevel',
          explain: '通过区域 areaLevel 获得区域等级显示名称2',
          param: 'areaLevel 区域等级',
          returnValue: '区域等级显示名称2'
        },
        {
          propName: 'getParentCodeByCode',
          explain: '通过区域 code 获得父级区域 code',
          param: 'areaCode 区域 code',
          returnValue: '父级区域 code'
        },
        {
          propName: 'getParentNameByCode',
          explain: '通过区域 code 获得父级区域名称',
          param: 'areaCode 区域 code',
          returnValue: '父级区域名称'
        },
        {
          propName: 'getCodeArrByCode',
          explain: '通过区域 code 获得区域链数组',
          param: 'areaCode 区域 code',
          returnValue: '区域链数组'
        },
        {
          propName: 'getChildsByCode',
          explain: '通过区域 code 获得子级区域',
          param: 'areaCode 区域 code',
          returnValue: '子级区域'
        },
        {
          propName: 'getAreaDataByCityType',
          explain: '根据区域等级获取对应区域数据',
          param: 'areaLevel 区域等级',
          returnValue: '对应区域数据'
        }
      ],
      tableData3: [
        {
          propName: 'addAreaData',
          explain: '添加省、市、县数据',
          param: 'areaData 省、市、县数据'
        },
        {
          propName: 'addStreetData',
          explain: '添加街道数据',
          param: 'areaData 街道数据'
        },
        {
          propName: 'removeAreaData',
          explain: '移除省、市、县、街道数据',
          param: ''
        }
      ],
      tableData4: [
        {
          propName: 'getAreaData',
          explain: '获取省、市、县数据',
          param: 'callback 回调函数',
          returnValue: ''
        },
        {
          propName: 'getStreetData',
          explain: '获取街道数据',
          param: 'callback 回调函数',
          returnValue: ''
        }
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
