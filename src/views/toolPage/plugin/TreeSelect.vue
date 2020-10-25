<!--公用组件：
 /**
  * @desc TreeSelect
  * @module @/components
  * @desc 组件描述：
  * @author zkhq
  * @date 2020/7/20 9:00
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
  */
-->
<template>
  <section>

    <h2>TreeSelect 下拉树形选择器</h2>

    <h3></h3>

    <p>分模块，树形结构的下拉选择器</p>

    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <TreeSelect
          ref="treeSelect"
          :type-data="typeData"
          :tree-props="treeProps"
          :tree-data="treeData"
          :default-checked="defaultChecked"
          :default-checked-keys-by-type="defaultCheckedKeysByType"
          :is-single="isSingle"
          :is-interlinked="isInterlinked"
          @change="change"
        ></TreeSelect>
      </div>
      <div class="meta" style="height: auto">
        <div class="description">
          <p><code>is-interlinked</code>控制不同模块的选中数据是否关联。关联时，为防止数据丢失，最好设置叶子节点数据相同</p>
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
        <td><span>{{item.parameter}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.type || '-'}}</span></td>
        <td><span>{{item.optionalValue || '-'}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
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
        <td><span>{{item.event}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
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
        <td><span>{{item.method}}</span></td>
        <td><span>{{item.parameter || '-'}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.returnValue || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

  </section>
</template>

<script>
// import
import TreeSelect from '@/componentsTreeSelect'
import hljs from 'highlight.js'
export default {
  name: 'TreeSelectDom',
  mixins: [],
  data () {
    return {
      // 定义的每个data 属性必须有注释
      // 注释规则： //
      typeData: [
        {
          value: 'positive',
          label: '正序'
        },
        {
          value: 'negative',
          label: '逆序'
        }
      ],
      treeProps: {
        children: 'children',
        id: 'code',
        label: 'name',
        disabled: 'disabled'
      },
      isSingle: true,
      isInterlinked: true,
      defaultChecked: true,
      defaultCheckedKeysByType: {
        positive: [2]
      },
      treeData: {
        positive: [
          {
            code: 1,
            name: '类型1',
            // disabled: true,
            children: [
              {
                code: 3,
                name: '站点3'
              },
              {
                code: 4,
                name: '站点4'
              }
            ]
          },
          {
            code: 2,
            name: '站点2',
            // disabled: true,
            children: [
              {
                code: 5,
                name: '站点5'
              },
              {
                code: 6,
                name: '站点6'
              },
              {
                code: 7,
                name: '站点7'
              }
            ]
          }
        ],
        negative: [
          {
            code: 2,
            name: '站点2',
            // disabled: true,
            children: [
              {
                code: 7,
                name: '站点7'
              },
              {
                code: 6,
                name: '站点6'
              },
              {
                code: 5,
                name: '站点5'
              }
            ]
          },
          {
            code: 1,
            name: '类型1',
            // disabled: true,
            children: [
              {
                code: 4,
                name: '站点4'
              },
              {
                code: 3,
                name: '站点3'
              }
            ]
          }
        ]
      },
      tableData1: [
        {
          parameter: 'typeProps',
          explain: '树形控件模块数据属性控制',
          type: 'Object',
          optionalValue: '{value, label}',
          defaultValue: `{
            value: 'value',
            label: 'label'
          }`
        },
        {
          parameter: 'typeData',
          explain: '模块类型数据',
          type: 'Array',
          optionalValue: '[]',
          defaultValue: `[]`
        },
        {
          parameter: 'treeProps',
          explain: '树形控件树形部分属性控制',
          type: 'Object',
          optionalValue: '{id, label, children}',
          defaultValue: `{
            id: 'id',
            label: 'label',
            children: 'children'
          }`
        },
        {
          parameter: 'treeData',
          explain: '树形控件数据',
          type: 'Object',
          optionalValue: '{treeType: treeDataByType, treeType: treeDataByType, ...}',
          defaultValue: `{}`
        },
        {
          parameter: 'isInterlinked',
          explain: '不同模块的选中数据是否关联',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: `false`
        },
        {
          parameter: 'defaultChecked',
          explain: '是否有初始值',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: `false`
        },
        {
          parameter: 'defaultCheckedKeysByType',
          explain: '默认选中值',
          type: 'Object',
          optionalValue: '{treeType: arr, treeType: arr, ...}',
          defaultValue: `{}`
        },
        {
          parameter: 'isSingle',
          explain: '是否单选',
          type: 'Boolean',
          optionalValue: 'true | false',
          defaultValue: `false`
        }
      ],
      tableData2: [
        {
          event: 'change',
          explain: '选中值发生变化时',
          returnValue: '{type, data}'
        }
      ],
      tableData3: [
        {
          method: 'setSelectValue',
          parameter: 'keys（站点 code 数组）, defaultChecked 是否必选',
          explain: '设置选中值',
          returnValue: ''
        },
        {
          method: 'setType',
          parameter: 'type',
          explain: '设置选中模块',
          returnValue: ''
        },
        {
          method: 'getSelectValue',
          parameter: '',
          explain: '获取选中值',
          returnValue: 'selectData（数组形式，并包含完整数据信息）'
        },
        {
          method: 'getType',
          parameter: '',
          explain: '获取选中模块',
          returnValue: 'type（选中模块）'
        }
      ]
    }
  },
  props: {
    // id: {
    //   default: '',
    //   type: String
    // }
  },
  components: { TreeSelect },
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
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
        <TreeSelect
          ref="treeSelect"
          :type-data="typeData"
          :tree-props="treeProps"
          :tree-data="treeData"
          :default-checked="defaultChecked"
          :default-checked-keys-by-type="defaultCheckedKeysByType"
          :is-single="isSingle"
          :is-interlinked="isInterlinked"
          @change="change"
        ></TreeSelect>
    </template>
    import TreeSelect from '@/componentsTreeSelect'
    export default {
      data() {
        return {
          typeData: [
            {
              value: 'positive',
              label: '正序'
            },
            {
              value: 'negative',
              label: '逆序'
            }
          ],
          treeProps: {
            children: 'children',
            id: 'code',
            label: 'name',
            disabled: 'disabled'
          },
          isSingle: true,
          isInterlinked: true,
          defaultChecked: true,
          defaultCheckedKeysByType: {
            positive: [5]
          },
          treeData: {
            positive: [
              {
                code: 1,
                name: '类型1',
                // disabled: true,
                children: [
                  {
                    code: 3,
                    name: '站点3'
                  },
                  {
                    code: 4,
                    name: '站点4'
                  }
                ]
              },
              {
                code: 2,
                name: '站点2',
                // disabled: true,
                children: [
                  {
                    code: 5,
                    name: '站点5'
                  },
                  {
                    code: 6,
                    name: '站点6'
                  }
                ]
              }
            ],
            negative: [
              {
                code: 2,
                name: '站点2',
                // disabled: true,
                children: [
                  {
                    code: 6,
                    name: '站点6'
                  },
                  {
                    code: 5,
                    name: '站点5'
                  }
                ]
              },
              {
                code: 1,
                name: '类型1',
                // disabled: true,
                children: [
                  {
                    code: 4,
                    name: '站点4'
                  },
                  {
                    code: 3,
                    name: '站点3'
                  }
                ]
              }
            ]
          },
        }
      },
      components: { TreeSelect },
      method: {
        change ({type, data}) {
          console.log('type:', type)
          console.log('data:', data)
        }
      }
    }
    `).value
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
    /**
     * 组件发生变化时
     * @param selectData 选中数据
     */
    change ({type, data}) {
      console.log('type:', type)
      console.log('data:', data)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
