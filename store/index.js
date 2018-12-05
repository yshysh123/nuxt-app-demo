import Vue from 'vue'
import axios from 'axios'

export const strict = true

export const state = () => ({
  authUser: { authenticated: false },
  locale: null,
  locales: ['en', 'fr', 'zh'],
  isMenuHidden: false,
  account: null,
  session: null,
})

export const mutations = {
  SET_LANG(state, locale) {
    const normalized = locale.toLowerCase().split('-')[0]
    if (state.locales.indexOf(normalized) !== -1) {
      state.locale = normalized
    }
  },
}

export const getters = {}

export const actions = {}
