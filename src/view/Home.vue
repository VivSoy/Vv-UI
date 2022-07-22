<template>
  <div>
    <TopNav class="topnav" />
    <div class="banner">
      <div class="logo"><img src="" alt="" /></div>
      <h1>VV_UI</h1>
      <h2>UI造轮子</h2>
      <div class="btn">
        <router-link class="began" to="/doc">开始使用</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  name: 'Home',
  components: { TopNav }
}
</script>

<style lang="less" scoped>
.banner {
  user-select: none;
  width: 100%;
  padding: 150px 0 100px 0;
  clip-path: ellipse(80% 60% at 50% 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(179, 217, 233, 0.3);
  h2 {
    margin: 25px 0;
    color: #666;
    font-style: italic;
  }
  .btn {
    font-size: 17px;
    margin-top: 30px;
    a {
      cursor: pointer;
      margin: 0 8px;
      border-radius: 10px;
      width: 120px;
      height: 40px;
    }
    .began {
      padding: 8px 20px;
      color: #fff;
      background: #009afe;
      border: 1px solid transparent;
      transition: all 0.3s;
      &:hover {
        background: #66b1ff;
      }
    }
  }
}
</style>
