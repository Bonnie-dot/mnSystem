<style>
.ctx{
    padding: 20px;
    background: #fff;
    width: 50%;
    margin: 0 auto;
    margin-top:10px;
    font-size: 14px;
    height: calc(100vh - 204px);
    border-radius: 5px;
}
.ctx h2{
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 1px dashed #e8eaec;
    padding-bottom: 10px;
}
.ctx .title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.ctx .title img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 50px;
}
.ctx .title .right>span{
    display: block;
    font-size: 20px;
}
.ctx p{
    margin-top: 10px;
}
.ctx .row{
    display: flex;
    justify-content: flex-start;
}
.ctx .row span{
    width: 200px;
}

</style>
<template>
    <div class="ctx">
        <div class="title">
            <div class="left"><img src="~/assets/images/avator.jpg" alt=""></div>
            <div class="right">
                <span>Bonnie</span>
                <span>Web Developer</span>
            </div>
           
        </div>
        <h2>自我介绍</h2>
       <p>前端工程师一名，先后做过pc/app/小程序/h5等等，对前端开发流程较熟悉,目前学习node相关的东西，发现自己对后台知识蛮感兴趣，也在利用业余时间学习相关后台知识。</p>
       <p>个人爱好，健身、做菜。</p>
       <h2>工作技能</h2>
      <div class="skill">
          <div class="row" v-for="(item,idx) in skillList" :key='idx'>
              <span>{{item.name}}</span>
              <Progress :percent="item.size" :status="item.state"/>
          </div>
      </div>
       <h2>内心独白</h2>
       <p>不积跬步，无以至千里</p>
       <h2>关于博客</h2>
       <p>该博客是1.0.0版本，后续相关功能会继续开发</p>
    </div>
</template>
<script>
export default {
    layout: "front",
    data(){
       return {
           skillList:[
               {name:"JavaScript",size:80,state:"normal"},
               {name:"HTML",size:80,state:"normal"},
               {name:"CSS",size:80,state:"normal"},
               {name:"VUE全家桶",size:70,state:"normal"},
               {name:"NODE",size:50,state:"active"},
               {name:"Mongodb",size:50,state:"active"}]
       }
    },
   head(){
    return {
      title:"关于我"
    }
  }
}
</script>


