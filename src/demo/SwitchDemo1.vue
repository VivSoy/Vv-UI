<template>
  <div>
    <VvSwitch disabled v-model:value="bool" @click="handleFn" />
  </div>
</template>

<script lang="ts">
import VvSwitch from '../libs/VvSwitch.vue'
import { ref } from 'vue'

export default {
  name: 'SwitchDemo1',
  components: {
    VvSwitch
  },
  setup() {
    const bool = ref(false)
    let handleFn = () => {
      // 业务代码
    }
    return {
      bool,
      handleFn
    }
  }
}
</script>
