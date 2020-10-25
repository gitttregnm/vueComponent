<template>
  <div>
    <h2>hightCharts 组件的使用</h2>
    <h3>适用于图表的展示</h3>
    <p></p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <base-hight-charts :options="chartsConfig"></base-hight-charts>
      </div>
      <div class="meta" style="height: auto; clear: both;">
        <div class="description">
          <p>目前只接受简单的数据项配置，如果参数过多就失去了封装此组件的目的。所以如有复杂配置项，请使用官方组件使用方式
            &lt;'highcharts' :options="图表配置参数（可参照官网自行配置）"  'highcharts' &gt;
            。或者可动态根据需要对组件进行更改。</p>
        </div>
        <div class="highlight clear">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>
    <h3>图表参数的基本配置说明</h3>

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
        <td><span>{{ item.parameter }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.type || '-' }}</span></td>
        <td><span>{{ item.optionalValue || '-' }}</span></td>
        <td><span>{{ item.defaultValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>
    <h3>config ----> 下其他参数配置说明</h3>

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
      <tr v-for="(item, index) in tableData2" :key="index">
        <td><span>{{ item.parameter }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.type || '-' }}</span></td>
        <td><span>{{ item.optionalValue || '-' }}</span></td>
        <td><span>{{ item.defaultValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import hljs from 'highlight.js'
import BaseHightCharts from '@/componentsbase/BaseHightCharts'
import Highcharts from '@/pages/Main/Plugin/Highcharts'

export default {
  name: 'BaseHightChartsDesc',
  data () {
    return {
      chartsConfig: {
        type: 'spline',
        xAxis: {
          // type: 'datetime',
          title: {
            text: 'X轴线标题'
          },
          categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲']
        },
        tooltip: {
          shared: true,
          formatter () {
            return '{a}%'
          }
        },
        yAxis: [],
        series: [{
          name: '1800 年',
          data: [107, 31, 635, 203, 2]
        }, {
          name: '1900 年',
          data: [133, 156, 947, 408, 6]
        }, {
          name: '2008 年',
          data: [973, 914, 4054, 732, 34]
        }]
      },
      // 组件的使用说明文档
      tableData1: [
        {
          parameter: 'options',
          explain: 'hightcharts 的显示配置项',
          type: 'boolean',
          optionalValue: 'true or false',
          defaultValue: 'false'
        }
      ],
      tableData2: [
        {
          parameter: 'type',
          explain: '图表类型',
          type: 'string',
          optionalValue: 'bar,line,spline,column,pie,area,areaspline,combine,bubble,scatter',
          defaultValue: ''
        },
        {
          parameter: 'xAxis',
          explain: 'x轴显示的相关配置项',
          type: 'Object',
          optionalValue: '可按照官方文档自行配置',
          defaultValue: '只有label的相关样式配置'
        },
        {
          parameter: 'tooltip',
          explain: '鼠标移入图表时显示的内容信息',
          type: 'Object',
          optionalValue: '可按照官方文档自行配置',
          defaultValue: ''
        },
        {
          parameter: 'yAxis',
          explain: 'y轴显示的相关配置项',
          type: 'Object',
          optionalValue: '可按照官方文档自行配置',
          defaultValue: '只有label的相关样式配置'
        },
        {
          parameter: 'series',
          explain: '可填入相关的数据信息',
          type: 'Array',
          optionalValue: '可按照官方文档自行配置',
          defaultValue: ''
        }
      ]
    }
  },
  components: {Highcharts, BaseHightCharts},
  mounted () {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
        <base-hight-charts :options="chartsConfig"></base-hight-charts>
    </template>
    import BaseHightCharts from '@/componentsbase/BaseHightCharts'
    export default {
      data() {
        return {
           chartsConfig: {
              type: 'spline',
              xAxis: {
                type: 'datetime',
                title: {
                  text: 'X轴线标题'
                }
              },
              tooltip: {
                shared: true,
                formatter () {
                  return '{a}%'
                }
              },
              yAxis: [],
              series: [] // 图表数据
            }
        }
      },
      components: { BaseHightCharts }
    }
    `).value
  },
  methods: {
    getValue (value) {
      console.log(`获取到的值是 ${value}`)
      return value
    }
  }
}
</script>
