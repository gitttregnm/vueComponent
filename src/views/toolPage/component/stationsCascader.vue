<!--公用组件：
 /**
  * @desc BaseCounty
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/16 11:37
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title='title' :columns='columns' :tableData='tableData'></hbTable>
  */
-->
<template>
  <section>
    <h2>站点 选择器</h2>

    <h3></h3>

    <p>适用广泛的站点添加选择</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <stationsCascader
          ref="stationsCascader"
          v-model="value"
        ></stationsCascader>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>
            组件中使用 <code>v-model</code>, 还需要引入
            <code>DCity/queryCityTreeByParent</code>,
            <code>DStation/query</code>, <code>DCity/queryCityList</code>
          </p>
        </div>
        <div class="highlight">
          <pre>
            <code ref='code' class='html hljs xml'></code>
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
          <td>
            <span>{{ item.parameter }}</span>
          </td>
          <td>
            <span>{{ item.explain }}</span>
          </td>
          <td>
            <span>{{ item.type || "-" }}</span>
          </td>
          <td>
            <span>{{ item.optionalValue || "-" }}</span>
          </td>
          <td>
            <span>{{ item.defaultValue || "-" }}</span>
          </td>
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
          <td>
            <span>{{ item.event }}</span>
          </td>
          <td>
            <span>{{ item.explain }}</span>
          </td>
          <td>
            <span>{{ item.returnValue || "-" }}</span>
          </td>
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
          <td>
            <span>{{ item.method }}</span>
          </td>
          <td>
            <span>{{ item.parameter || "-" }}</span>
          </td>
          <td>
            <span>{{ item.explain }}</span>
          </td>
          <td>
            <span>{{ item.returnValue || "-" }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import
// import BaseCity from '@/componentsbase/BaseCity'
import stationsCascader from "@/componentsbase/stationsCascader";
import hljs from "highlight.js";
export default {
  name: "BaseCityDemo",
  components: {
    stationsCascader
  },
  mixins: [],
  data() {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      // 级联选择器value
      value: [["130000", "130300", "01537"]],
      tableData1: [
        {
          parameter: "value",
          explain: "双向绑定",
          type: "Array",
          optionalValue: "站点codeArr",
          defaultValue: "[]"
        },
        {
          parameter: "multip",
          explain: "是否可以多选",
          type: "boolean",
          optionalValue: "true || false",
          defaultValue: "true"
        }
      ],
      tableData2: [],
      tableData3: [
        {
          method: "setValue",
          parameter: [],
          explain: "站点所在数数组",
          returnValue: null
        }
      ]
    };
  },
  props: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$refs.stationsCascader.setValue(this.value).then(res => {
      console.log(res);
    });
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
     <stationsCascader v-model='value'></stationsCascader>
    </template>
    import stationsCascader from '@/componentsbase/stationsCascader'
    export default {
      data() {
        return {
          value: ''
        }
      },
      components: { stationsCascader },
      mounted () {
        this.$refs.stationsCascader.setValue(this.value).then(res => {
          console.log(res)
        })
      },
      watch: {
        value (newVal, oldVal) {
          console.log(newVal)
        }
      }
    }
    `).value;
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {
    value(newVal, oldVal) {
      console.log(newVal);
    }
  },
  computed: {},
  directives: {},
  filter: {},
  methods: {
    // 方法调用不需要注释，方法定义需要注释
    // 方法注释规则 /** */
  }
};
</script>

<style lang="scss" scoped></style>
