export const state = () => ({
  user: "",
  orders: [],
  //   auth: false
})

export const mutations = {
  SET_INFO(state, info) {
    state.user.info = info
  },
  SET_TOKEN(state, token) {
    state.user.token = token
  },
  SET_USERNAME(state, userName) {
    state.user.userName = userName
  },

  LOGOUT(state) {
    state.user = {}
    state.auth = false
  },

  SET_CART(state, cart) {
    state.orders.push(cart)
  },

  DELETE_ORDER(state, index) {
    state.orders.splice(index, 1)
  },
}
