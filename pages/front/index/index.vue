<style>
.group {
  height: 200px;
  background: #fff;
  margin: 0 auto;
  width: 50%;
  margin-top: 15px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
.group .tag {
  width: 20%;
  height: 100px;
  background: #5cadff;
  color: #fff;
  font-size: 36px;
  text-align: center;
  line-height: 100px;
  margin-right: 15px;
}
.group p {
  padding: 5px 0;
}
.group:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
.ivu-icon {
  margin-right: 5px;
}
.page{
 display:flex;
 justify-content: center;
 margin-top:10px; 
}
</style>
<template>
  <div class="container">
    <section class="group" v-for="item in list" :key="item._id" @click="openDedetail(item._id)">
      <div class="tag">{{item.tags}}</div>
      <div class="details">
        <summary class="title">
          <h2>{{item.title}}</h2>
        </summary>
        <p class="content">{{item.content}}</p>
        <div class="last">
          <span class="time">
            <Icon type="md-alarm"/>{{new Date(item.create_date).Format("yyyy-M-d h:m") }}
          </span>
          <!-- <span class="reading">
            <Icon type="ios-eye"/>200
          </span> -->
        </div>
      </div>
    </section>
    <div class="page">
       <Page :total="total"  show-total @on-change='changePageSize'/>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
  data() {
    return {
      list: [],
      total: 0,
      param: {
        limit: 10,
        page: 1
      }
    };
  },
  created(){
      this.getData();
  },
  middleware: 'formateDate',
  methods: {
    getData() {
      var self = this;
      self.$axios.post("/front/article/queryArticle", self.param).then(res => {
        let data = res.data.res;
        for (let i in data) {
          let temp = [];
          for (let j in data[i].tag) {
            temp.push(data[i].tag[j].tag_name);
          }
          data[i].tags = temp.join(",");
        }
        self.list = data;
        self.total = res.data.total;
      });
    },
     changePageSize(page){
     this.param.page=page;
     this.getData();
    },
    openDedetail(id){
         this.$router.push('/front/index/article-detail/'+id);
    }
  },
   head(){
    return {
      title:"首页"
    }
  }
};
</script>


