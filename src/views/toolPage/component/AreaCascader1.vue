<!--公用组件：
 /**
  * @desc AreaCascader1
  * @module @/components
  * @desc 组件描述：城市级联选择器
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
    <h2>AreaCascader1 城市级联选择器</h2>

    <h3></h3>

    <p>适用广泛的基础城市级联选择器</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <AreaCascader1 v-model="value"></AreaCascader1>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>
            组件中使用了 actions <code>area2/getAreaData</code>，已在
            <code>layout</code> 中调用
          </p>
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
import AreaCascader1 from "@/componentsAreaCascader/AreaCascader";
import hljs from "highlight.js";
export default {
  name: "AreaCascader1Dom",
  mixins: [],
  data() {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      value: "",
      tableData1: [
        {
          parameter: "v-model/value",
          explain: "绑定值",
          type: "Array",
          optionalValue: "城市code",
          defaultValue: ""
        },
        {
          parameter: "maxLevel",
          explain:
            "级联级别，不是城市级别（值为 1 时，省级的直接区县子级也会显示）",
          type: "Number",
          optionalValue: "0-3",
          defaultValue: "2"
        },
        {
          parameter: "checkStrictly",
          explain: "是否严格的遵守父子节点不互相关联",
          type: "Boolean",
          optionalValue: "true | false",
          defaultValue: "true"
        },
        {
          parameter: "emitPath",
          explain:
            "在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值",
          type: "Boolean",
          optionalValue: "true | false",
          defaultValue: "true"
        },
        {
          parameter: "multiple",
          explain: "是否多选",
          type: "Boolean",
          optionalValue: "true | false",
          defaultValue: "true"
        },
        {
          parameter: "filterable",
          explain: "是否可搜索",
          type: "Boolean",
          optionalValue: "true | false",
          defaultValue: "true"
        },
        {
          parameter: "clearable",
          explain: "是否可清除",
          type: "Boolean",
          optionalValue: "true | false",
          defaultValue: "true"
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
        // {
        //   method: 'getNameByValue',
        //   parameter: 'value',
        //   explain: '获取 value（区县 code）对应的区县名称',
        //   returnValue: 'option（value 对应的区县名称） || \'-\''
        // }
      ]
    };
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { AreaCascader1 },
  // beforeRouteEnter (to, from, next) {
  // },
  // beforeRouteUpdate (to, from, next) {
  // },
  // beforeRouteLeave (to, from, next) {
  // },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
      <AreaCascader1 v-model="value"></AreaCascader1>
    </template>
    import AreaCascader1 from '@/componentsAreaCascader/AreaCascader'
    export default {
      data() {
        return {
          value: ''
        }
      },
      components: { AreaCascader1 }
    }
    `).value;
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {
    value(val) {
      console.log("value:", val);
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
