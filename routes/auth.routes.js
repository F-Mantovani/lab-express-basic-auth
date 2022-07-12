const router = require('express').Router();

// Those are the routes for the login
router.get('/auth/login', (req, res) => {
  res.render('auth/login')
})

router.post('/auth/login', (req, res) => {
  res.render('auth/login')
})


// Those are the routes for signup
router.get('/auth/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/auth/signup', (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  res.render('auth/signup')
})



module.exports = router