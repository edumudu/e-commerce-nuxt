export default function ({ redirect, $auth, $axios }) {
  $axios.onError((error) => {
    if (error.response.status === 401) {
      $auth.reset();
      return redirect('/login');
    }
  });
}
