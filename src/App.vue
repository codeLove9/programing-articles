<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000" fixed>
      <van-tabbar-item replace to="/" icon="home-o">้ฆ้กต</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>

</style>
