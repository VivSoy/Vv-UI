<template>
  <div class="switch-container">
    <Demo title="基础用法" description="Switch的基础用法" :component="SwitchDemo"></Demo>
    <Demo title="禁用状态" description="使用disabled属性改变Switch组件的状态" :component="SwitchDemo1"></Demo>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import SwitchDemo from '../demo/SwitchDemo.vue'
import SwitchDemo1 from '../demo/SwitchDemo1.vue'
import Attr from '../components/Attr.vue'
import Demo from '../components/Demo.vue'
import { columns } from '../utils/data'
export default {
  name: 'Switch',
  components: {
    Demo,
    SwitchDemo,
    SwitchDemo1,
    Attr
  },
  setup() {
    const data = [
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      }
    ]
    return {
      SwitchDemo,
      SwitchDemo1,
      columns,
      data
    }
  }
}
</script>
