##介绍
> 个人博客，涉及到前后台，主要功能是文章管理、友链、标签、个人信息等模块
## 使用技术
> nuxt+iview+vue-router+vuex+koa+nodejs+mongoose+echart+vue-quill-editor+web-storage-cache+jsonwebtoken
## 目录结构
```
├─.nuxt
│  ├─components
│  └─views
├─.vscode
├─assets
│  └─images
├─components
├─layouts
├─middleware
├─pages
│  ├─admin
│  │  └─article
│  │      └─articleAdd
│  └─front
│      └─article
│          └─article-detail
├─plugins
├─server
│  ├─config
│  ├─controller
│  │  ├─admin
│  │  └─front
│  ├─models
│  │  └─admin
│  ├─public
│  │  ├─img
│  │  └─upload
│  ├─routes
│  │  ├─admin
│  │  └─front
│  └─utils
├─static
│  └─documents
│      └─axure
└─store
```

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
在浏览器中输入http://localhost:3000/admin
```

