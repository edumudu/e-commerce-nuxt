export const state = () => ({
  cart: [] // id, quantity
});

export const getters = {
  cartItems (state) {
    return state.cart;
  }
};

export const actions = {
  addProductToCart ({ state, commit }, product) {
    if (product.quantity > 0) {
      const cartItem = state.cart.find(item => item.id === product.id);

      if (!cartItem) {
        commit('pushProductToCart', product);
      } else {
        commit('setItemQuantity', {
          item: cartItem,
          qty: product.quantity
        });
        // commit('incrementItemQuantity', cartItem)
        // commit('decrementProductInventory', cartItem)
      }
    }
  }
};

export const mutations = {
  pushProductToCart (state, product) {
    state.cart.push(product);
  },

  incrementItemQuantity (state, product) {
    product.quantity++;
  },

  decrementProductInventory (state, product) {
    product.estoque--;
  },

  removeItemFromCart (state, item) {
    state.cart.splice(state.cart.indexOf(item), 1);
  },

  setItemQuantity (state, { item, qty }) {
    item.quantity = qty;
  }
};
