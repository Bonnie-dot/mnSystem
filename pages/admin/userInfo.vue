<style scoped>
/* .container {
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  width: 40%;
  margin: 0 auto;
  font-size: 20px;
  margin-top: 150px;
} */
.container button {
  position: relative;
  width: 100px;
}
.title {
  border-bottom: 2px solid #e8eaec;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #464c5b;
  padding-left: 5px;
}
.info {
  width: 30%;
  margin-top: 30px;
}
.row .btn {
  height: 40px;
  line-height: 40px;
}
.avators {
  margin-top: 70px;
  position: relative;
}
.row {
  display: flex;
}
.row span:first-child {
  flex: 2;
}
.avators > span {
  position: relative;
  top: -45px;
  margin-right: 40px;
}
.avators .av-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.avators button {
  top: -45px;
  right: -5%;
}
.username {
  margin-top: 30px;
}
.password {
  margin-top: 70px;
}
.username button {
  right: -8%;
}
.password > button {
  right: -7%;
}
.username > span:first-child,
.password > span:first-child {
  margin-right: 70px;
}
.btn{
  background: #2d8cf0;
  color: #fff;
  border:none;
  border-radius: 5px;
}
.file{
  height: 40px;
  position: absolute;
  width: 100px;
  top: -88%;
  right: -5%;
  opacity: 0;
  z-index: 666;
}
</style>

<template>
  <div class="container">
    <p class="title">个人信息修改</p>
    <div class="info">
      <div class="avators row">
        <span>用户头像：
          <img :src="userInfo.avator" class="av-img">
        </span>
        <button type="button" class="btn">
          重新上传
        </button>
         <input type="file" class="file" :accept="accept" @change="uploadImg">
      </div>
      <div class="username row">
        <span>用户名：
          <span>{{userInfo.name}}</span>
        </span>
        <Button type="primary">修改用户名</Button>
      </div>
      <div class="password row">
        <span>密码：
          <span>{{userInfo.password.replace(/./g,'*')}}</span>
        </span>
        <Button type="primary">修改密码</Button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations  } from 'vuex'
export default {
  async asyncData({ $axios }) {
    let res = await $axios.post("/admin/user/getUserInfo");
    return { userInfo: res.data };
  },
  data(){
    return{
      header:{
        'x-access-token':""
      },
      accept:".jpg,.jpeg,.gif,.png,.bmp"
    }
  },
   computed: mapState('admin',{
      token:state => state.token,
  }),
  created(){
    this.header['x-access-token']=this.token;
  },
  methods:{
    uploadSuccess(response,file,){
    debugger
  },
  uploadImg(e){
    let file=e.target.files[0];
    var limit=file.size/1024;
    if(limit>100){
       this.$Message.warning('图片大小不能超过100M');
       return;
    }
    let param=new FormData()
    param.append('file',file);
    this.$axios.post('/admin/user/uploadImg',param).then(res=>{
      this.userInfo.avator=res.data;
    })
    
  }
  }
};
</script>
