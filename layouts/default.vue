<style>
.avator img{
  width:50px;
  height:50px;
  border-radius: 50%;
  position: absolute;
  top:10%;
  right: 6%;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-layout-header {
  padding-left: 25px;
}
.layout-logo {
  width: 280px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 10px;
  color: #fff;
  font-size: 28px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span,
.collapsed-menu i {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.ivu-dropdown-rel a {
  color: #fff;
}
.ivu-layout-sider a {
  color: #fff;
}
.link{
  width: 80%;
  height: 100%;
  display: inline-block;
}
.ivu-layout-sider{
  position: absolute !important;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="header">
            <div class="layout-logo">这是网站的标题</div>
            <div class="user">
              <Dropdown>
                <a href="javascript:void(0)">
                  {{user.username }}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div class="avator">
                <img :src="user.avator">
            </div>
            </div>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider
          :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}"
          breakpoint="md"
        >
          <Menu :open-names="['1']" active-name="1" theme="dark" width="auto">
            <MenuItem name="1">
              <Icon type="md-home"></Icon>
              <nuxt-link to="/admin" class="link">
                <span>首页</span>
              </nuxt-link>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-list-box"></Icon>文章管理
              </template>
              <MenuItem name="2-1">
                <nuxt-link to="/admin/article/article-list">
                  <span>文章列表</span>
                </nuxt-link>
              </MenuItem>
              <MenuItem name="2-2">
                <nuxt-link to="/admin/article/article-add">
                  <span>新增文章</span>
                </nuxt-link>
              </MenuItem>
            </Submenu>
            <MenuItem name="3">
              <Icon type="ios-paper-plane"></Icon>
              <nuxt-link to="/admin/tag">
                <span>标签管理</span>
              </nuxt-link>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-pricetags"></Icon>
              <nuxt-link to="/admin/link">
                <span>友链管理</span>
              </nuxt-link>
            </MenuItem>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-contact"></Icon>用户管理
              </template>
              <MenuItem name="3-1">
                <nuxt-link to="/admin/userInfo">信息修改</nuxt-link>
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px 228px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', background: '#fff',height:'85vh'}">
            <nuxt/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import webStorageCache from 'web-storage-cache'
const ws=new webStorageCache();
import {mapState} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed:mapState('admin',{
    user:state=>state.user
  }),
  created(){
   if(!ws.get('token')){//核查是否登录
         this.$router.push('/admin/login')
      }
  }
}
</script>

