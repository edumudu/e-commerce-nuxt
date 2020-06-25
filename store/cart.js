export const state = () => ({
  products: [],
  cart: [] // id, quantity
});

export const getters = {
  cartItems (state) {
    return state.cart;
  },

  cartProducts (state) {
    return state.products;
  },

  cartTotal (state, getters) {
    return getters.cartProducts.reduce((total, current) => (current.price * current.quantity) + total, 0);
  },

  cartContains: (state, getters) => (id) => {
    return getters.cartItems.map(item => item.id).includes(id);
  }
};

export const actions = {
  async fetchProducts ({ state, commit, getters }) {
    const cart = Array.from(getters.cartItems, item => item.id);

    let { data: products } = await this.$axios.post('/cart/info', { cart });
    products = products.map((product) => {
      const cartItem = state.cart.find(item => item.id === product.id);

      return ({ ...cartItem, ...product });
    });

    const updatedCart = products.map(product => ({ id: product.id, quantity: product.quantity }));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    commit('setCart', updatedCart);
    commit('setProducts', products);
  },

  addProductToCart ({ state, commit, dispatch }, product) {
    if (product.quantity > 0) {
      const cartItem = state.cart.find(item => item.id === product.id);

      if (!cartItem) {
        commit('pushProductToCart', product);
        dispatch('fetchProducts');
      } else {
        const qty = product.quantity;
        const prod = state.products.find(prod => prod.id === cartItem.id);

        commit('setItemQuantity', {
          index: state.cart.indexOf(cartItem),
          qty
        });

        commit('setProductInfoQuantity', {
          index: state.products.indexOf(prod),
          qty
        });
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },

  removeProductFromCart ({ state, commit, dispatch }, product) {
    if (state.cart.some(cartItem => product.id === cartItem.id)) {
      commit('removeItemFromCart', product);
      dispatch('fetchProducts');
    }
  },

  clearCart ({ commit }) {
    commit('setCart', []);
    commit('setProducts', []);
    localStorage.removeItem('cart');
  },

  setProductQuantity ({ state, commit }, { product, qty }) {
    product = state.cart.find(prod => prod.id === product.id);

    if (product) {
      commit('setItemQuantity', {
        index: state.cart.indexOf(product),
        qty
      });

      const productInfo = state.products.find(prod => prod.id === product.id);
      commit('setProductInfoQuantity', {
        index: state.products.indexOf(productInfo),
        qty
      });

      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }
};

export const mutations = {
  setProducts (state, products) {
    state.products = products;
  },

  setCart (state, cart) {
    state.cart = cart;
  },

  pushProductToCart (state, product) {
    state.cart.push(product);
  },

  removeItemFromCart (state, item) {
    state.cart.splice(state.cart.indexOf(item), 1);
  },

  setItemQuantity (state, { index, qty }) {
    state.cart[index].quantity = qty;
  },

  setProductInfoQuantity (state, { index, qty }) {
    state.products[index].quantity = qty;
  }
};
