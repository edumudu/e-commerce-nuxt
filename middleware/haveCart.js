export default function ({ redirect, store }) {
  if (!store.getters['cart/cartItems'].length) {
    redirect('/products');
  }
};
