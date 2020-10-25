<!--公用组件：
 /**
  * @desc PolluteLevel
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/13 16:17
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>polluteLevel 污染物等级</h2>

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
  name: 'PolluteLevel',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'arr',
          explain: '污染等级数组',
          defaultValue: store.state.polluteLevel.arr
        },
        {
          propName: 'levelToShow',
          explain: '字典，污染等级转为显示用污染等级',
          defaultValue: store.state.polluteLevel.levelToShow
        },
        {
          propName: 'levelToSimpleShow',
          explain: '字典，污染等级转为显示用污染等级（极简）',
          defaultValue: store.state.polluteLevel.levelToSimpleShow
        },
        {
          propName: 'levelToSimpleShow2',
          explain: '字典，污染等级转为显示用污染等级（简写）',
          defaultValue: store.state.polluteLevel.levelToSimpleShow2
        },
        {
          propName: 'levelToColors',
          explain: '字典，污染等级转为颜色',
          defaultValue: store.state.polluteLevel.levelToColors
        },
        {
          propName: 'levelGradientColors',
          explain: '字典，污染等级转为渐变颜色',
          defaultValue: store.state.polluteLevel.levelGradientColors
        },
        {
          propName: 'levelGradientColors',
          explain: '字典，污染等级转为字体颜色',
          defaultValue: store.state.polluteLevel.levelGradientColors
        },
        {
          propName: 'pollToLvlLine',
          explain: '字典，污染物转为等级分界线数组（小时）',
          defaultValue: store.state.polluteLevel.pollToLvlLine
        },
        {
          propName: 'pollToLvlLineByDay',
          explain: '字典，污染物转为等级分界线数组（日均）',
          defaultValue: store.state.polluteLevel.pollToLvlLineByDay
        },
        {
          propName: 'popupCardToLvlByLevel',
          explain: '字典，污染等级转为弹窗不同色卡值显示',
          defaultValue: store.state.polluteLevel.popupCardToLvlByLevel
        }
      ],
      tableData2ByProp: [
        // {
        //   propName: 'areaNameByAreaDefault',
        //   explain: '默认区域的名称',
        //   defaultValue: store.getters['area/areaNameByAreaDefault']
        // }
      ],
      tableData2ByFunction: [
        {
          propName: 'getPopupCardToLvlByLevel',
          explain: '通过 level 获取弹窗不同色卡值显示',
          param: 'level',
          returnValue: '弹窗不同色卡值显示'
        },
        {
          propName: 'getGradientColorByLevel',
          explain: '通过 level 获取渐变颜色',
          param: 'level',
          returnValue: '渐变颜色'
        },
        {
          propName: 'getColorByLevel',
          explain: '通过 level 获取污染颜色',
          param: 'level',
          returnValue: '污染颜色'
        },
        {
          propName: 'getFontColorByLevel',
          explain: '通过 level 获取污染颜色对应的字体颜色',
          param: 'level',
          returnValue: '污染颜色对应的字体颜色'
        },
        {
          propName: 'getShowByLevel',
          explain: '通过 level 获取显示用污染等级',
          param: 'level',
          returnValue: '显示用污染等级'
        },
        {
          propName: 'getSimpleShowByLevel',
          explain: '通过 level 获取显示用污染等级（极简）',
          param: 'level',
          returnValue: '显示用污染等级（极简）'
        },
        {
          propName: 'getSimpleShowByLevel2',
          explain: '通过 level 获取显示用污染等级（简写）',
          param: 'level',
          returnValue: '显示用污染等级（简写）'
        },
        {
          propName: 'getMaxValueByPoll',
          explain: '通过 poll 获取污染等级分界线最高值（小时）',
          param: 'poll',
          returnValue: '污染等级分界线最高值（小时）'
        },
        {
          propName: 'getLvlValueByPoll',
          explain: '通过 poll 和 lvl 获取对应等级的分界线数值（小时）',
          param: '{poll, lvl}',
          returnValue: '对应等级的分界线数值（小时）'
        },
        {
          propName: 'getLvlValueByPollByDay',
          explain: '通过 poll 和 lvl 获取对应等级的分界线数值（日均）',
          param: '{poll, lvl}',
          returnValue: '对应等级的分界线数值（日均）'
        },
        {
          propName: 'getArrByPoll',
          explain: '通过 poll 获取分界线数组（小时）',
          param: '{poll}',
          returnValue: '分界线数组（小时）'
        },
        {
          propName: 'getArrByPollByDay',
          explain: '通过 poll 获取分界线数组（日均）',
          param: '{poll}',
          returnValue: '分界线数组（日均）'
        },
        {
          propName: 'getLevelByNumber',
          explain: '通过 poll 和 num 获取污染级别（小时）',
          param: '{num, poll}',
          returnValue: '污染级别（小时）'
        },
        {
          propName: 'getLevelByNumberByDay',
          explain: '通过 poll 和 num 获取污染级别（日均）',
          param: '{num, poll}',
          returnValue: '污染级别（日均）'
        },
        {
          propName: 'getIaqiByPoll',
          explain: '通过 poll 和 num 获取 iapi（小时）',
          param: '{num, poll}',
          returnValue: 'iapi（小时）'
        },
        {
          propName: 'getIaqiByPollByDay',
          explain: '通过 poll 和 num 获取 iapi（日均）',
          param: '{num, poll}',
          returnValue: 'iapi（日均）'
        },
        {
          propName: 'getAqiByPoll',
          explain: '通过 poll 和 num 获取 aqi（小时）',
          param: '{so2, no2, co, pm10, pm25, o3, o3_8h}',
          returnValue: 'aqi（小时）'
        },
        {
          propName: 'getAqiByPollByDay',
          explain: '通过 poll 和 num 获取 aqi（日均）',
          param: '{so2, no2, co, pm10, pm25, o3, o3_8h}',
          returnValue: 'aqi（日均）'
        }
      ],
      tableData3: [
        // {
        //   propName: 'imageShow',
        //   explain: '设置图片途径（同时也调整了图片查看工具的显隐状态）',
        //   param: 'obj（{src: src}）'
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
