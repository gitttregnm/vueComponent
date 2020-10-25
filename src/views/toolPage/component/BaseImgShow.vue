<!--公用组件：
 /**
  * @desc BaseImgShow
  * @module @/components
  * @desc 组件描述：图片展示
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
    <h2>BaseImgShow 图片展示</h2>

    <h3></h3>

    <p>图片展示界面</p>

    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div>
          <div class="block">
            <div class="demonstration">使用当前 BaseImgShow</div>
            <el-button @click="showCurrent">当前</el-button>
            <BaseImgShow :src="src"></BaseImgShow>
          </div>
          <div class="block">
            <div class="demonstration">使用系统默认 BaseImgShow</div>
            <el-button @click="showSystem">默认</el-button>
          </div>
        </div>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p>
            系统有默认加载的组件，使用
            <code>store.commit('imageShow/imageShow', {src})</code> 调用
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
import BaseImgShow from "@/componentsbase/BaseImgShow";
import hljs from "highlight.js";
export default {
  name: "BaseImgShowDom",
  mixins: [],
  data() {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      src: "",
      BaseImgShow: true,
      tableData1: [
        {
          parameter: "src",
          explain: "传入的图片路径",
          type: "String",
          optionalValue: "",
          defaultValue: ""
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
        {
          method: "closeImg",
          parameter: "",
          explain: "关闭图片展示",
          returnValue: ""
        }
      ]
    };
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { BaseImgShow },
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
      <div class="block">
        <div class="demonstration">使用当前 BaseImgShow</div>
        <el-button @click="showCurrent">当前</el-button>
        <BaseImgShow :src="src"></BaseImgShow>
      </div>
      <div class="block">
        <div class="demonstration">使用系统默认 BaseImgShow</div>
        <el-button @click="showSystem">默认</el-button>
      </div>
    </template>
    import BaseImgShow from '@/componentsbase/BaseImgShow'
    import banner01 from '@/assets/images/banner01.png'
    export default {
      data() {
        return {
          src: '',
        }
      },
      components: { BaseImgShow },
      methods: {
        showCurrent () {
          this.src = banner01
        },
        showSystem () {
          this.$store.commit('imageShow/imageShow', {src: banner01})
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
    showCurrent() {
      // this.src = banner01;
    },
    showSystem() {
      // this.$store.commit("imageShow/imageShow", { src: banner01 });
    }
  }
};
</script>

<style lang="scss" scoped></style>
