const router = require('express').Router();

var data = [];
router.post('/', function (req, res) {
  console.log(req);
  data.push("hello");
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send({data:data});
})
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send({data:data});
})

module.exports = router;