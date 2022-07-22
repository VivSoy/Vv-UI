<template>
  <button :disabled="disabled" class="vv-switch" @click="toggle" :class="{ checked: value, disabled: disabled }"><span></span></button>
</template>

<script lang="ts">
export default {
  name: 'VvSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    let toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="less">
.vv-switch {
  cursor: pointer;
  height: 22px;
  width: 44px;
  border: none;
  background: #e3e3e3;
  border-radius: 9px;
  position: relative;
  transition: background 0.3s;
  &:focus {
    outline: none;
  }
  &:active {
    span {
      width: 24px;
    }
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: #fff;
    border-radius: 9px;
    transition: all 0.3s;
  }
  &.checked > span {
    left: 100%;
    margin-left: -2px;
    transform: translateX(-100%);
  }
  &.checked {
    background: #009afe;
  }
}
.disabled {
  cursor: auto;
  &:active {
    span {
      width: 18px;
    }
  }
}
</style>
