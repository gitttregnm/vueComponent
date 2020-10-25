<template>
  <div>
    <h2>树形菜单选择</h2>
    <h3>适用于树形菜单的下拉选择内容，可多选可单选</h3>
    <p></p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <BaseTree @getValue="getValue" :multiple="true" :treeData="treeData"></BaseTree>
      </div>
      <div class="meta" style="height: auto; clear: both;">
        <div class="highlight">
          <pre>
            <code ref="code" class="html hljs xml"></code>
          </pre>
        </div>
      </div>
    </div>
    <h3>树形菜单配置说明</h3>

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
    <h3>方法</h3>

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
      <tr v-for="(item, index) in tableData5" :key="index">
        <td><span>{{ item.method }}</span></td>
        <td><span>{{ item.parameter || '-' }}</span></td>
        <td><span>{{ item.explain }}</span></td>
        <td><span>{{ item.returnValue || '-' }}</span></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import hljs from 'highlight.js'
import BaseTree from '@/componentsbase/BaseTree'

export default {
  name: 'BaseFormDesc',
  data () {
    return {
      treeData: [{
        id: '一级tree',
        label: 'menu1',
        children: [{
          id: '二级tree1',
          label: 'menu2'
        }, {
          id: '二级tree2',
          label: 'menu3'
        }]
      }, {
        id: '一级tree1',
        label: 'menu4'
      }, {
        id: '一级tree2',
        label: 'menu5'
      }],
      // 组件的使用说明文档
      tableData1: [
        {
          parameter: 'multiple',
          explain: '是否可以多选',
          type: 'boolean',
          optionalValue: 'true or false',
          defaultValue: 'false'
        },
        {
          parameter: 'treeData',
          explain: '树形菜单的数据',
          type: 'array',
          optionalValue: '',
          defaultValue: 'null'
        }
      ],
      tableData5: [
        {
          method: 'getValue',
          parameter: '',
          explain: '获取选中的值',
          returnValue: ''
        }
      ]
    }
  },
  components: {BaseTree},
  mounted () {
    this.$refs.code.innerHTML = hljs.highlightAuto(`
    <template>
        <BaseTree @getValue="getValue" :multiple="true" :treeData="treeData"></BaseTree>
    </template>
    import BaseTree from '@/componentsbase/BaseTree'
    export default {
      data() {
        return {
            treeData: [{
              id: '一级tree',
              label: 'menu1',
              children: [{
                id: '二级tree1',
                label: 'menu2'
              }, {
                id: '二级tree2',
                label: 'menu3'
              }]
            }, {
              id: '一级tree1',
              label: 'menu4'
            }, {
              id: '一级tree2',
              label: 'menu5'
            }]
        }
      },
      components: { BaseTree },
      method: {
          getValue (value) {
            return value
          }
      }
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
