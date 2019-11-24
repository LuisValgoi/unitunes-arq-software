module.exports = {
  checkAuth(req, res, next) {
    if ((req.url !== '/signUp' && req.url !== '/signIn' && req.url !== '/forgotPassword')
      && (!req.session || !req.session.authenticated)) {
      req.flash('error', 'Please log in to access content');
      res.redirect("/signIn");
      return;
    }

    next();
  }
}