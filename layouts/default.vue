<style>
.front .container {
  padding-bottom: 80px;
}
.front .ivu-layout-header {
  background: #2d8cf0 !important;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.front .ivu-layout-footer {
  height: 80px;
  bottom: 0;
  width: 100%;
  line-height: 30px;
  background: #2d8cf0 !important;
  color: #fff !important;
  text-align: center;
  padding-top:10px;
}
.front .ivu-layout-footer a {
  color: #fff;
}
.front .ivu-layout-footer a img{
  vertical-align: middle;
}
.front .ivu-menu-item a {
  width: 100%;
  height: 100%;
  color: #fff;
}
.front .ivu-menu-item a:hover {
  color: #fff;
}
</style>

<template>
  <Layout class="front">
    <Header>
      <div class="title">
        <h2>安然</h2>
      </div>
      <div class="menu">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="2">
            <nuxt-link to="/front/index">
              <Icon type="md-bookmarks"/>前端技术
            </nuxt-link>
          </MenuItem>
          <MenuItem name="2">
            <nuxt-link to="/front/aboutMe">
              <Icon type="ios-people"/>关于我
            </nuxt-link>
          </MenuItem>
        </Menu>
      </div>
    </Header>
    <Content>
      <nuxt/>
      <Footer>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010602000915"
          style=“display:block”
        >
          <img src="~assets/images/ba.png">
        </a>
        <p>
          © 2019 - Bonnie Blog -
        </p>
      </Footer>
    </Content>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      theme1: "primary"
    };
  },
  created() {
    this.$router.push("/front/index");
  }
};
</script>
