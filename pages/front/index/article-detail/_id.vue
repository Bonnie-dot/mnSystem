<style>
.article-detail {
  padding: 20px;
  background: #fff;
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 14px;
  min-height: calc(100vh - 154px);
  border-radius: 5px;
}
.article-detail .title {
  text-align: center;
  margin-bottom: 10px;
}
.article-detail .mark {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
<template>
  <div class="article-detail">
    <h2 class="title">{{list.title}}</h2>
    <div class="mark">
      <span class="time">创建时间：{{new Date(list.create_date).Format("yyyy-M-d h:m")}}</span>
      <span class="tag">标签：{{list.tag[0]&&list.tag[0].tag_name}}</span>
    </div>
    <div class="content" v-html="list.content">
   
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    let list = (await $axios.post("/front/article/findArticleById", {
      _id: params.id
    })).data.res;
   return {list};
  },
   middleware: 'formateDate',
   layout: "front",
  data(){
      return{

      }
  },
   head(){
    return {
      title:"文章详情"
    }
  }
};
</script>


