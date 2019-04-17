import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5b0bcf38 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1a0e5704 = () => interopDefault(import('../pages/admin/link.vue' /* webpackChunkName: "pages/admin/link" */))
const _24b3724f = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _709a9d80 = () => interopDefault(import('../pages/admin/tag.vue' /* webpackChunkName: "pages/admin/tag" */))
const _215844ba = () => interopDefault(import('../pages/admin/userInfo.vue' /* webpackChunkName: "pages/admin/userInfo" */))
const _f12e8976 = () => interopDefault(import('../pages/front/aboutMe.vue' /* webpackChunkName: "pages/front/aboutMe" */))
const _92441ad6 = () => interopDefault(import('../pages/front/index/index.vue' /* webpackChunkName: "pages/front/index/index" */))
const _2b925617 = () => interopDefault(import('../pages/admin/article/article-add.vue' /* webpackChunkName: "pages/admin/article/article-add" */))
const _399226d0 = () => interopDefault(import('../pages/admin/article/article-list.vue' /* webpackChunkName: "pages/admin/article/article-list" */))
const _ff70208e = () => interopDefault(import('../pages/admin/article/articleAdd/_id.vue' /* webpackChunkName: "pages/admin/article/articleAdd/_id" */))
const _66da6323 = () => interopDefault(import('../pages/front/article-detail/_id.vue' /* webpackChunkName: "pages/front/article-detail/_id" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _5b0bcf38,
      name: "admin"
    }, {
      path: "/admin/link",
      component: _1a0e5704,
      name: "admin-link"
    }, {
      path: "/admin/login",
      component: _24b3724f,
      name: "admin-login"
    }, {
      path: "/admin/tag",
      component: _709a9d80,
      name: "admin-tag"
    }, {
      path: "/admin/userInfo",
      component: _215844ba,
      name: "admin-userInfo"
    }, {
      path: "/front/aboutMe",
      component: _f12e8976,
      name: "front-aboutMe"
    }, {
      path: "/front/index",
      component: _92441ad6,
      name: "front-index"
    }, {
      path: "/admin/article/article-add",
      component: _2b925617,
      name: "admin-article-article-add"
    }, {
      path: "/admin/article/article-list",
      component: _399226d0,
      name: "admin-article-article-list"
    }, {
      path: "/admin/article/articleAdd/:id?",
      component: _ff70208e,
      name: "admin-article-articleAdd-id"
    }, {
      path: "/front/article-detail/:id?",
      component: _66da6323,
      name: "front-article-detail-id"
    }],

    fallback: false
  })
}
