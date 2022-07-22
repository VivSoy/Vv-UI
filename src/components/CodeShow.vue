<!-- 代码展示组件 -->
<template>
  <div class="code-container" @mouseenter="enter" @mouseleave="leave">
    <div class="demo">
      <component :is="component"></component>
      <!-- 用于动态切换组件，is后面跟要切换的组件名 -->
    </div>
    <div class="code">
      <div class="code-content" :style="{ height: height + 'px' }">
        <!-- pre标签 预格式化文本，用户展示代码 -->
        <pre ref="codePer" class="language-html" v-html="html"></pre>
      </div>
      <!-- 控制代码框显示隐藏 -->
      <div class="demo-block-control" @click="toggle">
        <svg class="icon">
          <use :xlink:href="showCode === false ? '#icon-xiangxia1' : '#icon-xiangxia'"></use>
        </svg>
        <transition name="fade">
          <!-- vue中的用于动画过渡的组件 -->
          <span class="show-world" v-show="show">{{ showCode === true ? '隐藏代码' : '显示代码' }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import '../assets/iconfont.js' // 导入iconfont
import 'prismjs' // 代码高亮插件
import '../assets/css/prism.css' //prismjs css文件

const Prism = (window as any).Prism

export default {
  name: 'Coder',
  props: {
    component: {
      type: Object
    }
  },
  setup(props, context) {
    let codePer = ref<HTMLDivElement | any>(null)
    let html = ref('')
    let computedHeight = ref(0)
    let height = ref(0)
    const show = ref(false)
    const enter = () => {
      show.value = true
    }
    const leave = () => {
      show.value = false
    }

    // 获取组件的源代码，然后并获取展示源代码容器的高度
    onMounted(() => {
      // console.log(props.component.setup)

      // html.value = Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
      // nextTick(() => {
      //   let { height } = codePer.value.getBoundingClientRect()
      //   computedHeight.value = height
      // })
      html.value = '代码显示出现bug，目前还未解决'
      nextTick(() => {
        let { height } = codePer.value.getBoundingClientRect()
        computedHeight.value = height
      })
    })
    // 控制页面显示隐藏代码还是显示代码的文字
    let showCode = computed(() => {
      if (height.value === 0) {
        return false
      } else {
        return true
      }
    })

    // 控制显示代码还是隐藏代码，通过高度来控制
    let toggle = () => {
      if (height.value === 0) {
        height.value = computedHeight.value
      } else {
        height.value = 0
      }
    }

    return {
      show,
      enter,
      leave,
      codePer,
      html,
      height,
      showCode,
      computedHeight,
      toggle
    }
  }
}
</script>

<style lang="less">
.code-container {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);

    .icon {
      transform: translateX(-35px);
    }
  }
}
.language-html {
  margin: 0;
  background-color: #fdfdfd;
  font-size: 15px;
  padding: 18px 24px;
}
.demo {
  padding: 24px;
}

.code {
  .code-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.5s;
  }
  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    text-align: center;
    left: 0;

    &:hover {
      color: #78d6f5;
      background-color: #f9fafc;
    }
    .icon {
      width: 16px;
      height: 44px;
      fill: currentcolor;
      transition: all 0.3s;
    }
    .show-world {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      transition: all 0.3s;
      transform: translateX(-30px);
      &.fade-enter {
        opacity: 0;
        transform: translateX(10px);
      }

      &.fade-enter-to {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave-to {
        opacity: 0;
        transform: translateX(0px);
      }
    }
  }
}
</style>
