<style>
.avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  right: 6%;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
.link {
  width: 80%;
  height: 100%;
  display: inline-block;
}
.ivu-layout-sider {
  position: absolute !important;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="/admin/userInfo">
          <div class="header">
            <div class="layout-logo">不积跬步，无以至千里</div>
            <div class="user">
              <Dropdown @on-click="changeOper">
                <a href="javascript:void(0)">
                  {{user.username }}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list" trigger="hover">
                  <DropdownItem name="mdf">修改密码</DropdownItem>
                  <DropdownItem name="logout">退出登录</DropdownItem>
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
          <Menu :open-names="['1']" active-name="1" theme="dark" width="auto" @on-select="selectEvent">
            <nuxt-link to="/admin" class="link">
              <MenuItem name="admin">
                <Icon type="md-home"></Icon>
                <span>首页</span>
              </MenuItem>
            </nuxt-link>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-list-box"></Icon>文章管理
              </template>
              <MenuItem name="admin/article/article-list">
                <nuxt-link to="/admin/article/article-list">
                  <span>文章列表</span>
                </nuxt-link>
              </MenuItem>
              <MenuItem name="admin/article/article-add">
                <nuxt-link to="/admin/article/article-add">
                  <span>新增文章</span>
                </nuxt-link>
              </MenuItem>
            </Submenu>
            <MenuItem name="admin/tag">
              <Icon type="ios-paper-plane"></Icon>
              <nuxt-link to="/admin/tag">
                <span>标签管理</span>
              </nuxt-link>
            </MenuItem>
            <MenuItem name="admin/link">
              <Icon type="ios-pricetags"></Icon>
              <nuxt-link to="/admin/link">
                <span>友链管理</span>
              </nuxt-link>
            </MenuItem>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-contact"></Icon>用户管理
              </template>
              <MenuItem name="admin/userInfo">
                <nuxt-link to="/admin/userInfo">信息修改</nuxt-link>
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px 228px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem v-for="(item,idx) in breadList"  :key="idx" >
             <nuxt-link  :to="item.to">{{item.name}}</nuxt-link>
            </BreadcrumbItem>
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
import webStorageCache from "web-storage-cache";
const ws = new webStorageCache();     
import md5 from "md5";
import { mapState } from "vuex";
export default {
  data() {
    return {
      password: "",
      breadList:[],
      breadDetail:{
        'admin':'首页',
        'article':'文章管理',
        'article-add':'新增文章',
        'article-list':'文章列表',
        'userInfo':'信息修改',
        'tag':'标签管理',
        'link':'友链管理'
      },
      activeName:""
    };
  },
  computed: mapState("admin", {
    user: state => state.user
  }),
  created() {
    if (!ws.get("token")) {
      //核查是否登录
      this.$router.push("/admin/login");
    }
    this.selectEvent(location.pathname.slice(1));
    this.activeName=location.pathname.slice(1);
  },
  methods: {
    logout() {
      this.$router.push("/admin/login");
    },
    changeOper(val) {
      var self = this;
      if (val == "mdf") {``
        self.$Modal.confirm({
          render: h => {
            return h("Input", {
              props: {
                value: self.value,
                autofocus: true,
                placeholder: "请输入你的密码"
              },
              on: {
                input: val => {
                  self.password = val;
                }
              }
            });
          },
          onOk() {
            self.$axios
              .post("/admin/user/updateUserPassword", {
                userId: self.user._id,
                passWord: md5(self.password)
              })
              .then(res => {
                if (res.success) {
                  self.$Message.success("修改密码成功");
                  self.$router.push("/admin/login");
                }
              });
          }
        });
      } else {
        this.$router.push("/admin/login");
      }
    },
    selectEvent(name){//配置路由
     this.activeName=name;
     let arr=name.split('/');
     let temp=[],str="/";
      arr.forEach((v,i) => {
        let name=this.breadDetail[v];
        str+=v+'/';
       if(name=="文章管理"){
         temp.push({name:name,to:'/admin/article/article-list'})
       }else{
          temp.push({name:name,to:str.slice(0,str.length-1)})
       }
      });
      this.breadList=temp;
    }
  }
};
</script>

