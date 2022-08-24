<template>
  <div class="home_container">
    <van-nav-bar title="编程文章" fixed />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :immediate-check="false" @load="onLoad">
        <ArticleItem v-for="item in articleList" :key="item.id" :title="item.title" :autname="item.aut_name" :commcount="item.comm_count" :pubdate="item.pubdate" :cover="item.cover"></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
// import axios from '@/utils/http'
import { getDataApi } from '@/API/getDataApi'
// console.log(getDataApi())
export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      limit: 10,
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  components: {
    ArticleItem
  },
  methods: {
    async getArticleList (isRefresh) {
      const { data: res } = await getDataApi(this.page, this.limit)
      // if (isRefresh) {
      //   this.articleList = res.concat(this.articleList)
      //   this.refreshing = false
      // } else {
      //   this.articleList = this.articleList.concat(res)
      //   this.loading = false
      // }
      this.articleList = isRefresh ? res.concat(this.articleList) : this.articleList.concat(res)
      this.refreshing = false
      this.loading = false
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad () {
      // console.log('触发了')
      this.page++
      this.getArticleList()
    },
    onRefresh () {
      this.page++
      this.getArticleList(true)
    }
  },
  created () {
    this.getArticleList()
  }
}
</script>

<style lang="less" scoped>
.home_container {
  padding: 46px 0 50px 0;
}
</style>
