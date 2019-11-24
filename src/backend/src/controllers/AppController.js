module.exports = {
  root(req, res) {
    console.log('Inside the homepage callback function');
    console.log("sessionID", req.sessionID);

    const availableAPIs = [
      '/university',
      '/academic',
      '/account',
      '/movimentation',
      '/media',
      '/library',
      '/favorite'];

    res.json(availableAPIs);
  },
  loginGet(req, res) {
    console.log('Inside GET /login callback function')
    console.log(req.sessionID)
    res.send(`You got the login page!\n`)
  },
  loginPost(req, res) {
    console.log('Inside POST /login callback function')
    console.log(req.body)
    res.send(`You posted to the login page!\n`)
  },
  logout(req, res) {
  }
}