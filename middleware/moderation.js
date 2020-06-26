export default function ({ redirect, $auth }) {
  if (!['admin', 'mod'].includes($auth.user.role)) {
    redirect('/');
  }
};
