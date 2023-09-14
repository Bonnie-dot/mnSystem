import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f725d62 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _be2193e6 = () => interopDefault(import('../pages/admin/link.vue' /* webpackChunkName: "pages/admin/link" */))
const _79ee7466 = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _4fe58d52 = () => interopDefault(import('../pages/admin/tag.vue' /* webpackChunkName: "pages/admin/tag" */))
const _4d2c102c = () => interopDefault(import('../pages/admin/userInfo.vue' /* webpackChunkName: "pages/admin/userInfo" */))
const _79eb939c = () => interopDefault(import('../pages/front/aboutMe.vue' /* webpackChunkName: "pages/front/aboutMe" */))
const _fe027128 = () => interopDefault(import('../pages/front/index/index.vue' /* webpackChunkName: "pages/front/index/index" */))
const _071863ee = () => interopDefault(import('../pages/admin/article/article-add.vue' /* webpackChunkName: "pages/admin/article/article-add" */))
const _787299a1 = () => interopDefault(import('../pages/admin/article/article-list.vue' /* webpackChunkName: "pages/admin/article/article-list" */))
const _956702fc = () => interopDefault(import('../pages/admin/article/articleAdd/_id.vue' /* webpackChunkName: "pages/admin/article/articleAdd/_id" */))
const _a0008328 = () => interopDefault(import('../pages/front/article-detail/_id.vue' /* webpackChunkName: "pages/front/article-detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _9f725d62,
    name: "admin"
  }, {
    path: "/admin/link",
    component: _be2193e6,
    name: "admin-link"
  }, {
    path: "/admin/login",
    component: _79ee7466,
    name: "admin-login"
  }, {
    path: "/admin/tag",
    component: _4fe58d52,
    name: "admin-tag"
  }, {
    path: "/admin/userInfo",
    component: _4d2c102c,
    name: "admin-userInfo"
  }, {
    path: "/front/aboutMe",
    component: _79eb939c,
    name: "front-aboutMe"
  }, {
    path: "/front/index",
    component: _fe027128,
    name: "front-index"
  }, {
    path: "/admin/article/article-add",
    component: _071863ee,
    name: "admin-article-article-add"
  }, {
    path: "/admin/article/article-list",
    component: _787299a1,
    name: "admin-article-article-list"
  }, {
    path: "/admin/article/articleAdd/:id?",
    component: _956702fc,
    name: "admin-article-articleAdd-id"
  }, {
    path: "/front/article-detail/:id?",
    component: _a0008328,
    name: "front-article-detail-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
