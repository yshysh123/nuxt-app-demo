import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _fda4241a = () => interopDefault(import('..\\pages\\examples\\index.vue' /* webpackChunkName: "pages_examples_index" */))
const _0f9036ff = () => interopDefault(import('..\\pages\\examples\\chart.vue' /* webpackChunkName: "pages_examples_chart" */))
const _3ac922ef = () => interopDefault(import('..\\pages\\examples\\table.vue' /* webpackChunkName: "pages_examples_table" */))
const _1ded23dc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
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
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/examples",
      component: _fda4241a,
      name: "examples"
    }, {
      path: "/examples/chart",
      component: _0f9036ff,
      name: "examples-chart"
    }, {
      path: "/examples/table",
      component: _3ac922ef,
      name: "examples-table"
    }, {
      path: "/",
      component: _1ded23dc,
      name: "index"
    }],

    fallback: false
  })
}
