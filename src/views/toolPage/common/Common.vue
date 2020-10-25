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
    <h2>common 方法</h2>

    <h3>js通用方法</h3>

    <p>使用请在<a @click="setMenu('0_1')">公共方法使用</a>查看</p>

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
      <tr v-for="(item, index) in tableData2" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>关于dom和window的方法</h3>

    <p>使用请在<a @click="setMenu('0_1')">公共方法使用</a>查看</p>

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
      <tr v-for="(item, index) in tableData5" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>关于时间的方法</h3>

    <p>使用请在<a @click="setMenu('0_1')">公共方法使用</a>查看</p>

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
      <tr v-for="(item, index) in tableData3" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>关于污染物的方法</h3>

    <p>使用请在<a @click="setMenu('0_1')">公共方法使用</a>查看</p>

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
      <tr v-for="(item, index) in tableData4" :key="index">
        <td><span>{{item.propName}}</span></td>
        <td><span>{{item.explain}}</span></td>
        <td><span>{{item.defaultValue || '-'}}</span></td>
        <td><span>{{item.defaultNotes || '-'}}</span></td>
      </tr>
      </tbody>
    </table>

    <h3>其他</h3>

    <p>使用请在<a @click="setMenu('0_1')">公共方法使用</a>查看</p>

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
          propName: 'setLoginInfo',
          explain: '保存登录信息',
          defaultValue: 'token, UUID, currentMenu',
          defaultNotes: ''
        },
        {
          propName: 'getLoginInfo',
          explain: '获取登录信息',
          defaultValue: '',
          defaultNotes: '{}'
        },
        {
          propName: 'clearLoginInfo',
          explain: '清除登录状态',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'urlPushToMain',
          explain: '进入主页',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'getUUID',
          explain: '返回uuid',
          defaultValue: '',
          defaultNotes: '返回值：UUID'
        },
        {
          propName: 'getRootPath',
          explain: '获取项目根路径',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'urlPush',
          explain: '跳转页面 ，通过路径',
          defaultValue: 'url',
          defaultNotes: 'url 路径'
        },
        {
          propName: 'onModuleByUrl',
          explain: '判断路径是否在当前模块(开发模式不分模块)',
          defaultValue: 'url',
          defaultNotes: 'url 路径, 返回值：boolean'
        },
        {
          propName: 'getPathnameByUrl',
          explain: '根据router路径获取对应的 pathname',
          defaultValue: 'url',
          defaultNotes: 'url 路径'
        },
        {
          propName: 'urlPushById',
          explain: '跳转页面 ，通过菜单 id',
          defaultValue: 'id',
          defaultNotes: 'id: 菜单id'
        },
        {
          propName: 'urlPushById',
          explain: '跳转页面 ，通过routeName',
          defaultValue: 'routeName',
          defaultNotes: ''
        },
        {
          propName: 'getMenuId',
          explain: '根据当前路径获取菜单 id',
          defaultValue: 'route',
          defaultNotes: 'route：当前路径'
        },
        {
          propName: 'getMenuTopId',
          explain: '根据当前菜单 id 获得 top 的 id',
          defaultValue: 'id',
          defaultNotes: '当前菜单id'
        },
        {
          propName: 'isApi',
          explain: '判断是否是 api 接口函数',
          defaultValue: 'api',
          defaultNotes: 'api api接口函数, 返回值：{ boolean } 是否是 api 接口函数'
        },
        {
          propName: 'colorToRgba',
          explain: '16进制颜色转为 rgba',
          defaultValue: 'c, a',
          defaultNotes: 'c：16进制颜色, a：透明度'
        },
        {
          propName: 'getLinearRegression',
          explain: '根据XY数据获取一元回归方程，相关系数，回归线',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'bMapTransGGMap',
          explain: '百度坐标转高德（传入经度、纬度）',
          defaultValue: 'bdLng, bdLat',
          defaultNotes: 'bdLng：百度经度、bdLat： 百度纬度'
        },
        {
          propName: 'ggMapTransBMap',
          explain: '高德坐标转百度（传入经度、纬度）',
          defaultValue: 'ggLng, ggLat',
          defaultNotes: 'ggLng：高德经度、ggLat： 高德纬度'
        },
        {
          propName: 'lightenColor',
          explain: 'rgb颜色颜色加深或变浅',
          defaultValue: 'color, num',
          defaultNotes: 'color：rgb颜色的字符串、num： 颜色加值（num可为负数）'
        }
      ],
      tableData2: [
        {
          propName: 'isArray',
          explain: '判断是否为数组',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'average',
          explain: '数组求平均值',
          defaultValue: 'nums',
          defaultNotes: 'nums 数字数组'
        },
        {
          propName: 'getArrayIndex',
          explain: '查询元素在数组中的索引',
          defaultValue: 'array: Array, val: 目标元素',
          defaultNotes: '返回值小于0, 表示在此数组中不存在'
        },
        {
          propName: 'removeItem',
          explain: '删除数组中的指定元素',
          defaultValue: 'array: Array, val: 目标元素',
          defaultNotes: ''
        },
        {
          propName: 'arrayRemoveItem',
          explain: '筛选数组，去除指定元素',
          defaultValue: 'arr, value',
          defaultNotes: 'arr: 需要筛选的数组，value：要删除的数据'
        },
        {
          propName: 'isObject',
          explain: '判断是否为对象',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'deepCopy',
          explain: ' 对象的复制',
          defaultValue: 'obj 对象',
          defaultNotes: ''
        },
        {
          propName: 'constantize',
          explain: ' 彻底冻结对象',
          defaultValue: 'obj 对象',
          defaultNotes: ''
        },
        {
          // 向一个对象里面增加多级的键值
          // objSet(20,{},'b','c') => { b: { c: 20 } }
          propName: 'objSet',
          explain: '多级对象设置',
          defaultValue: 'val, obj, ...arr',
          defaultNotes: 'val：赋值的值，obj：目标对象，（"b", "c", "d",）多级的键值'
        },
        {
          propName: 'objC',
          explain: '对象取值安全方法',
          defaultValue: 'obj, ...arr',
          defaultNotes: 'obj：目标对象，（"b", "c", "d"）多级的键值，如果不存在的话那么会返回一个空字符串'
        },
        {
          propName: 'deepClone',
          explain: '深拷贝对象',
          defaultValue: 'obj',
          defaultNotes: ''
        },
        {
          propName: 'groupBy',
          explain: '数据分组',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'extend',
          explain: '合并两json对象',
          defaultValue: '{des:{}, src: []|{} , override: boolean} ',
          defaultNotes: 'des：要接收的jsonObj, src：提供的json,类型Obj|Arr, override：是否覆盖'
        },
        {
          propName: 'jsonSort',
          explain: 'jsonArray根据单个字段排序',
          defaultValue: 'array: Array, field：String, reverse: boolean',
          defaultNotes: 'array：要排序的数组， field：需要排序的字段，reverse：正序(true) | 倒序(false)'
        },
        {
          propName: 'sortObjectArray',
          explain: 'jsonArray根据多个字段排序',
          defaultValue: 'objArr: Array, keyArr: Array, type: "asc | desc"',
          defaultNotes: 'objArr：要排序的数组， keyArr：需要排序的字段数组，type：正序(asc) | 倒序(desc)'
        },
        {
          propName: 'getDictionName',
          explain: '查看字典编码在字典集里面对应的名称',
          defaultValue: 'typeCode:String | Number, typeArray:Array',
          defaultNotes: 'typeCode：字典编码，typeArray：字母集'
        },
        {
          propName: 'arrayToMap',
          explain: '字典数据转为MAP',
          defaultValue: 'typeArray: Array',
          defaultNotes: ''
        },
        {
          propName: 'getLength',
          explain: 'map长度',
          defaultValue: 'obj',
          defaultNotes: ''
        },
        {
          propName: 'numberLength',
          explain: '数字长度',
          defaultValue: 'num',
          defaultNotes: 'num：传入数字，返回值：传入数字的长度'
        },
        {
          propName: 'notUndefined',
          explain: ' 将 undefined 和 null 改为 ""',
          defaultValue: 'str',
          defaultNotes: '如果str是 undefined || null 返回 ""(空字符串)'
        },
        {
          propName: 'not999',
          explain: ' 将 undefined 和 null 和 -999 改为 ""',
          defaultValue: 'str',
          defaultNotes: '如果str是 undefined || null || -999 || "-999" 返回 ""(空字符串)'
        },
        {
          propName: 'is32Bit',
          explain: ' 一个字符是否是 4 个字节 0x 表示 16 位 0o 表示 8 位 0b 表示两位',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'fnC',
          explain: '保证函数执行',
          defaultValue: 'fn',
          defaultNotes: '传入值，判断是不是一个function，是返回function，不是返回一个箭头函数'
        },
        {
          propName: 'percentage',
          explain: '小数转化为百分比字符串',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'evenRound',
          explain: '四舍六入五成双',
          defaultValue: 'num, decimalPlaces',
          defaultNotes: 'num：数值, decimalPlaces：保留几位小数'
        },
        {
          propName: 'getSpecialData',
          explain: '计算特定百分位',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'fixedNumArea',
          explain: '有范围的保留小数（有范围是为了尽量不输出 0 ）',
          defaultValue: 'num, max, min',
          defaultNotes: 'num 浮点数, max 保留最多位数, min 保留最少位数'
        },
        {
          propName: 'fixedNum',
          explain: '保留n位小数',
          defaultValue: 'num, n = 2, isStr',
          defaultNotes: 'num 浮点数, n 保留位数(n默认值为2), isStr 是否输出字符串'
        },
        {
          propName: 'checkPhone',
          explain: 'element form表单验证手机号',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'checkEmail',
          explain: 'element form表单验证邮箱',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'checkNumber',
          explain: 'element form表单验证数字',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'analyzePasswordSecurityLevel',
          explain: '判断密码等级',
          defaultValue: 'password',
          defaultNotes: 'password 密码, 返回值：{number} 0-4'
        },
        {
          propName: 'containSpecialChar',
          explain: '判断是否含有特殊字符',
          defaultValue: 'str',
          defaultNotes: 'str 字符串, 返回值：{boolean}'
        }
      ],
      tableData3: [
        {
          propName: 'isValidDate',
          explain: '判断是否为正确日期对象，而不是 Invalid Date',
          defaultValue: 'date',
          defaultNotes: 'date: 日期对象, 返回值：{boolean}是否为正确日期对象'
        },
        {
          propName: 'isSameDate',
          explain: '判断两个日期对象是否相同（对比年月日时分秒）',
          defaultValue: 'd1, d2',
          defaultNotes: 'd1 日期对象1, d2 日期对象2, 返回值：{boolean}两个日期对象是否相同'
        },
        {
          propName: 'utcTimeFormat',
          explain: 'UTC时间转为格式化日期 主要针对influx取出数据转换',
          defaultValue: 'date: time, fmt: "yyyy-MM-dd 00:00:00"',
          defaultNotes: 'date：UTC时间， fmt：格式'
        },
        {
          propName: 'stringToDate',
          explain: '字符串转时间',
          defaultValue: 'str格式yyyy-MM-dd HH:mm:ss',
          defaultNotes: '返回一个new Date() 标准时间'
        },
        {
          propName: 'dateAdd',
          explain: '计算时间跨区（时区）',
          defaultValue: 'time: time, interval: "y|m|w|d|h|n", number: Number',
          defaultNotes: 'time 时间, interval 计算跨度, number 计算量， 返回值：time'
        },
        {
          propName: 'setYear',
          explain: '计划时间年',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'setMonth',
          explain: '计划时间月',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'setWeek',
          explain: '计划时间周',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'setDay',
          explain: '计划时间天',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'setHour',
          explain: '计划时间小时',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'setMinutes',
          explain: '计划时间分钟',
          defaultValue: 'time: time, number: Number',
          defaultNotes: '返回值：time 时间'
        },
        {
          propName: 'getCurrentMonthFirst',
          explain: '获取指定日期月的第一天',
          defaultValue: 'date: time',
          defaultNotes: ''
        },
        {
          propName: 'getCurrentMonthLast',
          explain: '获取指定日期月的最后一天',
          defaultValue: 'date: time',
          defaultNotes: ''
        },
        {
          propName: 'getFormatDate',
          explain: '根据日期对象返回年月日时分秒',
          defaultValue: 'd: time, fmt: "yyyy-mm-dd hh:mm:ss"',
          defaultNotes: 'fmt: 日期格式（YMDhmsSq 年月日时分秒毫秒季度）'
        },
        {
          // 出错
          propName: 'getFormatDateNew',
          explain: '根据日期对象返回年月日时分秒',
          defaultValue: 'd: time, fmt: "yyyy-mm-dd hh:mm:ss"',
          defaultNotes: 'fmt: 日期格式（YMDhmsSq 年月日时分秒毫秒季度）'
        },
        {
          propName: 'laterObjByY',
          explain: '获取几年后的日期对象',
          defaultValue: 'num, todayDate',
          defaultNotes: 'num 年数, todayDate 日期对象（默认今天）返回值：{Date} 几年后的日期对象'
        },
        {
          propName: 'laterObjByM',
          explain: '获取几个月后的日期对象',
          defaultValue: 'num, todayDate',
          defaultNotes: 'num 月数, todayDate 日期对象（默认今天）返回值：{Date} 几年后的日期对象'
        },
        {
          propName: 'laterObj',
          explain: '获取几天后的日期对象',
          defaultValue: 'num, todayDate = new Date()',
          defaultNotes: 'num 天数, todayDate 日期对象（默认今天）返回值：{Date} 几天后的日期对象'
        },
        {
          propName: 'laterObjByH',
          explain: '获取几小时后的日期对象',
          defaultValue: 'num, todayDate',
          defaultNotes: 'num 小时数, todayDate 日期对象（默认今天）返回值：{Date} 几年后的日期对象'
        },
        {
          propName: 'DateDiff',
          explain: '计算天数差',
          defaultValue: 'd1, d2',
          defaultNotes: 'd1 日期对象1, d2 日期对象2, 返回值： 天数差'
        },
        {
          propName: 'DateDiffByHour',
          explain: '计算小时差',
          defaultValue: 'd1, d2',
          defaultNotes: 'd1 日期对象1, d2 日期对象2, 返回值： 小时差'
        },
        {
          propName: 'getYearDays',
          explain: '获取年的天数',
          defaultValue: 'obj',
          defaultNotes: ''
        },
        {
          propName: 'getMonthDays',
          explain: '获取月份的天数',
          defaultValue: 'year, month',
          defaultNotes: 'year：年, month：月'
        },
        {
          propName: 'getBetweenDateDays',
          explain: '获取两个日期月份之间的的天数',
          defaultValue: 'date1, date2',
          defaultNotes: '时间格式 date1 早于 date2， 如果相差为两月的话， 那结果就是这两个月份的天数相加'
        }
      ],
      tableData4: [
        {
          propName: 'getPAMS56Channel',
          explain: '获取PAMS 56的通道编码',
          defaultValue: '',
          defaultNotes: '不需要传参，返回一个字符串'
        },
        {
          propName: 'getMIR',
          explain: '获取所有PAMS 56和MIR值',
          defaultValue: '',
          defaultNotes: '不需要传参，返回一个{ channel: String, MIR: Obj}'
        },
        {
          propName: 'getMIRByKey',
          explain: '根据通道编码获取相应的MIR',
          defaultValue: 'key：通道编码',
          defaultNotes: '返回值是一个数字'
        },
        {
          propName: 'getFAC',
          explain: '获取PAMS 56中FAC大于0的通道及对应的FAC值',
          defaultValue: '',
          defaultNotes: '不需要传参，返回一个{ channel: String, FAC: Obj}'
        },
        {
          propName: 'getFACByKey',
          explain: '根据通道编码获取相应的FAC',
          defaultValue: 'key：通道编码',
          defaultNotes: '返回值是一个数字'
        },
        {
          propName: 'getPolLabel',
          explain: '格式化污染物的显示',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'polUnit',
          explain: '各污染物的单位',
          defaultValue: 'pol：污染物名',
          defaultNotes: ''
        },
        {
          propName: 'getLevelColor',
          explain: '根据污染等级获取颜色',
          defaultValue: 'val：等级数值或汉字',
          defaultNotes: ''
        },
        {
          propName: 'getAQIColor',
          explain: '根据AQI获取颜色',
          defaultValue: 'val：AQI数值',
          defaultNotes: ''
        },
        {
          propName: 'getPolColor',
          explain: '获取污染物的颜色',
          defaultValue: 'polname：污染物名词，polvalue：污染数值',
          defaultNotes: ''
        },
        {
          propName: 'getAQIName',
          explain: '根据AQI的值获取名称',
          defaultValue: 'val：AQI的值',
          defaultNotes: ''
        }
      ],
      tableData5: [
        {
          propName: 'addClass',
          explain: '添加class类名',
          defaultValue: 'el:obj, className:string',
          defaultNotes: 'el HTML标签对象, className 类名'
        },
        {
          propName: 'removeClass',
          explain: '删除class类名',
          defaultValue: 'el:obj, className:string',
          defaultNotes: 'el HTML标签对象, className 类名'
        },
        {
          propName: 'getGlobal',
          explain: ' 获取顶层对象',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'launchFullScreen',
          explain: '全屏操作',
          defaultValue: 'element = document.documentElement',
          defaultNotes: ''
        },
        {
          propName: 'cancelFullscreen',
          explain: '取消全屏',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'windowResize',
          explain: '添加当窗口发生变化时触动的函数',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'removeWindowResize',
          explain: '移除当窗口发生变化时触动的函数',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'beforeunload',
          explain: '添加窗口关闭前事件',
          defaultValue: 'fn',
          defaultNotes: ''
        },
        {
          propName: 'passthru',
          explain: '标签模板，返回原值',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'compile',
          explain: '模板编译函数',
          defaultValue: 'template',
          defaultNotes: 'template 模板'
        },
        {
          propName: 'textEllipsis',
          explain: '将过长的文字省略',
          defaultValue: 'str, l = 10',
          defaultNotes: 'str：文字字符串, l：剩余文字长度，默认是10 '
        },
        {
          propName: 'showCode',
          explain: '将标签转为页面可显示',
          defaultValue: 'v',
          defaultNotes: ''
        },
        {
          propName: 'domMouseX',
          explain: '鼠标距离元素左侧的距离',
          defaultValue: 'dom, e',
          defaultNotes: 'dom HTML元素对象, e 事件对象，用来获取鼠标距离最左边的距离, 返回值： 鼠标距离元素左侧的距离'
        },
        {
          propName: 'getOffsetX',
          explain: '获取到页面左边的距离',
          defaultValue: '',
          defaultNotes: ''
        },
        {
          propName: 'domParents',
          explain: '获取 dom 元素的所有父元素',
          defaultValue: 'dom',
          defaultNotes: 'dom HTML元素对象, 返回值： dom 元素的所有父元素'
        },
        {
          propName: 'getElementPageTop',
          explain: '获取 element 元素在 document 文档中的位置（与左上角的距离）的高度',
          defaultValue: 'element',
          defaultNotes: 'element: element元素对象, 返回值： 因为存在滚动的状况，所以会出现负值'
        },
        {
          propName: 'getElementPageLeft',
          explain: '获取 element 元素在 document 文档中的位置（与左上角的距离）的宽度',
          defaultValue: 'element',
          defaultNotes: 'element: element元素对象, 返回值： 因为存在滚动的状况，所以会出现负值'
        },
        {
          propName: 'download',
          explain: '下载文件',
          defaultValue: 'data: BYTE, filename: String',
          defaultNotes: 'data: 后台返回BYTE数据, filename：下载文件名,兼容ie10'
        },
        {
          propName: 'downloadFile1',
          explain: '下载文件',
          defaultValue: 'data, name',
          defaultNotes: ''
        },
        {
          propName: 'downloadImage',
          explain: '下载图片',
          defaultValue: 'imgsrc, name',
          defaultNotes: 'imgsrc：图片地址, name：图片名称'
        },
        {
          propName: 'downloadImageByBase64',
          explain: '下载图片Base64',
          defaultValue: 'imageByBase64, name',
          defaultNotes: 'imageByBase64：图片编码, name：图片名称'
        },
        {
          propName: 'downloadFile2',
          explain: '下载表格',
          defaultValue: 'jsonData, name = "table"',
          defaultNotes: ''
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
    // console.log(this.$common.getRootPath())
    // let temp = this.$common.timeFormat('2020-7-16 11:21', 'yyyy-MM-dd hh:mm:ss')
    // console.log(temp)
    // let temp = [
    //   {
    //     name: 'name1',
    //     age: 25,
    //     years: 4,
    //     work: 1,
    //     child: [
    //       {
    //         name: 'name2',
    //         age: 25,
    //         years: 3,
    //         work: 2
    //       },
    //       {
    //         name: 'name3',
    //         age: 26,
    //         years: 4,
    //         work: 2
    //       },
    //     ]
    //   },
    //   {
    //     name: 'name4',
    //     age: 26,
    //     years: 3,
    //     work: 1
    //   },
    //   {
    //     name: 'name5',
    //     age: 27,
    //     years: 3,
    //     work: 1
    //   },
    //   {
    //     name: 'name6',
    //     age: 27,
    //     years: 3,
    //     work: 2
    //   }
    // ]
    // let tempArr = this.$common.sortObjectArray(temp, ['age', 'years', 'work'])
    // let tempArr1 = this.$common.getSpecialData()
    // console.log(tempArr)
    // let tempObj = this.$common.objSet(20, temp, 'age', 'years', 'work')
    // // let tempObj2 = this.$common.objC(temp, 'ages', 'years')
    // let time = new Date()
    // let tempObj2 = this.$common.getFormatDateNew('2020-11-20 12:12:00', 'yyyy-mm-dd')
    // console.log(this.$common.getBetweenDateDays(new Date('2020/7/11'), new Date('2020/9/11')))
    // console.log(this.$common.DateDiff(new Date('2020/7/11'), new Date('2020/9/11')))
    console.log(this.$common.evenRound(4.355, 1))

    // 1922未写-1960
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
