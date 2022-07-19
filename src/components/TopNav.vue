<!-- 头部导航组件 -->
<template>
  <div class="top-nav">
    <div class="logo">
      <a class="gohome" href="./">
        <img src="../assets/vue.svg" alt="" />
      </a>
    </div>
    <ul class="menu">
      <li>
        <a href="">github</a>
      </li>
      <li>
        <a href="">码云</a>
      </li>
      <li>
        <a href="#/doc/intro">文档</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="less" scoped>
.top-nav {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  padding: 16px;
  padding-left: 40px;
  padding-right: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  .logo {
    cursor: pointer;
    max-width: 6em;
    height: 100%;
    img {
      width: 100%;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    li {
      cursor: pointer;
      margin: 0 1em;
      &:hover {
        color: rgb(0, 154, 254);
      }
    }
  }
}
</style>
