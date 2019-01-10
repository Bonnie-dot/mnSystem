# mnStystem
 过去一直想建立个人博客，由于种种原因（时间、懒惰...）,在2019年的年初定下一个目标，今年必须把博客建起。该项目是后台管理系统，是我利用业余时间完成的，因为抱着学习新知识的态度，采用的都是自己之前项目没有接触过得技术和框架，我处于一种边学边做的过程。由于工作中接触的都是hmtl5开发,接触pc还是较少，所以有什么不对之处，欢迎大家指正。
## 使用技术
> nuxt+iview+vue-router+koa+nodejs+mongodb+echart+vue-quill-editor+
## 目录结构
```
├─.nuxt
│  ├─components
│  └─views
├─components
├─dist
│  ├─article
│  │  ├─article-add
│  │  └─article-list
│  ├─documents
│  ├─home
│  ├─images
│  └─_nuxt
│      ├─fonts
│      └─img
├─layouts
├─middleware
├─pages
│  └─article
├─plugins
├─static
│  ├─documents
│  └─images
└─store
```
## 目前进度
目前完成基本前端框架的搭建，首页完成80%，其他功能待开发。
## 用法

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
在浏览器中输入http://localhost:3000/home
```

