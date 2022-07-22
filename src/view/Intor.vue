<template>
  <div class="intorduce">
    <h2>介绍</h2>
    <div class="content">
      <p><span>VvUI</span>是一个自用的前端UI框架，基于Vue3.0、Vite、TypeScript搭建，并在不断更新中。。。。</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Intor'
}
</script>

<style lang="less">
.intorduce {
  padding: 10px 0;
  h2 {
    margin-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaecef;
  }
  .content {
    margin-top: 30px;
    background: rgba(217, 238, 246, 0.3);
    padding: 15px;
    // background: #f6f8fa;
    box-shadow: 0 8px 12px #ebedf0;
    border-radius: 12px;
    p {
      line-height: 2;
      span {
        color: #009afe;
      }
      a {
        cursor: pointer;
        color: #009afe;
      }
    }
  }
}
</style>
