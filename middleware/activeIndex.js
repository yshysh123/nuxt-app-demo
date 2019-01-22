export default function(context) {
  const { route, redirect, store } = context
  store.commit('SET_ACTIVEINDEX', route.fullPath)
}
