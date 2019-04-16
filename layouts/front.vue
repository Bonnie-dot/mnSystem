<style>
.front .container{
    padding-bottom: 80px;
}
.front .ivu-layout-header{
    background: #2d8cf0 !important;
    color: #fff;
    display: flex;
    justify-content: space-between;
}
.front .ivu-layout-footer{
    height: 80px;
    bottom: 0;
    width: 100%;
    background: #2d8cf0 !important;
    color: #fff !important;
    text-align: center;
    line-height: 80px;
    padding: 0 !important;
}
.front .ivu-layout-footer a{
    color: #fff;
}
.front .ivu-menu-item a{
    width: 100%;
    height: 100%;
    color: #fff;
}
.front .ivu-menu-item a:hover{
    color: #fff;
}


</style>

<template>
   <Layout class="front">
        <Header>
            <div class="title"><h2>安然</h2></div>
            <div class="menu">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="2">
         <nuxt-link to="/front/index">
            <Icon type="md-bookmarks" />
            前端技术
        </nuxt-link>    
        </MenuItem>
         <MenuItem name="2">
         <nuxt-link to="/front/aboutMe">
            <Icon type="ios-people" />
             关于我
        </nuxt-link>    
        </MenuItem>
    </Menu>
            </div>
        </Header>
        <Content> 
            <nuxt/>
             <Footer>© 2019 - Bonnie Blog - <a href="http://www.miitbeian.gov.cn/">蜀ICP备19008745号-1</a></Footer>
        </Content>
       
    </Layout>
</template>
<script>
export default {
  data() {
    return {
      theme1: "primary"
    };
  }
};
</script>