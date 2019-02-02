<style>
html,body,.container,#__nuxt,#__layout{
    width: 100%;
    height: 100%;
}
.container{
    background: url(~assets/images/bg.jpg) no-repeat;
    background-size: cover;
}
.form{
    border: 1px solid #ccc;
    width: 35%;
    position: absolute;
    left: 35%;
    top:30%;
    padding: 30px 50px;
    border-radius: 10px;
}
.form:hover{
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
.container h1{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
    padding-top: 80px;
}
</style>

<template>
  <div class="container">
      <h1>个人博客后台管理系统</h1>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
      <FormItem prop="username">
        <Input type="text" v-model="formInline.username" placeholder="username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" long>Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import md5 from "md5"
export default {
  layout: "login",
  data() {
    return {
      formInline: {
        username: "Bonnie",
        password: "1"
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.formInline.password=md5(this.formInline.password);
          this.$axios.post('/admin/login',this.formInline).then(res=>{
           let {data}=res;
            if(data.success){
              this.$Message.success('登录成功');
              setTimeout(_=>{
                location.href="http://localhost:3000/front";
              },1000);
            }else{
              this.$Message.error(data.msg);
            }
          });
        } else {
          this.$Message.error("请填写完整信息!");
        }
      });
    }
  }
};
</script>
