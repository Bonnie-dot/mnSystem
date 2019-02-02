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
.title{
  border-bottom:2px solid #e8eaec;
  font-size:	16px;
  font-weight: bold;
  padding-bottom: 10px;
  color:#464c5b;
  padding-left:5px;
}
.avator{
  margin-top: 30px;
}
.avator > span {
  position: relative;
  top: -45px;
  margin-right: 40px;
}
.avator .av-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.avator button {
  top: -45px;
  right:-5%;
}
.username {
  margin-top: 30px;
}
.password{
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
</style>

<template>
  <div class="container">
    <p class="title">个人信息修改</p>
    <div class="avator">
      <span>用户头像：</span>
      <img src="images/username.jpg" class="av-img">
      <Button type="primary">修改头像</Button>
    </div>
    <div class="username">
      <span>用户名：</span>
      <span>Bonnie</span>
      <Button type="primary">修改用户名</Button>
    </div>
    <div class="password">
      <span>密码：</span>
      <span>*************</span>
      <Button type="primary">修改密码</Button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
