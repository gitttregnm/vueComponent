<!--公用组件：
 /**
  * @desc Menu
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/9 16:58
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>
    <h2>正则判断</h2>

    <h3>js通用方法</h3>

    <p>使用请在<a @click="setMenu('0_3')">公共方法使用</a>查看</p>

    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
        <th>备注</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData1" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Common',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      tableData1: [
        {
          propName: 'validLowerCase',
          explain: '验证小写字母'
        },
        {
          propName: 'validUpperCase',
          explain: '验证大写字母'
        },
        {
          propName: 'validAlphabets',
          explain: '验证是不是字符串'
        },
        {
          propName: 'isEmail',
          explain: '邮箱验证'
        },
        {
          propName: 'isMobile',
          explain: '手机号码'
        },
        {
          propName: 'isPhone',
          explain: '电话号码'
        },
        {
          propName: 'isURL',
          explain: 'URL地址'
        },
        {
          propName: 'validUsername',
          explain: '验证用户身份'
        },
        {
          propName: 'validURL',
          explain: '验证URl'
        },
        {
          propName: 'validateIP',
          explain: '是否合法IP地址'
        },
        {
          propName: 'validatePhoneTwo',
          explain: '验证是不是手机号码或者固定电话带填写错误警告'
        },
        {
          propName: 'validateIdNo',
          explain: '是否身份证号码带填写错误警告'
        },
        {
          propName: 'validatePhone',
          explain: '是否手机号码带填写错误警告'
        },
        {
          propName: 'validateTelephone',
          explain: '是否是固定电话带填写错误警告'
        }
      //  手机号码： isPhone吗isvalidPhone
        // 邮箱：validEmail， isEmail
      //  URL地址：isURL， validURL， isExternal
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
